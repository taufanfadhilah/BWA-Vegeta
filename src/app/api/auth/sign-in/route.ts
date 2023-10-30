import Response from "@/lib/api.response";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    const user = await prisma.user.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (!user || !bcrypt.compareSync(payload.password, user.password)) {
      return Response({
        message: "Incorrect email or password",
        status: 404,
      });
    }

    const data: Partial<User> = {
      ...user,
      password: undefined,
    };

    return Response({
      message: "Sign in successfully",
      data,
    });
  } catch (error: any) {
    return Response({
      message: "Sign in failed",
      data: error,
      status: 500,
    });
  }
}

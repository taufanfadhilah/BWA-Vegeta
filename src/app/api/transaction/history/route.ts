import Response from "@/lib/api.response";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const take = 9;
    const query = req.nextUrl.searchParams;
    const page = query.get("page")
      ? parseInt(query.get("page") as string) - 1
      : 0;
    const skip = page * take;

    const totalTransactions = await prisma.transaction.count({
      where: {
        userId: session?.user.id,
      },
    });

    const transactions = await prisma.transaction.findMany({
      take,
      skip,
      where: {
        userId: session?.user.id,
      },
      include: {
        Checkout: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response({
      message: "Get all history transactions",
      data: {
        data: transactions,
        total: totalTransactions,
      },
    });
  } catch (error) {
    return Response({
      message: "Failed to get all history",
      data: error,
      status: 500,
    });
  }
}

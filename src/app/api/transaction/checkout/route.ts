import Response from "@/lib/api.response";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const payload = await req.json();
  const product = await prisma.product.findFirst({
    where: {
      id: payload.product_id,
    },
  });

  if (!product) {
    return Response({
      message: "Product not found",
      status: 404,
    });
  }

  const checkout = await prisma.checkout.create({
    data: {
      productId: product.id,
        userId: session?.user.id,
      qty: payload.qty,
      pricePerItem: product.price,
    },
  });

  return Response({
    message: "Checkout success",
    data: checkout,
  });
}

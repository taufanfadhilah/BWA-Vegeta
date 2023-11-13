import Response from "@/lib/api.response";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({});

    return Response({
      message: "Get all products",
      data: products,
    });
  } catch (error: any) {
    return Response({
      message: "Failed to get products",
      data: error,
      status: 500,
    });
  }
}

import Response from "@/lib/api.response";
import { prisma } from "@/lib/prisma";
import { ProductCategory } from "@prisma/client";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const take = 9;
    const query = req.nextUrl.searchParams;
    const page = query.get("page")
      ? parseInt(query.get("page") as string) - 1
      : 0;
    const categories = query.get("category")?.split(",") || undefined;
    const skip = page * take;

    const queryConditions = {
      AND: [
        {
          category: {
            in: categories as ProductCategory[],
          },
        },
      ],
    };

    const totalProducts = await prisma.product.count({});
    const products = await prisma.product.findMany({
      take,
      skip,
      where: queryConditions,
    });

    return Response({
      message: "Get all products",
      data: {
        total: totalProducts,
        data: products,
      },
    });
  } catch (error: any) {
    return Response({
      message: "Failed to get products",
      data: error,
      status: 500,
    });
  }
}

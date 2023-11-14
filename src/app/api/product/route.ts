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
    const minPrice = query.get("min_price")
      ? parseInt(query.get("min_price") as string)
      : undefined;
    const maxPrice = query.get("max_price")
      ? parseInt(query.get("max_price") as string)
      : undefined;
    const ratings =
      query
        .get("rating")
        ?.split(",")
        .map((val) => +val) || undefined;
    const skip = page * take;

    const queryConditions = {
      AND: [
        {
          category: {
            in: categories as ProductCategory[],
          },
          price: {
            gte: minPrice,
            lte: maxPrice,
          },
          rating: {
            in: ratings,
          },
        },
      ],
    };

    const totalProducts = await prisma.product.count({
      where: queryConditions,
    });
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

import Response from "@/lib/api.response";
import { prisma } from "@/lib/prisma";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, params: Params) {
  const product = await prisma.product.findUnique({
    where: {
      id: params.params.id,
    },
  });

  return Response({
    message: "Get product by ID",
    data: product,
  });
}

import Response from "@/lib/api.response";
import { NextResponse } from "next/server";

export async function GET() {
  return Response({
    message: "Get all users",
    data: [
      {
        id: 1,
        name: "Taufan",
      },
      {
        id: 2,
        name: "Fadhilah",
      },
    ],
    status: 200,
  });
}

export async function POST() {
  return Response({
    message: "New user created",
    data: [
      {
        id: 3,
        name: "Aldi",
      },
    ],
  });
}

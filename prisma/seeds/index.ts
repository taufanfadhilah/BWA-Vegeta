import { PrismaClient } from "@prisma/client";
import ProductsSeeder from "./product.seed";

const prisma = new PrismaClient();
const main = async () => {
  await ProductsSeeder();
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("🚀 ~ file: index.ts:12 ~ main ~ e:", e);
    await prisma.$disconnect();
    process.exit(1);
  });

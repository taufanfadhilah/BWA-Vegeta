import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 day
  },
  adapter: PrismaAdapter(prisma) as AuthOptions["adapter"],
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          type: "text",
        },
        password: {
          type: "password",
        },
      },
      authorize: async (credentials, req) => {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (
          credentials?.email === user?.email &&
          bcrypt.compareSync(
            credentials?.password as string,
            user?.password as string
          )
        ) {
          return user;
        }
        return null as any;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
      }
      return session;
    },
  },
};

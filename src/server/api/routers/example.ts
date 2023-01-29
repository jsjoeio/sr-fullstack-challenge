import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Joe Hello ${input.text}`,
      };
    }),
  getAllFruit: publicProcedure.query(async ({ ctx }) => {
    const fruits = await ctx.prisma.fruit.findMany();
    return fruits;
  }),
});

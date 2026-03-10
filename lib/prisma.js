// src/lib/prisma.js
import { PrismaClient } from "@prisma/client"; // note .js if using ESM

// Use a global variable to prevent multiple instances in dev
const globalForPrisma = globalThis;

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

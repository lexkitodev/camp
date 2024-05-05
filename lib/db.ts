import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

export const db = globalThis.prisma || new PrismaClient()

// @ts-ignore
if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  globalThis.prisma = db
}

export default prisma

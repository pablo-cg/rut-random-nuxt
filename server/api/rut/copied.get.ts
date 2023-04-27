import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const rutsCopied = await prisma.rut_copied.count()

  return {
    totalRutsCopied: rutsCopied
  }
})

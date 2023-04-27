import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const emailsCopied = await prisma.email_copied.count()

  return {
    totalEmailsCopied: emailsCopied
  }
})

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const { _sum } = await prisma.email_generations.aggregate({
    _sum: {
      emails_generated: true
    }
  })

  return _sum
})

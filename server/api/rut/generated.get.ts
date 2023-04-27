import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
  const { _sum } = await prisma.rut_generations.aggregate({
    _sum: {
      ruts_generated: true
    }
  })

  return _sum
})

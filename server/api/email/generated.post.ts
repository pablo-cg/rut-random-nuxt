import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const data = await prisma.email_generations.create({
    data: body
  })

  return data
})

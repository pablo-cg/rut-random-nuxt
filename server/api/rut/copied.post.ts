import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const data = await prisma.rut_copied.create({
    data: body
  })

  return data
})

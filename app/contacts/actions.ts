'use server'

import type { Inputs } from '@/pages/Contacts/Form'
import prisma from '@/lib/prisma'

export async function createMessage(data: Inputs) {
  return prisma.message.create({
    data,
  })
}
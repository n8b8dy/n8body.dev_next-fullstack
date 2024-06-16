'use server'

import type { MessageSchema } from '@/schemas/message'
import type { Message } from '@prisma/client'
import type { ActionResponse } from '@/types/actions'

import { parse, ValiError } from 'valibot'

import prisma from '@/lib/prisma'
import { messageSchema } from '@/schemas/message'

export async function createMessage(
  data: MessageSchema
): Promise<ActionResponse<Message>> {
  try {
    const message = parse(messageSchema, data)

    return {
      data: await prisma.message.create({ data: message }),
    }
  } catch (err) {
    if (err instanceof ValiError) return { error: err.message }
    return { error: `Something went wrong!` }
  }
}

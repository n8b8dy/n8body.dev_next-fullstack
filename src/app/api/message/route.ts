import { NextRequest, NextResponse } from 'next/server'
import { z, ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'

import prisma from '@/lib/prisma'

import type { Message } from '@prisma/client'
import type { ErrorResponse } from '@/types/error'
import { verifyCaptcha } from '@/utils/verifyCaptcha'

export type MessagePostRequestBody = {
  data: {
    username: string
    email: string
    text: string
  }
  token: string
}

const postSchema = z.object({
  username: z.string().min(3).max(255),
  email: z.string().email().max(255),
  text: z.string().min(3).max(4095),
})

const reasons = [
  'иди лесом, пёс железный', // (с) Баен... френдли фаер получается...
  'i\'ve just caught you, silly bag o\' bolts!',
  'you think that 0.1 + 0.2 !== 0.3'
]

export const POST = async (request: NextRequest): Promise<NextResponse<ErrorResponse & { message: Message | null }>> => {
  try {
    const { data, token } = await request.json()

    if (!token || typeof token !== 'string') return NextResponse.json({
      error: {
        name: 'RecaptchaError',
        reason: 'RecaptchaError: correct token should be provided',
      },
      message: null,
    }, { status: 400 })


    const verified = await verifyCaptcha(token)
    if (!verified) {
      const reason = reasons[Math.floor(Math.random() * reasons.length)]

      return NextResponse.json({
        error: {
          name: 'RecaptchaError',
          reason: `RecaptchaError: ${reason}`,
        },
        message: null,
      }, { status: 418 })
    }

    const parsed = postSchema.parse(data)

    const message = await prisma.message.create({
      data: parsed,
    })

    return NextResponse.json({
      error: null,
      message,
    }, { status: 200 })
  } catch (err: any) {
    if (err instanceof ZodError) return NextResponse.json({
      error: {
        name: 'ValidationError',
        reason: fromZodError(err).toString(),
      },
      message: null,
    }, { status: 400 })

    return NextResponse.json({
      error: {
        name: 'Unknown error',
        reason: 'An unknown error has occurred. Please try again later',
      },
      message: null,
    }, { status: 500 })
  }
}

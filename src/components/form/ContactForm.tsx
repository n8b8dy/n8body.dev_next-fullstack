'use client'

import type { ChangeEventHandler, FC } from 'react'
import { FormEventHandler, useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { Input } from '@/components/form/Input'
import { Textarea } from '@/components/form/Textarea'
import { StandardButton } from '@/components/button/StandardButton'
import { InfoParagraph } from '@/components/text/InfoParagraph'

import type { Message } from '@prisma/client'
import type { ErrorResponse } from '@/types/error'
import type { MessagePostRequestBody } from '@/app/api/message/route'

export const ContactForm: FC = () => {
  const [data, setData] = useState<MessagePostRequestBody['data']>({
    username: '',
    email: '',
    text: '',
  })
  const [sending, setSending] = useState(false)
  const [response, setResponse] = useState<ErrorResponse & { message: Message | null }>()

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const createChangeHandler = (key: keyof typeof data): ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> => {
    return (event) => {
      if (response) setResponse(undefined)
      setData(prev => ({ ...prev, [key]: event.target.value }))
    }
  }

  const submitHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()

    if (!recaptchaRef.current) return

    const token = await recaptchaRef.current.executeAsync()
    if (!token) return

    setResponse(undefined)
    setSending(true)

    const response = await fetch('/api/message', {
      body: JSON.stringify({
        data,
        token,
      } as MessagePostRequestBody),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    recaptchaRef.current.reset()

    if (response.ok) setData({ username: '', text: '', email: '' })

    const json = await response.json()

    setResponse(json)
    setSending(false)
  }

  let infoParagraph = <InfoParagraph type="standard">{sending ? 'Sending your message...' : 'Waiting for you to send...'}</InfoParagraph>
  if (response?.error) infoParagraph = <InfoParagraph type="error">{response.error.reason}</InfoParagraph>
  else if (response?.message) infoParagraph = <InfoParagraph type="success">Your message sent successfully, {response.message.username}</InfoParagraph>

  return <form className="py-2 flex flex-col gap-1" onSubmit={submitHandler}>
    <div className="flex justify-between flex-wrap gap-1">
      <Input
        type="text"
        name="username"
        placeholder="Username"
        required
        minLength={3}
        maxLength={255}
        disabled={sending}
        value={data.username}
        onChange={createChangeHandler('username')}
        className="flex-grow"
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        required
        minLength={3}
        maxLength={255}
        disabled={sending}
        value={data.email}
        onChange={createChangeHandler('email')}
        className="flex-grow"
      />
    </div>
    <Textarea
      name="text"
      placeholder="Your message should go here..."
      required
      minLength={3}
      maxLength={4095}
      disabled={sending}
      value={data.text}
      onChange={createChangeHandler('text')}
      className="w-full min-h-[234px] resize-none"
    />
    <div className="flex items-center justify-between">
      {infoParagraph}
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
      />
      <StandardButton type="submit" disabled={sending}>{sending ? 'Sending...' : 'Send'}</StandardButton>
    </div>
    <div className="px-1 mt-5 text-sm text-center opacity-30">
      This site is protected by reCAPTCHA and the
      Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.
    </div>
  </form>
}

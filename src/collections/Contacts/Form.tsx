'use client'

import type { SubmitHandler } from 'react-hook-form'

import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { HiOutlineUser } from 'react-icons/hi'
import { MdAlternateEmail } from 'react-icons/md'
import { VscNewline } from 'react-icons/vsc'

import { Input } from '@/collections/Contacts/Input'
import { TextArea } from '@/collections/Contacts/TextArea'

import { cn } from '@/utils/styles'
import { MessageSchema, messageSchema } from '@/schemas/message'

import { createMessage } from '@/actions/message'

export interface FormProps {}

export const Form = ({}: FormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      isDirty,
      errors,
    },
  } = useForm<MessageSchema>({
    delayError: 1000,
    resolver: valibotResolver(messageSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })
  const [status, setStatus] = useState<'success' | 'error' | null>(null)
  const [error, setError] = useState<string | null>()
  const statusTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const submitHandler: SubmitHandler<MessageSchema> = async (data, event) => {
    event?.preventDefault()

    console.log(data)
    const response = await createMessage(data)
    console.log(response)

    if (response.data) {
      reset()
      setStatus('success')
    } else {
      setStatus('error')
      setError(response.error)
    }

    statusTimeoutRef.current && clearTimeout(statusTimeoutRef.current)
    statusTimeoutRef.current = setTimeout(() => {
      setStatus(null)
      setError(null)
    }, 8000)
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={cn('flex flex-col gap-2 text-lg')} noValidate>
      <Input
        type="text"
        placeholder="Elliot Alderson"
        {...register('name')}
        errors={errors}
        icon={<HiOutlineUser className={cn('absolute top-[15px] left-2.5 text-2xl')}/>}
        label="Name *"
      />
      <Input
        type="email"
        placeholder="example@n8body.dev"
        {...register('email')}
        errors={errors}
        icon={<MdAlternateEmail className={cn('absolute top-[15px] left-2.5 text-2xl')}/>}
        label="Email *"
      />
      <TextArea
        rows={6}
        placeholder="In real open source, you have the right to control your own destiny. &copy; Linus Torvalds"
        {...register('message')}
        errors={errors}
        label="Message *"
      />

      <div className={cn('flex justify-between items-center gap-2')}>
        <div className={cn(
          'py-1 text-sm italic',
          status === 'success' && 'text-green-600',
          status === 'error' && 'text-red-600',
        )}>
          {!isDirty && status === 'success' && <span>Message sent successfully!</span>}
          {status === 'error' && <span>{error || 'Couldn\'t send your message, try later!'}</span>}
        </div>

        <div className={cn('flex gap-2')}>
          <button type="reset" className={cn(
            'px-4 py-1 rounded transition bg-action-button',
          )}>
            <span>Reset</span>
          </button>

          <button type="submit" className={cn(
            'px-4 py-1 flex items-center gap-1 rounded text-neutral-50 transition',
            'animate-background-shine bg-gradient-FVW',
          )}>
            <span>Send</span>
            <VscNewline className={cn('text-2xl')}/>
          </button>
        </div>
      </div>
    </form>
  )
}

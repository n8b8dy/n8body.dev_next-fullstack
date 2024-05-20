'use client'

import type { FC } from 'react'
import type { SubmitHandler } from 'react-hook-form'

import { useForm } from 'react-hook-form'
import { HiOutlineUser } from 'react-icons/hi'
import { MdAlternateEmail } from 'react-icons/md'
import { VscNewline } from 'react-icons/vsc'

import { Input } from '@/pages/Contacts/Input'
import { TextArea } from '@/pages/Contacts/TextArea'
import { cn } from '@/utils/styles'
import { emailRegex } from '@/utils/regex'


export type Inputs = {
  name: string
  email: string
  message: string
}

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<Inputs>({
    delayError: 1000,
  })

  const submitHandler: SubmitHandler<Inputs> = async (data) => {}

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={cn('flex flex-col gap-2 text-lg')} noValidate>
      <Input
        type="text"
        placeholder="Elliot Alderson"
        {...register('name', {
          required: { value: true, message: 'Name is required' },
          minLength: { value: 2, message: 'Name should be at least 2 characters' },
          maxLength: { value: 64, message: 'Name shouldn\'t exceed 64 characters' },
        })}
        errors={errors}
        icon={<HiOutlineUser className={cn('absolute top-[15px] left-2.5 text-2xl')}/>}
        label="Name *"
      />
      <Input
        type="email"
        placeholder="example@n8body.dev"
        {...register('email', {
          required: 'Email is required',
          maxLength: { value: 128, message: 'Email shouldn\'t exceed 128 characters' },
          pattern: { value: emailRegex, message: 'Email should look like: username@domain.com' },
        })}
        errors={errors}
        icon={<MdAlternateEmail className={cn('absolute top-[15px] left-2.5 text-2xl')}/>}
        label="Email *"
      />
      <TextArea
        rows={6}
        placeholder="In real open source, you have the right to control your own destiny. &copy; Linus Torvalds"
        {...register('message', {
          required: 'Message is required',
          minLength: { value: 8, message: 'Message should be at least 8 characters' },
          maxLength: { value: 512, message: 'Name shouldn\'t exceed 512 characters' },
        })}
        errors={errors}
        label="Message *"
      />

      <div className={cn('flex justify-end gap-2')}>
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
    </form>
  )
}

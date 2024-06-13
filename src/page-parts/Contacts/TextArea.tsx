'use client'

import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FieldErrors } from 'react-hook-form'

import { IoWarningOutline } from 'react-icons/io5'
import { ErrorMessage } from '@hookform/error-message'
import { forwardRef } from 'react'

import { cn } from '@/utils/styles'

export interface TextAreaProps extends Omit<ComponentPropsWithRef<'textarea'>, 'ref'> {
  name: string
  errors: FieldErrors

  label: ReactNode
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  name, id, className, errors, label, ...props
}, ref) => {
  return (
    <div>
      <label htmlFor={id} className={cn('pl-1')}>
        {label}
      </label>

      <textarea name={name} id={id} className={cn(
        'w-full mt-1 px-3 py-2 border-[1px] border-neutral-300 dark:border-neutral-800 rounded bg-white dark:bg-neutral-900 resize-none',
        Boolean(errors[name]) && '[&:not(:focus)]:border-red-600',
        className
      )} ref={ref} {...props}/>

      <ErrorMessage name={name} errors={errors} render={({ message }) => (
        <div className={cn('mt-1 relative text-sm text-red-600 italic')}>
          <IoWarningOutline className={cn('top-[-1.5px] relative mr-1 inline text-[1.1em]')}/>
          <span>{message}</span>
        </div>
      )}/>
    </div>
  )
})
TextArea.displayName = 'TextArea'

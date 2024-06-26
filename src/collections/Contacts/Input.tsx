'use client'

import type { ComponentPropsWithRef, ReactNode } from 'react'
import type { FieldErrors } from 'react-hook-form'

import { forwardRef } from 'react'
import { ErrorMessage } from '@hookform/error-message'
import { IoWarningOutline } from 'react-icons/io5'

import { cn } from '@/utils/styles'

export interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'ref'> {
  name: string
  errors: FieldErrors

  label: ReactNode
  icon: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  name, id, className, errors, label, icon, ...props
}, ref) => {
  return (
    <div>
      <label htmlFor={id} className={cn('pl-1')}>
        {label}
      </label>

      <div className={cn('relative')}>
        <div className={cn('absolute top-0 left-0 opacity-50')}>
          {icon}
        </div>
        <input name={name} id={id} className={cn(
          'w-full mt-1 p-2 pl-11 pr-2 border-[1px] border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded',
          Boolean(errors[name]) && '[&:not(:focus)]:border-red-600',
          className,
        )} ref={ref} {...props}/>
      </div>

      <ErrorMessage name={name} errors={errors} render={({ message }) => (
        <div className={cn('mt-1 relative text-sm text-red-600 italic')}>
          <IoWarningOutline className={cn('top-[-1.5px] relative mr-1 inline text-[1.1em]')}/>
          <span>{message}</span>
        </div>
      )}/>
    </div>
  )
})
Input.displayName = 'Input'

import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/styles'

export interface BoldProps extends ComponentPropsWithoutRef<'b'> {}

export const Bold = ({ children, className, ...props }: BoldProps) => {
  return <b className={cn('font-semibold', className)} {...props}>{children}</b>
}

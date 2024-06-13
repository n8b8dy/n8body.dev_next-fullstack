import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/styles'

export interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {}

export const Paragraph = ({ children, className, ...props }: ParagraphProps) => {
  return (
    <p className={cn('my-1 text-lg lg:text-xl', className)} {...props}>
      {children}
    </p>
  )
}

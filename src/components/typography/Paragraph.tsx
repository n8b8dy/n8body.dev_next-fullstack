import type { ComponentProps, FC } from 'react'
import { cn } from '@/utils/styles'

export interface ParagraphProps extends ComponentProps<'p'> {}

export const Paragraph: FC<ParagraphProps> = ({ children, className, ...props }) => {
  return (
    <p className={cn('my-2')} {...props}>
      {children}
    </p>
  )
}

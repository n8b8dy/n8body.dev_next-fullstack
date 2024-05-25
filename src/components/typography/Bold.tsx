import type { ComponentProps, FC } from 'react'
import { cn } from '@/utils/styles'

export interface BoldProps extends ComponentProps<'b'> {}

export const Bold: FC<BoldProps> = ({ children, className, ...props }) => {
  return <b className={cn('font-semibold', className)} {...props}>{children}</b>
}

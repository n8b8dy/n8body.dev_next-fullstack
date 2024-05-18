import type { ComponentProps, FC } from 'react'
import { cn } from '@/utils/styles'

export type Heading1Props = ComponentProps<'h1'>

export const Heading1: FC<Heading1Props> = ({ children, className, ...props }) => {
  return (
    <h1 className={cn('text-7xl')} {...props}>
      {children}
    </h1>
  )
}

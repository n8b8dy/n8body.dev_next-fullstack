import type { ComponentProps, FC } from 'react'
import { cn } from '@/utils/styles'

export interface SectionProps extends ComponentProps<'section'> {}

export const Section: FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section className={cn('max-w-screen-2xl flex flex-col')} {...props}>
      {children}
    </section>
  )
}

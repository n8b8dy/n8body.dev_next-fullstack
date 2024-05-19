import type { ComponentProps, FC } from 'react'
import { cn } from '@/utils/styles'

export interface SectionProps extends ComponentProps<'section'> {}

export const Section: FC<SectionProps> = ({ children, className, ...props }) => {
  return (
    <section className={cn('min-w-[200px] w-full max-w-screen-2xl px-4 py-4 flex flex-col', className)} {...props}>
      {children}
    </section>
  )
}

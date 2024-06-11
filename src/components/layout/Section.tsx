import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/utils/styles'

export interface SectionProps extends ComponentPropsWithoutRef<'section'> {}

export const Section = ({ children, className, ...props }: SectionProps) => {
  return (
    <section className={cn('min-w-[200px] w-full max-w-screen-2xl px-4 py-2 flex flex-col', className)} {...props}>
      {children}
    </section>
  )
}

import type { FC } from 'react'
import { Section } from '@/components/layout/Section'
import { cn } from '@/utils/styles'
import Link from 'next/link'

export interface ErrorSectionProps {
  status: number
  description?: string
  reset?: VoidFunction
}

export const ErrorSection: FC<ErrorSectionProps> = ({ status, description, reset }) => {
  return (
    <Section className={cn('my-auto items-center gap-1')}>
      <h2 className={cn('text-4xl text-transparent bg-clip-text', 'bg-gradient-FVW')}>{status}</h2>
      <h3 className={cn('text-xl mt-0 mb-3')}>{description}</h3>
      <Link href="/" className={cn('px-3 py-1 font-medium rounded transition', 'bg-gradient-FVW')}>Go to home</Link>
    </Section>
  )
}

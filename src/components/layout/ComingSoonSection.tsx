import Link from 'next/link'
import { Section } from '@/components/layout/Section'
import { cn } from '@/utils/styles'

export interface ComingSoonSectionProps {}

export const ComingSoonSection = ({}: ComingSoonSectionProps) => {
  return (
    <Section className={cn('my-auto items-center gap-1')}>
      <h2 className={cn('text-4xl text-center text-transparent font-medium uppercase bg-clip-text', 'animate-background-shine bg-gradient-FVW')}>Coming Soon</h2>
      <h3 className={cn('text-xl text-center')}>This part of the site is still being developed.</h3>
      <Link href="https://github.com/n8b8dy/n8body.dev_next-fullstack" className={cn('mt-3 px-4 py-1 font-medium rounded', 'bg-gradient-FVW')}>Get Updates</Link>
    </Section>
  )
}

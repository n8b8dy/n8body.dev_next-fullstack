'use client'

import type { FC } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Heading } from '@/components/typography/Heading'
import { cn } from '@/utils/styles'

export const TechnologyHeading: FC = () => {
  return (
    <Heading tag="h4" className={cn('flex flex-col min-[350px]:flex-row')}>Actively coding in&nbsp;
      <TypeAnimation speed={2} repeat={Infinity} sequence={[
        2000,
        'JavaScript', 2000,
        'TypeScript', 2000,
        'React', 2000,
        'Next.js', 2000,
        'Golang', 2000,
      ]} cursor wrapper="span" className={cn(
        'inline-block text-[1.1em] font-semibold text-transparent bg-clip-text animate-text-shine bg-[500%_auto]',
        'bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600',
      )}/>
    </Heading>
  )
}
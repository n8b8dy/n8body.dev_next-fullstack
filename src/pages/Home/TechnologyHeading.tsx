'use client'

import type { FC } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Heading } from '@/components/typography/Heading'

export const TechnologyHeading: FC = () => {
  return (
    <Heading tag="h4">Actively coding in <TypeAnimation speed={2} repeat={Infinity} sequence={[
      2000,
      'JavaScript', 2000,
      "TypeScript", 2000,
      'React', 2000,
      'Next.js', 2000,
      'Golang', 2000,
      'Whatever is interesting', 2000,
    ]} cursor wrapper="span" className="text-[1.1em] font-semibold"/>
    </Heading>
  )
}
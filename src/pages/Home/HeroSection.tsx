import type { FC } from 'react'
import { Heading } from '@/components/typography/Heading'
import { cn } from '@/utils/styles'
import { TypeAnimation } from 'react-type-animation'
import { Section } from '@/components/layout/Section'
import { TechnologyHeading } from '@/pages/Home/TechnologyHeading'

export const HeroSection: FC = () => {
  return (
    <Section>
      <Heading tag="h1">Ruslan Shamsutdinov</Heading>
      <div className={cn('pl-1')}>
        <Heading tag="h4">Front-end Developer</Heading>
        <TechnologyHeading/>
      </div>
    </Section>
  )
}
import { Fragment } from 'react'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { HeroSection } from '@/pages/Home/HeroSection'

import { cn } from '@/utils/styles'

export default function Home() {
  return (
    <Fragment>
      <div className={cn(
        'relative w-full h-[calc(100vh-62px)] flex justify-center items-center',
        'before:bg-gradient-FVW after:before:bg-gradient-FVW bg-pattern-circuit',
      )}>
        <HeroSection/>
      </div>

      <Section>
        <Heading tag="h3" terminal>
          Welcome
        </Heading>
      </Section>

      <Section>
        <Heading tag="h3" terminal>
          About me
        </Heading>
      </Section>

      <Section>
        <Heading tag="h3" terminal>
          Tech Stack
        </Heading>
      </Section>

      <Section>
        <Heading tag="h3" terminal>
          Projects
        </Heading>
      </Section>

      <Section>

      </Section>
    </Fragment>
  )
}

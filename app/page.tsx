import { Fragment } from 'react'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { HeroSection } from '@/pages/Home/HeroSection'
import { AboutMeSection } from '@/pages/Home/AboutMeSection'

import { cn } from '@/utils/styles'

export default function Home() {
  return (
    <Fragment>
      <div className={cn(
        'relative w-full min-h-[inherit] flex justify-center items-center',
        'before:absolute before:w-full before:h-1/6 before:left-0 before:top-0 before:bg-gradient-to-t before:from-transparent before:to-neutral-50 before:dark:to-neutral-950',
        'after:absolute after:w-full after:h-1/3 after:left-0 after:bottom-0 after:bg-gradient-to-b after:from-transparent after:to-neutral-50 after:dark:to-neutral-950',
        'bg-pattern-circuit',
      )}>
        <HeroSection/>
      </div>

      <AboutMeSection/>

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


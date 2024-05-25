import Link from 'next/link'
import { Fragment } from 'react'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { HeroSection } from '@/pages/Home/HeroSection'
import { Paragraph } from '@/components/typography/Paragraph'
import { Bold } from '@/components/typography/Bold'

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

      <Section>
        <Heading tag="h3" terminal>
          About me
        </Heading>
        <Paragraph>
          Hello, <Bold className={'bg-clip-text text-transparent bg-gradient-FVW '}>username</Bold>! Welcome to my personal website —
          I am an ambitious developer from Bulgaria specialising in front-end development using Typescript and React.
          Currently, <Bold>I am actively looking for a job</Bold>, so... <Link href="/contacts" className={cn('rounded underline')}>contact me</Link>!<br/>
        </Paragraph>
        <Paragraph>
          Most of my free time is spent developing my pet projects or studying new technologies. Additionally, my interests include system administration, history, philosophy, and playing the guitar.
        </Paragraph>
        <Paragraph>
          <i>Oh, and I use Arch btw.</i>
        </Paragraph>
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


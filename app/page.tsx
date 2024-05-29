import { Fragment } from 'react'

import { Section } from '@/components/layout/Section'
import { HeroSection } from '@/pages/Home/HeroSection'
import { AboutMeSection } from '@/pages/Home/AboutMeSection'
import { TechStackSection } from '@/pages/Home/TechStackSection'
import { ProjectsSection } from '@/pages/Home/ProjectsSection'

import prisma from '@/lib/prisma'
import { cn } from '@/utils/styles'

async function getData() {
  const projects = await prisma.project.findMany({
    take: 8,
    orderBy: { createdAt: 'desc' },
  })

  return {
    projects,
  }
}

export default async function Home() {
  const { projects } = await getData()

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
      <TechStackSection/>
      <ProjectsSection projects={projects}/>

      <Section>

      </Section>
    </Fragment>
  )
}


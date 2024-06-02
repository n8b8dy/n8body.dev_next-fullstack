import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { Catalog } from '@/page-parts/Projects/Catalog'

import prisma from '@/lib/prisma'
import { cn } from '@/utils/styles'

async function getData() {
  const projects = await prisma.project.findMany()

  return {
    projects,
  }
}

export default async function Projects() {
  const { projects } = await getData()

  return (
    <Section className={cn('gap-2')}>
      <Heading tag="h2" className={cn('my-2 text-2xl sm:text-3xl md:text-3xl font-medium')} terminal>Projects</Heading>

      <Catalog projects={projects}/>
    </Section>
  )
}

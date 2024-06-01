import Markdown from 'react-markdown'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { BreadCrumbs } from '@/components/layout/BreadCrumbs'

import prisma from '@/lib/prisma'
import { cn } from '@/utils/styles'
import { ProjectTags, ProjectTechnologies } from '@/constants'
import { MarkdownCompiler } from '@/components/markdown/MarkdownCompiler'
import { ErrorSection } from '@/components/layout/ErrorSection'

export async function generateStaticParams() {
  return prisma.project.findMany({
    select: { slug: true },
  })
}

async function getData(slug: string) {
  const project = await prisma.project.findUnique({
    where: { slug },
  })

  return {
    project,
  }
}

export default async function ProjectsSlug({ params }: {
  params: { slug: string }
}) {
  const { project } = await getData(params.slug)

  if (!project) return (
    <ErrorSection status={404} description="Project Not Found"/>
  )

  const { id, title, description, tags, technologies, sections } = project

  return (
    <Section>
      <BreadCrumbs breadcrumbs={[
        { content: 'Home', href: '/' },
        { content: 'Projects', href: '/projects' },
        { content: title },
      ]}/>

      <div className={cn('my-2 flex items-center flex-wrap gap-x-2')}>
        <Heading tag="h2" className={cn('text-3xl sm:text-3xl md:text-3xl font-medium')} terminal>{title}</Heading>
        {tags.map(tag => <div key={`${id}-${tag}`} className={cn('mt-1 px-3 py-1 text-sm bg-neutral-200 dark:bg-neutral-800 rounded-full')}>
          {ProjectTags[tag]}
        </div>)}
      </div>

      <div className={cn('mb-2 flex flex-wrap gap-2')}>
        {technologies.map(technology => <div key={`${id}-${technology}`} className={cn('px-2 py-1.5 flex gap-1.5 text-sm bg-neutral-200 dark:bg-neutral-800 rounded')}>
          <div className={cn('w-5')}>
            {ProjectTechnologies[technology].icon}
          </div>
          {ProjectTechnologies[technology].title}
        </div>)}
      </div>

      <div className={cn('flex flex-col gap-1 text-lg')}>
        {sections.map((section, index) => <MarkdownCompiler key={`${id}-section-${index}`} content={section}/>)}
      </div>
    </Section>
  )
}

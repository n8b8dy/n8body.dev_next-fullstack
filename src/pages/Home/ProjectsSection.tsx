import type { FC } from 'react'
import type { Project } from '@prisma/client'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'

import { cn } from '@/utils/styles'
import { ProjectTags, ProjectTechnologies } from '@/constants'

export interface ProjectsSectionProps {
  projects: Array<Project>
}

const ProjectCard: FC<Project> = ({ id, title, description, tags, technologies }) => {
  return (
    <div className={cn('px-4 py-3 flex flex-col gap-0.5 bg-opacity-50 bg-neutral-200 dark:bg-neutral-900 rounded')}>
      <Heading tag="h5" href={`/projects/${id}`}>
        {title}
      </Heading>
      <p className={cn('mb-1 flex-1')}>{description}</p>
      <div className={cn('items-center flex flex-wrap gap-1.5 text-xs md:text-sm')}>
        {technologies.map(technology => <div key={`${id}-${technology}`} className={cn('w-5 md:w-6')}>
          {ProjectTechnologies[technology].icon}
        </div>)}
        {tags.map(tag => <div key={`${id}-${tag}`} className={cn('px-3 py-1 bg-neutral-300 dark:bg-neutral-800 rounded-full')}>
          {ProjectTags[tag]}
        </div>)}
      </div>
    </div>
  )
}

export const ProjectsSection: FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <Section>
      <Heading tag="h3" href="/projects" terminal>
        Projects
      </Heading>
      <div className={cn('mt-1 grid md:grid-cols-2 gap-2')}>
        {projects.map((props) => <ProjectCard key={props.id} {...props}/>)}
      </div>
    </Section>
  )
}

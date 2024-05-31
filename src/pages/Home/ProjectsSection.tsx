import type { FC } from 'react'
import type { Project } from '@prisma/client'

import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { ProjectCard } from '@/components/project/ProjectCard'

import { cn } from '@/utils/styles'

export interface ProjectsSectionProps {
  projects: Array<Project>
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

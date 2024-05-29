import type { ReactNode } from 'react'
import type { ProjectTag, ProjectTechnology } from '@prisma/client'
import { GopherSVG, JavascriptSVG, NodeSVG, PostgresSVG, PrismaSVG, ReactSVG, TailwindSVG, TypescriptSVG, VueSVG } from '@/components/lib/svg'

export const ProjectTechnologies: Record<ProjectTechnology, {
  title: string
  icon: ReactNode
}> = {
  JAVASCRIPT: { title: 'JavaScript', icon: <JavascriptSVG/> },
  TYPESCRIPT: { title: 'TypeScript', icon: <TypescriptSVG/> },

  GOLANG: { title: 'Golang', icon: <GopherSVG/> },
  NODEJS: { title: 'Node.js', icon: <NodeSVG/> },

  REACT: { title: 'React', icon: <ReactSVG/> },
  VUEJS: { title: 'Vue.js', icon: <VueSVG/> },

  TAILWIND: { title: 'Tailwind', icon: <TailwindSVG/> },

  POSTGRES: { title: 'Postgres', icon: <PostgresSVG/> },
  PRISMA: { title: 'Prisma', icon: <PrismaSVG/> },
}

export const ProjectTags: Record<ProjectTag, string> = {
  FRONTEND: 'Front End',
  BACKEND: 'Back End',
  FULLSTACK: 'Full Stack',
  SCRAPER: 'Scraper',
  BOT: 'Bot',
}

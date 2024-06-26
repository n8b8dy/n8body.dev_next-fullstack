import type { ReactNode } from 'react'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { DockerSVG, GitSVG, GopherSVG, JavascriptSVG, LinuxSVG, PostgresSVG, ReactSVG, TailwindSVG, TypescriptSVG } from '@/components/lib/svg'
import { cn } from '@/utils/styles'

const Technologies = [
  { title: 'JavaScript', icon: <JavascriptSVG/> },
  { title: 'TypeScript', icon: <TypescriptSVG/> },
  { title: 'React', icon: <ReactSVG/> },
  { title: 'Tailwind', icon: <TailwindSVG/> },
  { title: 'Golang', icon: <GopherSVG/> },
  { title: 'Postgres', icon: <PostgresSVG/> },
  { title: 'Git', icon: <GitSVG/> },
  { title: 'Docker', icon: <DockerSVG className={cn('transform scale-[1.5]')}/> },
  { title: 'Linux', icon: <LinuxSVG className={cn('transform scale-[1.1]')}/> },
] as const

export interface TechStackSectionProps {}

export const TechStackSection = ({}: TechStackSectionProps) => {
  return (
    <Section>
      <Heading tag="h3" terminal>
        Tech Stack
      </Heading>
      <div className={cn('mt-2 mb-1 flex justify-center sm:justify-start flex-wrap gap-4')}>
        {Technologies.map((technology) => <Card key={`tech-${technology.title}`} {...technology}/>)}
      </div>
    </Section>
  )
}

interface CardProps {
  title: string
  icon: ReactNode
}

const Card = ({ icon, title }: CardProps) => {
  return (
    <div className={cn(
      'w-24 h-20 md:w-28 md:h-24 px-1 pt-2 pb-1.5 md:px-2 md:pt-4 md:pb-3',
      'flex flex-col items-center justify-center gap-1',
      'text-sm md:text-lg bg-opacity-50 bg-neutral-200 dark:bg-neutral-900 rounded',
    )}>
      {icon}
      <span>{title}</span>
    </div>
  )
}

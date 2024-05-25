import type { FC, ReactNode } from 'react'
import { Section } from '@/components/layout/Section'
import { Heading } from '@/components/typography/Heading'
import { DockerSVG, GitSVG, GopherSVG, JavascriptSVG, ReactSVG, TypescriptSVG } from '@/components/lib/svg'
import { cn } from '@/utils/styles'

const Technologies = [
  { title: 'JavaScript', icon: <JavascriptSVG/> },
  { title: 'TypeScript', icon: <TypescriptSVG/> },
  { title: 'React', icon: <ReactSVG/> },
  { title: 'Golang', icon: <GopherSVG/> },
  { title: 'Git', icon: <GitSVG/> },
  { title: 'Docker', icon: <DockerSVG className={cn('transform scale-[1.5]')}/> },
] as const

interface TechnologyCardProps {
  title: string
  icon: ReactNode
}

const TechnologyCard: FC<TechnologyCardProps> = ({ icon, title }) => {
  return (
    <div className={cn('w-28 h-24 px-2 pt-4 pb-3 flex flex-col items-center justify-center gap-1 bg-opacity-50 bg-neutral-900 rounded')}>
      {icon}
      <span>{title}</span>
    </div>
  )
}

export const TechStackSection: FC = () => {
  return (
    <Section>
      <Heading tag="h3" terminal>
        Tech Stack
      </Heading>
      <div className={cn('mt-2 mb-1 flex flex-wrap gap-4')}>
        {Technologies.map((technology) => <TechnologyCard key={`tech-${technology.title}`} {...technology}/>)}
      </div>
    </Section>
  )
}

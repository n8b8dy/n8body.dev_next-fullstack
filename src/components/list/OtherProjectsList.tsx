import type { FC } from 'react'
import type { OtherProject } from '@prisma/client'
import { DiscList } from '@/components/list/DiscList'
import Markdown from 'react-markdown'

export type OtherProjectsListProps = {
  projects: Array<OtherProject>
}
const OtherProjectsListItem: FC<OtherProject> = ({ title, description, link }) => {
  const parsedTitle = <Markdown components={{ p: 'span' }}>{title}</Markdown>
  const titleElement = link
    ? <a href={link}>{parsedTitle}</a>
    : <span>{parsedTitle}</span>

  return <li>
    {titleElement}
    {
      description && <DiscList className="pl-6">
        <li>
          <Markdown components={{ p: 'span' }}>{description}</Markdown>
        </li>
      </DiscList>
    }
  </li>
}

export const OtherProjectsList: FC<OtherProjectsListProps> = ({ projects }) => {
  return <DiscList className="py-1">
    {
      projects.map(project => <OtherProjectsListItem key={project.id} {...project}/>)
    }
    <li>...and some more are being developed right now</li>
  </DiscList>
}

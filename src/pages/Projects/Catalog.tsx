'use client'

import type { FC } from 'react'
import type { Project } from '@prisma/client'

import { Fragment, useMemo, useState } from 'react'

import { ProjectCard } from '@/components/project/ProjectCard'
import { cn } from '@/utils/styles'

export interface CatalogProps {
  projects: Array<Project>
}

// TODO: Create Card specially for this grid
export const Catalog: FC<CatalogProps> = ({ projects }) => {
  const [searchText, setSearchText] = useState('')

  const filteredProjects = useMemo(() => projects.filter(p => {
    // TODO: Rework filtering
    return p.title.toLowerCase().includes(searchText)
      || p.description?.toLowerCase().includes(searchText)
  }), [searchText, projects])

  return (
    <Fragment>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={(event) => setSearchText(event.currentTarget.value)}
        className={cn('px-2 py-2 border-[1px] border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded')}
      />

      {/* TODO: Add filter sidebar */}
      {filteredProjects.length === 0
        ? <div className={cn('py-4 flex justify-center')}>
          <span className={cn('text-lg italic opacity-50')}>Couldn't find any projects...</span>
        </div>
        : <div className={cn('py-2 grid lg:grid-cols-2 gap-2 rounded')}>
          {filteredProjects.map(props => <ProjectCard key={props.id} {...props}/>)}
        </div>}
    </Fragment>
  )
}

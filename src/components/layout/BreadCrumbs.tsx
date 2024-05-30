import type { FC, ReactNode } from 'react'

import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { cn } from '@/utils/styles'
import { interleave } from '@/utils/arrays'

interface BreadCrumbProps {
  content: ReactNode
  href?: string
}

export interface BreadCrumbsProps {
  breadcrumbs: Array<BreadCrumbProps>
}

const BreadCrumb: FC<BreadCrumbProps> = ({ content, href }) => {
  return (
    href === undefined
      ? <span className={cn('px-2 py-1 opacity-75')}>{content}</span>
      : <Link href={href} className={cn(
        'px-2 py-1 rounded opacity-75 hover:opacity-100 active:opacity-75 transition',
        'bg-action-button',
      )}>{content}</Link>
  )
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className={cn('flex flex-wrap items-center text-sm md:text-base')}>
      {interleave(
        breadcrumbs.map((props) => <BreadCrumb key={`breadcrumbs-${props.content}`} {...props}/>),
        <MdOutlineKeyboardArrowRight/>,
      )}
    </div>
  )
}

import type { ReactNode } from 'react'

import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { cn } from '@/utils/styles'
import { interleave } from '@/utils/arrays'

export interface BreadCrumbsProps {
  breadcrumbs: Array<BreadCrumbProps>
}

export const BreadCrumbs = ({ breadcrumbs }: BreadCrumbsProps) => {
  return (
    <div className={cn('flex flex-wrap items-center text-sm md:text-base')}>
      {interleave(
        breadcrumbs.map((props) => <BreadCrumb key={`breadcrumbs-${props.content}`} {...props}/>),
        <MdOutlineKeyboardArrowRight/>,
      )}
    </div>
  )
}

interface BreadCrumbProps {
  content: ReactNode
  href?: string
}

const BreadCrumb = ({ content, href }: BreadCrumbProps) => {
  return (
    href === undefined
      ? <span className={cn('px-2 py-1 opacity-75')}>{content}</span>
      : <Link href={href} className={cn(
        'px-2 py-1 rounded opacity-75 hover:opacity-100 active:opacity-75 transition',
        'bg-action-button',
      )}>{content}</Link>
  )
}

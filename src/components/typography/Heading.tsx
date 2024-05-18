import type { ComponentProps, FC, ReactNode } from 'react'
import { createElement } from 'react'
import { cn } from '@/utils/styles'

const HeadingClassnames = {
  'h1': 'text-7xl md:text-8xl font-medium',
  'h3': 'text-3xl md:text-4xl font-medium',
  'h4': 'text-xl sm:text-2xl md:text-3xl leading-tight',
} as const

type TagVariants = keyof typeof HeadingClassnames

export interface HeadingProps extends ComponentProps<TagVariants> {
  tag: TagVariants
}

export const Heading: FC<HeadingProps> = ({ children, tag, className, ...props }): ReactNode => {
  return (
    createElement(tag, {
      className: cn(HeadingClassnames[tag], className),
      ...props,
    }, children)
  )
}

import type { ComponentProps, FC, ReactNode } from 'react'
import { createElement } from 'react'
import { cn } from '@/utils/styles'

const HeadingClassnames = {
  'h1': 'text-6xl sm:text-7xl font-medium',
  'h2': 'text-3xl sm:text-4xl md:text-5xl',
  'h3': 'text-2xl sm:text-3xl md:text-4xl font-medium',
  'h4': 'text-xl sm:text-3xl',
} as const

type TagVariants = keyof typeof HeadingClassnames

export interface HeadingProps extends ComponentProps<TagVariants> {
  tag: TagVariants
  terminal?: boolean
}

export const Heading: FC<HeadingProps> = ({ children, tag, terminal = false, className, ...props }): ReactNode => {
  return (
    createElement(tag, {
        className: cn(
          HeadingClassnames[tag],
          terminal && [
            'before:content-["$_"] before:text-transparent before:bg-clip-text',
            'before:animate-background-shine before:bg-gradient-FVW',
          ],
          className,
        ),
        ...props,
      },
      children)
  )
}

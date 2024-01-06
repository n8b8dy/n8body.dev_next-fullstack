import type { FC, HTMLAttributes } from 'react'
import clsx from 'clsx'
import Markdown from 'react-markdown'

export type ParagraphProps = { children: string } & HTMLAttributes<HTMLParagraphElement>

export const MarkdownParagraph: FC<ParagraphProps> = ({ children, className, ...props }) => {
  return <Markdown className={clsx('text-lg text-justify mx-2 my-1', className)} {...props}>
    {children}
  </Markdown>
}

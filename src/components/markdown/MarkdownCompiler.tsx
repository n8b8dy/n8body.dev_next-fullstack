import type { FC } from 'react'
import Markdown from 'react-markdown'
import { cn } from '@/utils/styles'

interface MarkdownCompilerProps {
  content: string
}

export const MarkdownCompiler: FC<MarkdownCompilerProps> = ({ content }) => {
  return (
    <Markdown
      components={{
        h1({ className, ...props }) { return <h1 className={cn('my-1 text-3xl font-semibold', className)} {...props}/> },
        h2({ className, ...props }) { return <h2 className={cn('my-1 text-2xl font-semibold', className)} {...props}/> },
        h3({ className, ...props }) { return <h3 className={cn('my-1 text-xl font-medium', className)} {...props}/> },
        p({ className, ...props }) { return <p className={cn('mb-2 text-lg', className)} {...props}/> },
      }}
    >
      {content}
    </Markdown>
  )
}

import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import { cn } from '@/utils/styles'
import Link from 'next/link'

export interface MarkdownCompilerProps {
  content: string
}

export const MarkdownCompiler = ({ content }: MarkdownCompilerProps) => {
  return (
    <Markdown
      components={{
        h1({ className, ...props }) { return <h1 className={cn('my-1 text-3xl font-semibold', className)} {...props}/> },
        h2({ className, ...props }) { return <h2 className={cn('my-1 text-2xl font-semibold', className)} {...props}/> },
        h3({ className, ...props }) { return <h3 className={cn('my-1 text-xl font-medium', className)} {...props}/> },
        p({ className, ...props }) { return <p className={cn('mb-2 text-lg', className)} {...props}/> },
        a({ className, href, ...props }) { return <Link href={String(href)} className={cn('underline', className)} {...props}/> },

        ul({ className, ...props }) { return <ul className={cn('pl-5 list-disc', className)} {...props}/> },

        code({ children, className, node, ref, ...props }) {
          const match = /language-(\w+)/.exec(className || '')

          return match ? (
            <SyntaxHighlighter
              {...props}
              PreTag="div"
              language={match[1]}
              style={oneDark}
              className={cn('rounded', className)}
              customStyle={{ fontSize: '14px' }}
              showLineNumbers
            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
          ) : (
            <code {...props} className={cn('', className)}>
              {children}
            </code>
          )
        },
      }}
    >{content}</Markdown>
  )
}

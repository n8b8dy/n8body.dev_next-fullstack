import Link from 'next/link'
import { cn } from '@/utils/styles'

export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  return (
    <div className={cn('w-full flex justify-center bg-neutral-50 dark:bg-neutral-950 bg-opacity-25 border-t-[1px] dark:border-neutral-800')}>
      <footer className={cn('w-full max-w-screen-2xl p-4 flex flex-col items-start opacity-50')}>
        <Link href="/" className={cn('p-1 text-xl leading-tight font-semibold rounded')}>n8body.dev</Link>
        <span className={cn('p-1 text-sm')}>
          Created by Ruslan Shamsutdinov, aka n8body, with love and bugs. <br/>
          The source code can be found <Link href="https://github.com/n8b8dy/n8body.dev_next-fullstack" className={cn('rounded underline')}>here</Link>.
        </span>
      </footer>
    </div>
  )
}

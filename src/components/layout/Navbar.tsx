import type { FC } from 'react'
import { cn } from '@/utils/styles'
import { Heading } from '@/components/typography/Heading'

export const Navbar: FC = () => {
  return (
    <div className={cn('w-full flex justify-center bg-neutral-50 dark:bg-neutral-950 bg-opacity-50 border-b-[1px] dark:border-neutral-800')}>
      <nav className={cn('w-full max-w-screen-2xl p-3 flex justify-between')}>
        <Heading tag="h4" className={cn('font-semibold')}>n8body.dev</Heading>
        <div>
          <button className="">

          </button>
        </div>
      </nav>
    </div>
  )
}
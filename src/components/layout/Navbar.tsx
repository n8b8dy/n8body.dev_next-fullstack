import type { FC } from 'react'
import { cn } from '@/utils/styles'
import { Heading } from '@/components/typography/Heading'
import { ThemeSwitch } from '@/components/buttons/ThemeSwitch'

export const Navbar: FC = () => {
  return (
    <div className={cn('w-full flex justify-center bg-neutral-50 dark:bg-neutral-950 bg-opacity-25 border-b-[1px] dark:border-neutral-800')}>
      <nav className={cn('w-full max-w-screen-2xl p-3 flex justify-between items-center')}>
        <Heading tag="h4" className={cn('font-semibold')}>n8body.dev</Heading>
        <div>
          <ThemeSwitch/>
        </div>
      </nav>
    </div>
  )
}
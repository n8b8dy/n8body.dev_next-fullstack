import type { FC } from 'react'

import Link from 'next/link'

import { ThemeSwitch } from '@/components/buttons/ThemeSwitch'

import { cn } from '@/utils/styles'

export const Navbar: FC = () => {
  return (
    <div className={cn('w-full flex justify-center bg-neutral-50 dark:bg-neutral-950 bg-opacity-25 border-b-[1px] dark:border-neutral-800')}>
      <div className={cn('w-full max-w-screen-2xl px-5 py-3 flex justify-between items-center')}>
        <Link href="/" className={cn('text-3xl leading-tight font-semibold')}>n8body.dev</Link>

        <nav>
        </nav>

        <div>
          <ThemeSwitch/>
        </div>
      </div>
    </div>
  )
}
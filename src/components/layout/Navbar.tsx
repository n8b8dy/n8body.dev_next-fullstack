'use client'

import type { FC } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { ThemeSwitch } from '@/components/buttons/ThemeSwitch'

import { cn } from '@/utils/styles'

const NavbarButtons = [
  { href: '/', text: 'Home' },
  { href: '/books', text: 'Books' },
  { href: '/projects', text: 'Projects' },
] as const

export const Navbar: FC = () => {
  const pathname = usePathname()

  return (
    <div className={cn('w-full flex justify-center bg-neutral-50 dark:bg-neutral-950 bg-opacity-25 border-b-[1px] dark:border-neutral-800')}>
      <div className={cn('w-full max-w-screen-2xl px-5 py-2 flex justify-between items-center')}>
        <div className={cn('flex items-center gap-4')}>
          <Link href="/" className={cn('p-1 text-3xl leading-tight font-semibold rounded')}>n8body.dev</Link>

          <nav className={cn('flex gap-1')}>
            {NavbarButtons.map(button => {
              return (
                <Link key={button.href} href={button.href} className={cn(
                  'px-3 py-2 flex items-center gap-1 rounded transition',
                  'hover:bg-neutral-200 hover:dark:bg-neutral-900',
                  'active:bg-neutral-200 active:dark:bg-neutral-900',
                )}>
                  <span className={cn(pathname === button.href && 'text-transparent bg-clip-text animate-text-shine bg-[500%_auto] bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600')}>
                    {button.text}
                  </span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div>
          <ThemeSwitch/>
        </div>
      </div>
    </div>
  )
}
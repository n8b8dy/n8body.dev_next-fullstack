import type { FC } from 'react'
import { NavbarButton, NavbarButtonProps } from '@/components/layout/NavbarButton'

import Link from 'next/link'

import { ThemeSwitch } from '@/components/buttons/ThemeSwitch'


import { cn } from '@/utils/styles'

const NavbarButtons: Array<NavbarButtonProps> = [
  { href: '/', text: 'Home' },
  { href: '/books', text: 'Books' },
  { href: '/projects', text: 'Projects' },
  { href: '/contacts', text: 'Contacts' },
] as const

export const Navbar: FC = () => {
  return (
    <div className={cn('w-full flex justify-center bg-neutral-50 dark:bg-neutral-950 bg-opacity-25 border-b-[1px] dark:border-neutral-800')}>
      <div className={cn('w-full max-w-screen-2xl px-5 py-2 flex justify-between items-center')}>
        <div className={cn('flex items-center gap-4')}>
          <Link href="/" className={cn('p-1 text-3xl leading-tight font-semibold rounded')}>n8body.dev</Link>

          <nav className={cn('flex gap-1 text-lg')}>
            {NavbarButtons.map(props => <NavbarButton key={props.href} {...props}/>)}
          </nav>
        </div>

        <div>
          <ThemeSwitch/>
        </div>
      </div>
    </div>
  )
}
'use client'

import type { FC } from 'react'
import type { NavbarButtonProps } from '@/components/layout/NavbarButton'

import Link from 'next/link'

import { NavbarButton } from '@/components/layout/NavbarButton'
import { Menu } from '@/components/layout/Menu'
import { cn } from '@/utils/styles'

export const NavbarButtons: Array<NavbarButtonProps> = [
  { href: '/', text: 'Home' },
  { href: '/projects', text: 'Projects' },
  { href: '/books', text: 'Books' },
  { href: '/contacts', text: 'Contacts' },
] as const

export const Navbar: FC = () => {
  return (
    <div className={cn('flex items-center gap-2')}>
      <Menu/>

      <Link href="/" className={cn(
        'hidden min-[320px]:inline relative top-[-2px] p-1 text-3xl leading-tight font-semibold rounded'
      )}>n8body.dev</Link>

      <nav className={cn('ml-2 hidden sm:flex gap-1 text-lg')}>
        {NavbarButtons.map(props => <NavbarButton key={`nav-${props.href}`} {...props}/>)}
      </nav>
    </div>
  )
}

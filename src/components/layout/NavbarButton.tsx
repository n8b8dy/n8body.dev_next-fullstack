'use client'

import type { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/styles'

export interface NavbarButtonProps {
  href: string
  text: string
}

export const NavbarButton: FC<NavbarButtonProps> = ({ href, text }) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={cn(
      'px-3 py-2 flex items-center gap-1 rounded transition',
      'hover:bg-neutral-200 hover:dark:bg-neutral-900',
      'active:bg-neutral-200 active:dark:bg-neutral-900',
    )}>
      <span className={cn(pathname.toLowerCase() === href && 'text-transparent bg-clip-text animate-text-shine bg-[500%_auto] bg-gradient-to-r from-fuchsia-600 via-violet-600 to-purple-600')}>
        {text}
      </span>
    </Link>
  )
}
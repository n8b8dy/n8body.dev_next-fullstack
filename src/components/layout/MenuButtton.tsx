import type { Dispatch, FC, SetStateAction } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/styles'

export interface MenuButtonProps {
  setOpen: Dispatch<SetStateAction<boolean>>
  href: string
  text: string
}

export const MenuButton: FC<MenuButtonProps> = ({ setOpen, href, text }) => {
  const pathname = usePathname()

  return (
    <Link href={href} onClick={() => setOpen(false)} className={cn(
      'px-3 py-2 flex items-center rounded text-lg transition bg-action-button',
    )}>
      <span
        className={cn(
          'mx-auto',
          String(pathname).toLowerCase() === href && [
            'text-transparent bg-clip-text',
            'animate-background-shine bg-gradient-FVW',
          ],
        )}>{text}</span>
    </Link>
  )
}

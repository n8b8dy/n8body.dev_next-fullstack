import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utils/styles'

export interface NavbarButtonProps {
  href: string
  text: string
}

export const NavbarButton = ({ href, text }: NavbarButtonProps) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={cn(
      'px-3 py-2 flex items-center gap-1 rounded text-lg transition bg-action-button',
    )}>
      <span
        className={cn(
          String(pathname).toLowerCase() === href && [
            'text-transparent bg-clip-text',
            'animate-background-shine bg-gradient-FVW',
          ],
        )}>{text}</span>
    </Link>
  )
}

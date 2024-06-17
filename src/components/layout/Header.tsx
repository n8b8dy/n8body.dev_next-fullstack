import { Navbar } from '@/components/layout/Navbar'
import { ThemeSwitch } from '@/components/buttons/ThemeSwitch'
import { AuthButton } from '@/components/buttons/AuthButton'
import { cn } from '@/utils/styles'

export interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <div className={cn('w-full min-h-[62px] flex justify-center bg-neutral-50 dark:bg-neutral-950 bg-opacity-25 border-b-[1px] dark:border-neutral-800 z-10')}>
      <header className={cn('w-full max-w-screen-2xl px-5 py-2 flex justify-between items-center overscroll-x-auto')}>
        <Navbar/>

        <div className={cn('flex items-center gap-1')}>
          <ThemeSwitch/>
          <AuthButton/>
        </div>
      </header>
    </div>
  )
}

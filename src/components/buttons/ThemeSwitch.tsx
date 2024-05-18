'use client'

import type { FC } from 'react'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsMoonStars } from 'react-icons/bs'
import { IoPartlySunnyOutline } from 'react-icons/io5'

import { cn } from '@/utils/styles'

export const ThemeSwitch: FC = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <div className={cn('w-[40px] h-[40px] rounded animate-pulse bg-neutral-200 dark:bg-neutral-900')}></div>

  return (
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className={cn(
      'p-2 rounded text-xl transition',
      'hover:bg-neutral-200 hover:dark:bg-neutral-900',
      'active:bg-neutral-200 active:dark:bg-neutral-900',
    )}>
      {resolvedTheme === 'dark' ? <BsMoonStars/> : <IoPartlySunnyOutline/>}
    </button>
  )
}
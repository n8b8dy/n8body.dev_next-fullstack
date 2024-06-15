'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsMoonStars } from 'react-icons/bs'
import { IoPartlySunnyOutline } from 'react-icons/io5'

import { cn } from '@/utils/styles'

export interface ThemeSwitchProps {}

export const ThemeSwitch = ({}: ThemeSwitchProps) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <div className={cn('w-11 h-11 rounded', 'bg-placeholder')}></div>
  )

  return (
    <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className={cn(
      'w-11 h-11 flex justify-center items-center rounded text-xl transition',
      'bg-action-button',
    )}>
      {resolvedTheme === 'dark' ? <BsMoonStars className={cn('overflow-visible')}/> : <IoPartlySunnyOutline/>}
    </button>
  )
}

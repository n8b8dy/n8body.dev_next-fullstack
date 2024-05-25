'use client'

import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { Bold } from '@/components/typography/Bold'
import { cn } from '@/utils/styles'

export const UserIpText: FC = () => {
  const [ip, setIp] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://api.ipify.org')
      .then(resp => resp.text())
      .then(ip => setIp(ip))
      .catch(() => setIp('username'))
  }, [])

  if (!ip) return <span className={cn('inline-block relative top-[2.5px] mr-0.5 w-28 h-5 bg-placeholder rounded')}></span>

  return (
    <Bold className={cn('bg-clip-text text-transparent bg-gradient-FVW')}>{ip}</Bold>
  )
}

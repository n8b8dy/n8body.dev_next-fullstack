'use client'

import { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { PiUserCircleLight } from 'react-icons/pi'
import Image from 'next/image'

import { cn } from '@/utils/styles'

// TODO: Create dropdown
export const AuthButton = () => {
  const [mounted, setMounted] = useState(false)
  const { data: session } = useSession()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <div className={cn('w-24 h-11 rounded', 'bg-placeholder')}></div>
  )

  if (!session) return (
    <button
      onClick={() => signIn()}
      className={cn('px-3 py-2 flex items-center gap-1 rounded text-lg transition', 'bg-action-button')}
    >
      <PiUserCircleLight className={cn('w-6 h-6')}/>
      <span className={cn('mt-0.5')}>Login</span>
    </button>
  )

  const name = session.user?.name || 'Unknown'

  return (
    <button
      onClick={() => signOut()}
      className={cn(
        'px-3 py-2 flex items-center gap-1.5 rounded text-lg transition',
        'bg-action-button',
      )}>
      {session.user?.image
        ? <Image
          src={session.user.image}
          alt={`${name} Avatar`}
          width={24}
          height={24}
          className={cn('rounded-full')}
        />
        : <PiUserCircleLight className={cn('w-6 h-6')}/>}
      <span className={cn('mt-0.5')}>{name}</span>
    </button>
  )
}

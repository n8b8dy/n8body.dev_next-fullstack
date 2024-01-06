'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import { Heading1 } from '@/components/text/Heading1'
import { Heading3 } from '@/components/text/Heading3'
import { StandardButton } from '@/components/button/StandardButton'
import Image from 'next/image'

export type CustomErrorPageProps = {
  error: {
    name: string
    status?: number
    reason?: string
  }
  reset?: () => void
}

export const CustomErrorPage: FC<CustomErrorPageProps> = ({ error, reset }) => {
  const { push } = useRouter()
  const { name, status, reason } = error

  return <div className={clsx(
    'h-screen',
    'flex flex-col',
    'justify-center items-center',
  )}>
    {
      // Inspired by my own code from manga.ovh xd
      status === 500 ? <div className="relative mt-40">
        <Image src="/error-load.png" alt="500 Error Background" width={370} height={320} className={clsx(
          'absolute',
          '-bottom-2 left-1/2',
          '-translate-x-1/2',
          'select-none pointer-events-none',
          'w-auto max-w-[calc(100vw-2rem)] max-h-80',
          '-z-10',
        )}/>
        <Heading1 className="!text-8xl drop-shadow-text-border-1 text-white">{status}</Heading1>
      </div> : <Heading1 className="!text-5xl">{name} {status}</Heading1>
    }
    {reason && <Heading3 className="text-center">{reason}</Heading3>}
    <div className="flex flex-wrap justify-center gap-3 mt-5">
      <StandardButton onClick={() => push('/')} className="w-52">Return home</StandardButton>
      {reset && <StandardButton onClick={reset} className="w-52">Try again</StandardButton>}
    </div>
  </div>
}

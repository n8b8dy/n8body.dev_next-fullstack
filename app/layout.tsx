import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { Rubik } from 'next/font/google'

import { Header } from '@/components/layout/Header'
import { cn } from '@/utils/styles'

import { Providers } from './providers'

import './globals.css'

const rubik = Rubik({ subsets: ['latin-ext', 'cyrillic-ext'] })

export const metadata: Metadata = {
  title: 'n8body.dev',
  description: 'Personal website of an individual under the nickname n8body',
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body className={cn(rubik.className, 'min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950')}>
    <Providers>
      <Header/>
      <main className={cn('flex flex-col grow items-center')}>
        {children}
      </main>
    </Providers>
    </body>
    </html>
  )
}

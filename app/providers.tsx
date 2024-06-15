import type { PropsWithChildren } from 'react'

import { getServerSession } from 'next-auth'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from '@/providers /SessionProvider'

export async function Providers({ children }: PropsWithChildren) {
  const session = await getServerSession()

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
    </ThemeProvider>
  )
}

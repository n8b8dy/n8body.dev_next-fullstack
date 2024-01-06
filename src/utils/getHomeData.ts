import { cache } from 'react'
import prisma from '@/lib/prisma'

export const revalidate = 300

export const getHomeData = cache(async () => {
  return await Promise.all([
    prisma.section.findMany(),
    prisma.otherProject.findMany(),
  ])
})

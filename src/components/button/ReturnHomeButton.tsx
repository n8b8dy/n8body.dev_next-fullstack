'use client'

import { useRouter } from 'next/navigation'
import { IoReturnDownBackSharp } from 'react-icons/io5'

export const ReturnHomeButton = () => {
  const router = useRouter()

  return <button onClick={() => router.push("/")} className="flex items-center py-2 px-4 gap-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 outline-neutral-500 focus:outline-1">
    <IoReturnDownBackSharp size={32}/>
    <span className="text-xl">Return</span>
  </button>
}

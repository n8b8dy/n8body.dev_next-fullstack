'use client'

import { Fragment, useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import { NavbarButtons } from '@/components/layout/Navbar'
import { MenuButton } from '@/components/layout/MenuButtton'

import { cn } from '@/utils/styles'

export interface MenuProps {}

export const Menu = ({}: MenuProps) => {
  const [open, setOpen] = useState(false)

  useEffect((() => {
    if (open) document.body.classList.add('overflow-hidden')
    else document.body.classList.remove('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }), [open, setOpen])

  return (
    <Fragment>
      <button onClick={() => setOpen(b => !b)} className={cn(
        'sm:hidden p-1.5 rounded text-2xl transition bg-action-button',
      )}>
        <FiMenu/>
      </button>

      <div onClick={() => setOpen(false)} className={cn(
        'fixed top-0 left-0 w-screen h-screen sm:hidden flex backdrop-blur z-10',
        !open && 'hidden',
      )}></div>

      <nav className={cn(
        'fixed left-0 -bottom-full w-screen px-4 py-6 hidden border-t-[1px] rounded-t-xl z-10 transition-position',
        'sm:hidden flex flex-col gap-0.5',
        'border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-950',
        open && 'bottom-0',
      )}>
        {NavbarButtons.map(props => <MenuButton key={`menu-${props.href}`} setOpen={setOpen} {...props}/>)}
      </nav>
    </Fragment>
  )
}

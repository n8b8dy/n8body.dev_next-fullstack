import Link from 'next/link'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TbMail, TbMailCode } from 'react-icons/tb'
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiLogoTelegram } from 'react-icons/bi'

import { Section } from '@/components/layout/Section'
import { Form } from '@/pages/Contacts/Form'
import { cn } from '@/utils/styles'

const Paragraphs = [
  { text: 'Burgas, Bulgaria', icon: <HiOutlineLocationMarker/> },
  { text: 'contact@n8body.dev', icon: <TbMailCode className={cn('relative top-[1px]')}/> },
  { text: 'ruslanshamsutdinov.dev@gmail.com', icon: <TbMail className={cn('relative top-[1px]')}/> },
] as const

const Links = [
  { text: 'Discord', href: 'https://discord.com/users/520239310591492114', icon: <FaDiscord/> },
  { text: 'Telegram', href: 'https://t.me/n8body', icon: <BiLogoTelegram/> },
  { text: 'GitHub', href: 'https://github.com/n8b8dy', icon: <FaGithub/> },
  { text: 'LinkedIn', href: 'https://www.linkedin.com/in/ruslan-shamsutdinov-dev/', icon: <FaLinkedin/> },
] as const

export default function Contacts() {
  return (
    <Section className={cn('max-w-screen-2xl my-auto lg:flex-row lg:gap-[4%]')}>
      <div className={cn('px-2 py-4 items-center lg:flex-[0_0_48%]')}>
        <div className={cn('max-w-lg mx-auto')}>
          <h2 className={cn(
            'mb-4 text-3xl text-transparent font-semibold bg-clip-text',
            'animate-background-shine bg-gradient-FVW',
          )}>Write Me</h2>
          <Form/>
        </div>
      </div>

      <div className={cn('px-2 py-4 lg:flex-[0_0_48%]')}>
        <div className={cn('max-w-lg mx-auto')}>
          <h2 className={cn(
            'mb-4 text-3xl text-transparent font-semibold bg-clip-text',
            'animate-background-shine bg-gradient-FVW',
          )}>Contacts</h2>

          <div className={cn('pb-4 flex flex-col gap-4 overflow-x-auto')}>
            {Paragraphs.map(({ text, icon }) => <div key={text} className={cn('flex items-center gap-1.5')}>
              <span className={cn('text-2xl md:text-3xl')}>{icon}</span>
              <span className={cn('text-lg md:text-xl')}>{text}</span>
            </div>)}
          </div>

          <h2 className={cn(
            'mt-8 mb-4 text-3xl text-transparent font-semibold bg-clip-text',
            'animate-background-shine bg-gradient-FVW',
          )}>Social Media</h2>

          <div className={cn('flex flex-wrap gap-2')}>
            {Links.map(({ text, href, icon }) => <Link key={href} href={href} className={cn(
              'px-2 py-2 md:py-3 flex justify-center items-center gap-3 rounded transition',
              'bg-action-button',
            )}>
              <span className={cn('text-xl md:text-2xl')}>{icon}</span>
              <span className={cn('text-lg md:text-xl text-wrap')}>{text}</span>
            </Link>)}
          </div>
        </div>
      </div>
    </Section>
  )
}

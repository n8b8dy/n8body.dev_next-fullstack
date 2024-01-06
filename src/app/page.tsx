import { Fragment } from 'react'
import clsx from 'clsx'
import { RiGithubFill } from 'react-icons/ri'
import { IoMail } from 'react-icons/io5'
import { RiTelegramFill } from 'react-icons/ri'

import { ScrollDownButton } from '@/components/button/ScrollDownButton'
import { ToggleThemeButton } from '@/components/button/ToggleThemeButton'
import { Heading1 } from '@/components/text/Heading1'
import { Heading3 } from '@/components/text/Heading3'
import { HomeSection } from '@/components/text/HomeSection'
import { TypedText } from '@/components/text/TypedText'
import { HorizontalDivider } from '@/components/layout/HorizontalDivider'
import { OtherProjectsList } from '@/components/list/OtherProjectsList'
import { ContactForm } from '@/components/form/ContactForm'
import { ComfortaaFont } from '@/app/fonts'
import { getHomeData } from '@/utils/getHomeData'

const descriptions = [
  'a front-end developer',
  '*searching a job*',
  '*probably coding rn*',
  'a front-end developer',
]

const links = [
  { icon: <RiGithubFill title="Github"/>, href: 'https://github.com/n8b8dy' },
  { icon: <IoMail title="Email"/>, href: 'mailto:contact@n8body.dev' },
  { icon: <RiTelegramFill title="Telegram"/>, href: 'https://t.me/n8body' },
]

export default async function Home() {
  const [sections, otherProjects] = await getHomeData()

  return <Fragment>
    <div className="h-screen flex flex-col gap-1 justify-between items-center py-6">
      <ToggleThemeButton/>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2 items-center">
          {links.map(({ icon, href }) => (
            <a key={href} href={href} className={clsx(
              'text-3xl',
              'opacity-75 hover:opacity-80',
              'dark:opacity-50 dark:hover:opacity-75',
              'hover:animate-pulse',
              'focus:animate-pulse',
            )}>{icon}</a>
          ))}
        </div>
        <Heading1>n8body</Heading1>
        <TypedText values={descriptions} component="h2" className={clsx(
          ComfortaaFont.className,
          'mt-1',
          'empty:h-7 xl:empty:h-8',
          'relative',

          'text-xl xl:text-2xl',
          'text-center',
          'opacity-75',
          'dark:opacity-50',

          'data-[state=done]:after:hidden',
          'after:absolute',
          'after:inline-block',
          'after:text-[""]',
          'after:w-0.5 after:h-5 xl:after:h-[26px]',
          'after:ml-[1.5px]',
          'after:top-[3px] xl:after:top-[2.5px]',
          'after:bg-black dark:after:bg-white',

          'data-[state=typing]:after:animate-none',
          'data-[state=erasing]:after:animate-none',
          'after:animate-blink',
        )}/>
      </div>
      <ScrollDownButton href="#content"/>
    </div>
    <div id="content" className="container max-w-4xl mx-auto my-8">
      {
        sections?.map(section => <HomeSection key={section.id} {...section}/>)
      }

      <Heading3>Other projects</Heading3>
      <OtherProjectsList projects={otherProjects}/>

      <HorizontalDivider/>

      <Heading3>Contact Me</Heading3>
      <ContactForm/>
    </div>
  </Fragment>
}

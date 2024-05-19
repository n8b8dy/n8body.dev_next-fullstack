import { Section } from '@/components/layout/Section'
import { cn } from '@/utils/styles'

export default function Contacts() {
  return (
    <Section className={cn('lg:flex-row max-w-screen-2xl')}>
      <div className={cn('lg:flex-[0_0_50%]')}>
        Form
      </div>

      <div className={cn('lg:flex-[0_0_50%]')}>
        Contacts
      </div>
    </Section>
  )
}

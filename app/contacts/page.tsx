import { Section } from '@/components/layout/Section'
import { Form } from '@/pages/Contacts/Form'
import { cn } from '@/utils/styles'

export default function Contacts() {
  return (
    <Section className={cn('max-w-screen-2xl lg:flex-row my-auto')}>
      <div className={cn('px-2 py-4 items-center lg:flex-[0_0_50%]')}>
        <div className={cn('max-w-lg mx-auto')}>
          <h2 className={cn(
            'mb-4 text-3xl text-transparent font-semibold bg-clip-text',
            'animate-background-shine bg-gradient-FVW'
          )}>
            Write Me
          </h2>
          <Form/>
        </div>
      </div>

      <div className={cn('px-2 py-4 lg:flex-[0_0_50%]')}>
        Contacts
      </div>
    </Section>
  )
}

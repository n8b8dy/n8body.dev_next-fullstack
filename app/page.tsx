import { Section } from '@/components/layout/Section'
import { HeroSection } from '@/pages/Home/HeroSection'
import { cn } from '@/utils/styles'


export default function Home() {
  return (
    <main className={cn('flex flex-col items-center')}>
      <div className={cn(
        'relative w-full h-screen flex justify-center items-center',
        'after:absolute after:w-full after:h-1/3 after:left-0 after:bottom-0 after:bg-gradient-to-b after:from-transparent after:to-neutral-50 after:dark:to-neutral-950',
        'bg-pattern-circuit',
      )}>
        <HeroSection/>
      </div>

      <Section>

      </Section>
    </main>
  )
}

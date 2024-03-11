import { AdvantagesSection } from '@/components/AdvantagesSection'
import { HeroSection } from '@/components/HeroSection'
import { ServiceSection } from '@/components/ServiceSection'

export default function Home() {
  return (
    <main className='mt-[130px] p-2 flex flex-col gap-6 text-black md:w-5/6 xl:w-4/5 mx-auto'>
      <HeroSection />
      <ServiceSection />
      <AdvantagesSection />
    </main>
  )
}

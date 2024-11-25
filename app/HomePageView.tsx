import LandingPageLayout from '@/components/layout/LandingPageLayout'
import Features from './Featuers'
import HeroSection from './HeroSection'

const HomePageView = () => {
  return (
    <LandingPageLayout>
      <div className='flex flex-col gap-[36px] md:gap-[98px]'>
        <HeroSection />
        <Features />
      </div>
    </LandingPageLayout>
  )
}

export default HomePageView

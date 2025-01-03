import Link from 'next/link'
import Button from '../ui/Button'
import PixaLogo from './PixaLogo'

const LandingPageAppBar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-5 md:px-20 lg:px-32'>
      <Link href={'/'}>
        <PixaLogo />
      </Link>

      <Link
        href={'/white-paper'}
        // target='_blank'
        className='text-[12px] hover:opacity-50'
      >
        Whitepaper
      </Link>
      <div className='hidden md:flex items-center gap-[36px]'>
        <div className='flex items-center gap-3'>
          <Link
            // href={
            //   'https://www.figma.com/deck/4TW4s45dfnBZoJbNbHUWDW/Pixa-White-Paper?node-id=25-102&viewport=-59%2C75%2C0.31&t=H4pWESlzcfZ0aIv2-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1'
            // }
            href={'/white-paper'}
            // target='_blank'
            className='text-[12px] hover:opacity-50'
          >
            Whitepaper
          </Link>
          <Link
            href={'#features'}
            onClick={(e) => {
              e.preventDefault()
              const featuresSection = document.getElementById('features')
              featuresSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className='text-[12px] hover:opacity-50'
          >
            Features
          </Link>
          {/* <Link href={'#!'} className='text-[12px]'>
                FAQs
              </Link> */}
        </div>

        <Button
          onClick={() => {
            const waitlistInput = document.getElementById('waitlist-input')
            waitlistInput?.scrollIntoView({ behavior: 'smooth' })
            waitlistInput?.focus()
          }}
        >
          Join Waitlist
        </Button>
      </div>
    </div>
  )
}

export default LandingPageAppBar

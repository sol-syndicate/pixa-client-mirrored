import Link from 'next/link'
import NavIcon from '../icons/NavIcon'
import Button from '../ui/Button'
import PixaLogo from './PixaLogo'

const LandingPageAppBar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-5 md:px-20 lg:px-32'>
      <PixaLogo />

      <NavIcon className='hidden' />
      <div className='hidden md:flex items-center gap-[36px]'>
        <div className='flex items-center gap-3'>
          {/* <Link href={'#!'} className='text-[12px]'>
                White Paper
              </Link> */}
          <Link
            href={'#features'}
            onClick={(e) => {
              e.preventDefault()
              const featuresSection = document.getElementById('features')
              featuresSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            className='text-[12px]'
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

import Image from 'next/image'
import Link from 'next/link'
import NavIcon from '../icons/NavIcon'
import Button from '../ui/Button'

const LandingPageAppBar = () => {
  return (
    <div className='flex justify-between items-center py-6 px-5 md:px-20 lg:px-32'>
      <div className='relative w-[135px] h-[38.5px] md:w-[148px] md:h-[38.5px]'>
        <Image src={'/full-logo.png'} alt='Pixa Wallet' fill />
      </div>

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

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import NavIcon from '../icons/NavIcon'
import Button from '../ui/Button'

interface Props {
  children: ReactNode | ReactNode[]
}

export default function LandingPageLayout({ children }: Props) {
  const socials = [{ name: 'Twitter (X)', url: 'https://x.com/solana_intern' }]

  return (
    <div>
      <div className='flex flex-col gap-[36px] md:gap-[98px] bg-[url("/images/mobile-swatch.png")] md:bg-[url("/images/swatch.png")] min-h-screen bg-cover bg-center bg-no-repeat'>
        {/* App Bar */}
        <div className='flex justify-between items-center py-6 px-10 md:px-20'>
          <div className='relative w-[135px] h-[38.5px] md:w-[135px] md:h-[38.5px]'>
            <Image src={'/full-logo.png'} alt='Pixa Wallet' fill />
          </div>

          <NavIcon className='md:hidden' />
          <div className='hidden md:flex items-center gap-[36px]'>
            <div className='flex items-center gap-3'>
              <Link href={'#!'} className='text-[12px]'>
                White Paper
              </Link>
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
              <Link href={'#!'} className='text-[12px]'>
                FAQs
              </Link>
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
        {/* End of App Bar */}

        <div className='px-5 md:px-20'>{children}</div>
      </div>
      <footer className='flex justify-center md:justify-between items-center py-10 px-6 md:px-8'>
        {socials.map((social) => (
          <Link href={social.url} key={social.name} target='_blank'>
            {social.name}
          </Link>
        ))}
      </footer>
    </div>
  )
}

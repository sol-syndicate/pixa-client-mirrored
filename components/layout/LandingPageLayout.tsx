'use client'

import Link from 'next/link'
import { ReactNode } from 'react'
import LandingPageAppBar from './LandingPageAppBar'

interface Props {
  children: ReactNode | ReactNode[]
}

export default function LandingPageLayout({ children }: Props) {
  const socials = [{ name: 'Twitter (X)', url: 'https://x.com/solana_intern' }]

  return (
    <div>
      <div className='flex flex-col gap-[36px] md:gap-[98px] bg-[url("/images/mobile-swatch.png")] md:bg-[url("/images/swatch.png")] min-h-screen bg-cover bg-center bg-no-repeat'>
        {/* App Bar */}
        <LandingPageAppBar />
        {/* End of App Bar */}

        <div className='px-5 md:px-20 lg:px-32'>{children}</div>
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

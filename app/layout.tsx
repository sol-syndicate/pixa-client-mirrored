import { ENV } from '@/lib/constants/env.constant'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geologica, IBM_Plex_Mono, Press_Start_2P } from 'next/font/google'
import './globals.css'

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-press-start',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-mono',
})

const geologica = Geologica({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-geologica',
})

export const metadata: Metadata = {
  title: 'Pixa Pay',
  description:
    'A burner Solana wallet for your meme trading and uncertain interaction.',
  openGraph: {
    locale: 'locale',
    siteName: 'Pixa Pay',
    type: 'website',
    images: {
      url: 'https://pixa-pay.vercel.app/full-logo.png',
      alt: 'Pixa Logo',
      type: 'image/png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    creator: 'pixa',
    site: 'pixa',
    title: 'Pixa',
  },
  keywords: ['web3', 'dex', 'swap', 'meme', 'dex', 'wallet', 'burner'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning suppressContentEditableWarning>
      <GoogleTagManager gtmId={ENV.GOOGLE_ANALYTICS || ''} />
      <body
        className={`${pressStart.variable} ${geologica.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}

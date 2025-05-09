import { ENV } from '@/lib/constants/env.constant'
import { GoogleTagManager } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/next'
import { Metadata } from 'next'
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
  title: 'Pixa',
  description:
    'An all-in-one wallet for traders and degens. Empowering smarter moves with AI-driven insights.',
  openGraph: {
    locale: 'locale',
    siteName: 'Pixa',
    type: 'website',
    images: {
      url: 'https://www.pixawallet.live/meta_dark.png',
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
  keywords: ['web3', 'dex', 'swap', 'meme', 'dex', 'wallet', 'burner', 'defi'],
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

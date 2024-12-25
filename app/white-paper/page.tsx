'use client'
import LandingPageLayout from '@/components/layout/LandingPageLayout'
import { useEffect, useState } from 'react'

const WhitePaperPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.log('Loading timed out')
        setIsLoading(false)
        setHasError(true)
      }
    }, 10000) // 10 second timeout

    return () => clearTimeout(timeoutId)
  }, [isLoading])

  return (
    <LandingPageLayout>
      <div className='mt-5'>
        {isLoading && !hasError && (
          <div className='flex items-center justify-center flex-col gap-3'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white' />
            <p className='text-white font-pixelade text-3xl'>
              Loading White Paper...
            </p>
          </div>
        )}
        {hasError && (
          <div className='flex items-center justify-center flex-col gap-3'>
            <p className='text-white font-pixelade text-3xl'>
              Failed to load White Paper. Please try again.
            </p>
          </div>
        )}
        <iframe
          src='/Pixa White Paper.pdf'
          className={`w-full h-screen ${
            isLoading || hasError ? 'hidden' : 'block'
          }`}
          onLoad={(e) => {
            console.log('iframe loaded', e)
            setIsLoading(false)
          }}
          onError={(e) => {
            console.log('iframe error:', e)
            setIsLoading(false)
            setHasError(true)
          }}
        />
      </div>
    </LandingPageLayout>
  )
}

export default WhitePaperPage

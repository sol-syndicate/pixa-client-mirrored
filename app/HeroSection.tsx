'use client'

import UserProfileIcon from '@/components/icons/UserProfileIcon'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { Notify } from 'notiflix'
import { useRef, useState } from 'react'

const HeroSection = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const [step, setStep] = useState<'name' | 'email'>('name')

  const joinWaitlist = () => {
    const email = emailRef.current?.value || ''
    const name = nameRef.current?.value || ''

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      Notify.failure('Please enter a valid email address')
      return
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-[64px] py-[12px]'>
      <div className='flex flex-col md:gap-[12px] text-center'>
        <p className='text-[10px] md:text-[12px]'>
          The Only Wallet You Can Burn Without Feeling the Heat.
        </p>
        <p className='text-[36px] md:text-[64px] font-pixelade font-bold'>
          Trade Memes, Not Dreams
        </p>
      </div>

      <div className='flex flex-col gap-[36px]'>
        {step === 'name' && (
          <div className='flex items-center gap-[24px]'>
            <Input
              placeholder='Name'
              icon={<UserProfileIcon id='waitlist-input' />}
              id='waitlist-input'
              ref={nameRef}
            />
            <Button
              onClick={() => {
                const name = nameRef.current?.value || ''
                if (name.length >= 3) {
                  setStep('email')
                } else {
                  Notify.failure('Name must be at least 3 characters long')
                }
              }}
            >
              Next
            </Button>
          </div>
        )}

        {step === 'email' && (
          <div className='flex items-center gap-[24px]'>
            <Input
              placeholder='Email'
              icon={<UserProfileIcon />}
              type='email'
              id='waitlist-input'
              ref={emailRef}
            />
            <Button onClick={joinWaitlist}>Submit</Button>
          </div>
        )}

        <div className='flex items-center gap-[12px] w-full md:w-[513px]'>
          <div className='bg-white h-[11px] flex-1 rounded-[50px]'></div>
          <div
            className={`bg-white h-[11px] flex-1 rounded-[50px] ${
              step === 'email' ? 'opacity-100' : 'opacity-50'
            }`}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

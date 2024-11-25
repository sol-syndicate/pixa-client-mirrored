'use client'

import UserProfileIcon from '@/components/icons/UserProfileIcon'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { waitlistRequests } from '@/lib/api_requests/waitlist.request'
import { MailIcon } from 'lucide-react'
import { Loading, Notify } from 'notiflix'
import { useRef, useState } from 'react'

const HeroSection = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const [step, setStep] = useState<'name' | 'email'>('name')
  const [shake, setShake] = useState(false)
  const [name, setName] = useState('')

  const triggerShake = () => {
    setShake(true)
    setTimeout(() => setShake(false), 500) // Reset shake after animation
  }

  const joinWaitlist = async () => {
    const email = emailRef.current?.value || ''
    // const name = nameRef.current?.value || ''

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      Notify.failure('Please enter a valid email address')
      triggerShake()
      return
    }

    Loading.circle()

    console.log('name', name)
    console.log('email', email)
    const { success, message } = await waitlistRequests.joinWaitlist({
      name,
      email,
    })

    if (success) {
      Notify.success(message)
      setStep('name')
      setName('')
      if (nameRef.current) {
        nameRef.current.value = ''
      }
      if (emailRef.current) {
        emailRef.current.value = ''
      }
    } else {
      Notify.failure(message)
      triggerShake()
    }

    Loading.remove()
  }

  return (
    <div className='flex flex-col justify-center items-center gap-[64px] py-[12px]'>
      <div className='flex flex-col md:gap-[12px] text-center'>
        <p className='text-[10px] md:text-[12px]'>
          The Only Wallet You Can Burn Without Feeling the Heat.
        </p>
        <p className='text-[36px] md:text-[64px] font-pixelade font-bold'>
          Trade Tokens, Not Dreams
        </p>
      </div>

      <div className={`flex flex-col gap-[36px] ${shake ? 'shake' : ''}`}>
        {step === 'name' && (
          <div className='flex items-center gap-[24px]'>
            <Input
              placeholder='Name'
              name='name'
              icon={<UserProfileIcon id='waitlist-input' />}
              id='waitlist-input'
              ref={nameRef}
            />
            <Button
              onClick={() => {
                const name = nameRef.current?.value || ''
                setName(name)
                if (name.length >= 3) {
                  setStep('email')
                  triggerShake()
                } else {
                  triggerShake()
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
              icon={<MailIcon />}
              type='email'
              name='email'
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

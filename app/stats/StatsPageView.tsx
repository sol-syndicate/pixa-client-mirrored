'use client'

import { waitListRequests } from '@/lib/api_requests/waitlist.request'
import { useEffect, useState } from 'react'

const StatsPageView = () => {
  const [stats, setStats] = useState({
    waitListCount: 0,
  })
  const [loading, setLoading] = useState(false)

  const fetchStats = async () => {
    const { data } = await waitListRequests.getWaitListCount(setLoading)

    setStats({
      waitListCount: data.count || 0,
    })
  }

  useEffect(() => {
    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className='flex items-center justify-center flex-col gap-3 mt-[36px] md:mt-[98px]'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-white' />
        <p className='text-white font-pixelade text-3xl'>Loading Stats...</p>
      </div>
    )
  }

  return (
    <div className='mt-[36px] md:mt-[98px]'>
      <div className='flex flex-col justify-center items-center gap-[64px] py-[12px]'>
        <div className='flex flex-col md:gap-[12px] text-center'>
          <p className='text-[10px] md:text-[12px]'>
            The Only Wallet You Can Burn Without Feeling the Heat.
          </p>
          <p className='text-[24px] md:text-[36px] font-pressStart font-bold'>
            {stats.waitListCount}+ people are already on the waitlist 👾
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsPageView

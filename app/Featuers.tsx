import Image from 'next/image'

const Features = () => {
  return (
    <div className='flex flex-col gap-[24px]' id='features'>
      <p className='text-[24px] md:text-[36px] font-pixelade font-bold md:font-normal'>
        Experience risk-free trading without compromising your main portfolio.
      </p>

      {/* large display featuers */}
      <div className='hidden lg:flex gap-6 font-pressStart text-[#1E1E1E] text-[16px]'>
        <div className='flex flex-col flex-[0.4] gap-6'>
          {/* Quick Set up section */}
          <div className='flex flex-col items-center justify-center bg-[#007AFF] h-[200px] rounded-[12px] p-5'>
            <p className='text-[14px]'>Quick Setup</p>
            <Image
              src='/images/pixel-lightning.png'
              alt='quick-setup'
              width={120}
              height={134}
              className='select-none pointer-events-none'
            />
          </div>
          {/*  end quick set up section */}

          {/* meme coin tracker section */}
          <div className='flex items-center bg-[#161616] h-[200px] rounded-[12px] p-6 relative'>
            <p className='text-white'>Token Tracker</p>
            <Image
              src='/images/map.png'
              alt='map'
              height={215}
              width={150}
              className='absolute bottom-0 right-0 select-none pointer-events-none'
            />
          </div>
          {/* end of meme coin tracker section  */}
        </div>

        <div className='flex-1 rounded-[12px] bg-[#FABC04] p-6 relative'>
          <p>Disposable Wallet</p>
          <p className='font-pixelade text-[24px]'>
            Isolate risky trades securely
          </p>

          <Image
            src='/images/cat-dump.png'
            alt='cat-dump'
            fill
            className='absolute bottom-0 right-0 select-none pointer-events-none'
          />
        </div>

        <div className='flex flex-col flex-1 gap-6  rounded-[12px]'>
          <div className='flex flex-1 gap-6'>
            {/* safe & secure section */}
            <div className='flex items-end flex-1 bg-[#FFFFFF] rounded-[12px] p-6 relative'>
              <p className='text-[16px]'>Safe & Secure</p>
              <Image
                src='/images/shield.png'
                alt='quick-setup'
                width={220}
                height={150}
                className='absolute -top-2 right-1 select-none pointer-events-none'
              />
            </div>
            {/* end of safe & secure section */}

            {/* cross platform section */}
            <div className='flex items-center justify-center flex-1 bg-[#161616] rounded-[12px] p-6'>
              <p className='text-white leading-[32px] w-[128px]'>
                Cross Platform Access
              </p>
            </div>
            {/* end of cross platform section */}
          </div>

          {/* meme coin section */}
          <div className='flex items-end flex-1 bg-[#F40000] rounded-[12px] p-6 relative'>
            <p className='text-white'>Meme Coin Support</p>

            <Image
              src='/images/pepe-flipped.png'
              alt='pepe flipped'
              width={274}
              height={223}
              className='absolute top-0 right-0 select-none pointer-events-none'
            />
          </div>
          {/* End of meme coin section */}
        </div>
      </div>
      {/* end of large display features */}

      <div className='grid grid-cols-2 gap-7 lg:hidden font-pressStart text-[#1E1E1E] text-[11px] md:text-[12px]'>
        {/* dispose wallet */}
        <div className='h-[160px] w-full bg-[#FABC04] p-6 rounded-[12px] relative'>
          <p className='w-[112px]'>Disposable Wallet</p>
          <Image
            src='/images/cat-dump.png'
            alt='cat-dump'
            width={142}
            height={135}
            className='absolute bottom-0 right-0 select-none pointer-events-none'
          />
        </div>
        {/* end of dispose wallet */}

        {/* quick set up */}
        <div className='flex flex-col items-center h-[160px] w-full bg-[#007AFF] p-5 rounded-[12px]'>
          <p>Quick Setup</p>
          <Image
            src='/images/pixel-lightning.png'
            alt='quick-setup'
            width={110}
            height={124}
            className='select-none pointer-events-none'
          />
        </div>
        {/* end of quick set up */}

        {/* safe and secure */}
        <div className='flex items-end h-[160px] w-full bg-[#FFFFFF] p-6 rounded-[12px] relative overflow-hidden'>
          <p className='w-[71px]'>Safe & Secure</p>

          <Image
            src='/images/shield.png'
            alt='quick-setup'
            width={180}
            height={176}
            className='absolute top-5 -right-7 select-none pointer-events-none'
          />
        </div>
        {/* end of safe and secure */}

        {/* cross platform */}
        <div className='flex items-center justify-center h- [160px] w-full bg-[#161616] p-6 rounded-[12px]'>
          <p className='text-white w-[91px] leading-[28px]'>
            Cross Platform Access
          </p>
        </div>
        {/* end of cross platform */}

        {/* meme coin tracker */}
        <div className='flex items-center justify-center h-[160px] w-full bg-[#161616] p-6 rounded-[12px] relative'>
          <p className='text-white leading-[28px] w-[100px]'>Token Tracker</p>
          <Image
            src='/images/map.png'
            alt='map'
            height={128}
            width={131}
            className='absolute bottom-0 right-0 select-none pointer-events-none'
          />
        </div>
        {/* end of meme coin tracker */}

        {/* meme coin support */}
        <div className='flex items-end h-[160px] w-full bg-[#F40000] p-6 rounded-[12px] relative'>
          <p className='text-white leading-[28px]'>
            Meme Coin Support
            <Image
              src='/images/pepe-flipped.png'
              alt='pepe flipped'
              width={106}
              height={92}
              className='absolute top-0 transition -translate-x-1/2 right-1/2 left-1/2 select-none pointer-events-none'
            />
          </p>
        </div>
        {/* end of meme coin support */}
      </div>
    </div>
  )
}

export default Features

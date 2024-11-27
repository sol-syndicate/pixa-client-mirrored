import Image from 'next/image'

const PixaLogo = () => {
  return (
    <div className='flex items-center gap-[9px]'>
      <div className='relative w-[27px] h-[38.5px]'>
        <Image src={'/logo.svg'} alt='Pixa Wallet' fill />
      </div>
      <p className='text-[14px] font-pressStart'>Pixa</p>
    </div>
  )
}

export default PixaLogo

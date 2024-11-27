import { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.RefObject<HTMLInputElement>
  icon?: React.ReactNode
}

const Input = ({ ref, icon, ...props }: Props) => {
  return (
    <div
      className='flex items-center gap-[10px] w-full px-[24px] py-[6px] rounded-[12px] border-[4px] border-white bg-background'
      style={{ boxShadow: ' 0px 6px 0px #FFFFFF' }}
    >
      {icon}
      <input
        type='text'
        className='w-full bg-background text-[16px] font-pressStart focus:outline-none'
        ref={ref}
        {...props}
      />
    </div>
  )
}

export default Input

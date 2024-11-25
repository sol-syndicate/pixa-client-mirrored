import { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
}

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className='text-[16px] font-pixelade font-bold bg-primary border-[4px] rounded-[12px] px-[12px] py-[6px] border-white'
      style={{
        boxShadow: '0px 6px 0px #FFFFFF',
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button

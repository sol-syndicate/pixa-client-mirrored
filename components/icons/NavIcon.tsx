const NavIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='18'
      height='15'
      viewBox='0 0 18 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.5 13.25H17M1 7.25H17M1 1.25H17'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  )
}

export default NavIcon
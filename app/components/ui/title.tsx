interface SectionTitleProps {
  children: React.ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <div className='flex flex-col items-center w-full mb-8'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-5 text-neonGreen-400 text-center flex flex-col gap-2'>
        {children}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='220'
          height='12'
          viewBox='0 0 484 12'
          fill='none'
          className="stroke-neonGreen-400 text-center shadow-sm md:w-3/4"
        >
          <path
            d='M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666666 6 0.666667C3.05448 0.666667 0.666666 3.05448 0.666667 6ZM472.667 5.99996C472.667 8.94548 475.055 11.3333 478 11.3333C480.946 11.3333 483.333 8.94548 483.333 5.99996C483.333 3.05444 480.946 0.666625 478 0.666625C475.055 0.666626 472.667 3.05444 472.667 5.99996ZM6 7L478 6.99996L478 4.99996L6 5L6 7Z'
            fill='#12F7D6'
          />
        </svg>
      </h1>
      <div />
    </div>
  )
}

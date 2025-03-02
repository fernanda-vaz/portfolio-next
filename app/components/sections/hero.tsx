'use client'

import Image from 'next/image'
import Link from 'next/link'
import { RiDownload2Line } from 'react-icons/ri'

export default function Hero() {
  return (
    <section
      id='home'
      className='w-full flex mt-20 items-center justify-between bg-darkGreen-600 px-4 py-10 sm:px-8 xl:flex-row lg:px-40 lg:py-20'
    >
      <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-20'>
        <div className='w-80 h-[520px] border-4 border-fontColor-50 rounded-tl-[160px] rounded-br-[160px] mb-4 flex flex-col justify-center items-center gap-8 p-8 shadow-[-4px_-4px_1px_0px_rgba(87,242,170,1.00)]'>
          <Image
            src='/profile-rounded.png'
            alt=''
            width={96}
            height={96}
            className='rounded-full border-4 border-neonGreen-400'
          />

          <div className='flex flex-col text-fontColor-50 justify-center items-center'>
            <h2 className='font-semibold text-2xl'>Fernanda</h2>
            <p className='font-mono text-sm'>Desenvolvedora Front-end</p>
          </div>
          <div className='flex flex-col gap-2 font-mono'>
            <div className='flex gap-2'>
              <Image
                src='/icons/social/profile-container/mail.svg'
                alt=''
                width={14}
                height={14}
              />
              <p className='text-sm'>fernandavazdev@gmail.com</p>
            </div>
            <div className='flex gap-2 transition-opacity duration-300'>
              <Image
                src='/icons/social/profile-container/location.svg'
                alt=''
                width={14}
                height={14}
              />
              <p className='font-mono text-sm'>Brasília-DF</p>
            </div>
            <div className='flex gap-2'>
              <Image
                src='/icons/social/profile-container/work.svg'
                alt=''
                width={14}
                height={14}
              />
              <p className='font-ibm text-sm'>Full-time | Freelancer</p>
            </div>
            <div className='flex gap-2'>
              <Image
                src='/icons/social/profile-container/github.svg'
                alt=''
                width={14}
                height={14}
              />
              <Link
                href='https://github.com/fernanda-vaz'
                className='font-ibm text-sm text-fontColor-50 hover:text-neonGreen-400 transition-colors duration-300'
              >
                github
              </Link>
            </div>
            <Link
              href='#'
              className='w-48 p-4 bg-darkPurple-500 text-fontColor-50 font-bold rounded-tl-3xl rounded-br-3xl shadow-md flex justify-center items-center hover:bg-neonGreen-400 hover:text-fontColor-900 transition-colors duration-300'
            >
              <span className='flex items-center gap-2'>
                Download CV
                <RiDownload2Line size={24}/>
              </span>
            </Link>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center md:justify-start gap-2'>
          <div className='text-fontColor-50 p-8'>
            <pre className='text-darkPurple-400 font-ibm text-sm text-start'>
              <code>&lt;h1&gt;</code>
            </pre>
            <h1 className='text-4xl lg:text-7xl font-bold mt-4 mb-6'>
              Sou <span className='text-neonGreen-400'>Fernanda Vaz</span>,
              <br />
              Desenvolvedora <br />
              Front-end<span className='text-neonGreen-400'>.</span>
            </h1>
            <pre className='text-darkPurple-400 font-ibm text-sm text-end'>
              <code>&lt;/h1&gt;</code>
            </pre>
          </div>

          <div className='flex justify-center items-center gap-10 mb-20 transition-all duration-300'>
            <Link href='#'>
              <Image
                src='/icons/social/darkpurple-github.svg'
                alt=''
                width={48}
                height={48}
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/icons/social/neon-github.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src = '/icons/social/darkpurple-github.svg')
                }
              />
            </Link>
            <Link href='#'>
              <Image
                src='/icons/social/darkpurple-linkedin.svg'
                alt=''
                width={48}
                height={48}
                onMouseOver={(e) =>
                  (e.currentTarget.src = '/icons/social/neon-linkedin.svg')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src =
                    '/icons/social/darkpurple-linkedin.svg')
                }
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

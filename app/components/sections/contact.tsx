'use client'

import Image from 'next/image'
import SectionTitle from '../ui/title'
import { TextField } from '@mui/material'
import { RiSendPlaneFill } from 'react-icons/ri'
import Link from 'next/link'

export default function Contact() {
  return (
    <section
      id='contact'
      className='flex flex-col justify-center items-center px-4 py-10 sm:px-8 md:px-20 lg:px-40 min-h-screen'
      style={{
        background: 'url(/bg-contact.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Image
        src='/icons/scroll.svg'
        alt='ícone de mouse'
        width={32}
        height={140}
        className='mb-8'
      />

      <SectionTitle>Contato</SectionTitle>

      <div className='w-4/5 max-w-2xl'>
        <form className='flex flex-col gap-8 w-full justify-center items-center'>
          <TextField
            required
            label='Seu nome'
            type='text'
            name='fullname'
            variant='standard'
            fullWidth
            sx={{
              '& .MuiInputLabel-root': {
                color: '#57f2aa',
                '&.Mui-focused': {
                  color: '#57f2aa',
                },
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: '#57f2aa',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#57f2aa',
              },
              '& .MuiInputBase-input': {
                color: '#f2f2f2',
              },
            }}
          />
          <TextField
            required
            label='Seu e-mail'
            type='email'
            name='email'
            variant='standard'
            fullWidth
            sx={{
              '& .MuiInputLabel-root': {
                color: '#57f2aa',
                '&.Mui-focused': {
                  color: '#57f2aa',
                },
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: '#57f2aa',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#57f2aa',
              },
              '& .MuiInputBase-input': {
                color: '#f2f2f2',
              },
            }}
          />
          <TextField
            required
            label='Sua mensagem'
            type='text'
            name='message'
            variant='standard'
            maxRows={4}
            multiline
            fullWidth
            sx={{
              '& .MuiInputLabel-root': {
                color: '#57f2aa',
                '&.Mui-focused': {
                  color: '#57f2aa',
                },
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: '#57f2aa',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: '#57f2aa',
              },
              '& .MuiInputBase-input': {
                color: '#f2f2f2',
              },
            }}
          />

          <button
            type='submit'
            className='w-fit p-4 bg-darkPurple-500 text-fontColor-50 font-semibold py-3 px-6 rounded-4xl transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:bg-neonGreen-400 hover:text-fontColor-900 cursor-pointer'
          >
            Enviar
            <RiSendPlaneFill size={24} />
          </button>
        </form>
      </div>

      <footer className='flex flex-col-reverse md:flex-row justify-between items-center border-t-2 border-t-[#33333375] gap-4 p-4 w-full mt-4 shadow-sm text-sm text-[#f2f2f285]'>
        <p>© 2025 | Todos os direitos reservados</p>

        <div className='flex gap-4 md:gap-8 cursor-pointer transition-all duration-300'>
          <Image
            src='/icons/social/neon-github.svg'
            alt=''
            width={32}
            height={32}
            onMouseOver={(e) =>
              (e.currentTarget.src = '/icons/social/darkpurple-github.svg')
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = '/icons/social/neon-github.svg')
            }
          />
          <Image
            src='/icons/social/neon-linkedin.svg'
            alt=''
            width={32}
            height={32}
            onMouseOver={(e) =>
              (e.currentTarget.src = '/icons/social/darkpurple-linkedin.svg')
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = '/icons/social/neon-linkedin.svg')
            }
          />
          <Image
            src='/icons/social/neon-whatsapp.svg'
            alt=''
            width={32}
            height={32}
            onMouseOver={(e) =>
              (e.currentTarget.src = '/icons/social/darkpurple-whatsapp.svg')
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = '/icons/social/neon-whatsapp.svg')
            }
          />
        </div>
        <p>
          Desenvolvido por{' '}
          <Link
            href='#'
            className='text-neonGreen-400 hover:text-darkPurple-400'
          >
            Fernanda Vaz
          </Link>
          .
        </p>
      </footer>
    </section>
  )
}

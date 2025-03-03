'use client'

import Image from 'next/image'
import SectionTitle from '../ui/title'
import { TextField } from '@mui/material'
import { RiSendPlaneFill } from 'react-icons/ri'
import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Bounce, toast, ToastContainer } from 'react-toastify'

const validationSchema = Yup.object({
  fullname: Yup.string().required('Nome é obrigatório.'),
  email: Yup.string()
    .email('Por favor, informe um e-mail válido.')
    .required('E-mail é obrigatório.'),
  message: Yup.string().required('Mensagem é obrigatória.'),
})

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      message: '',
    },

    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://submit-form.com/kLkLgWqF9',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify(values),
          }
        )

        if (response.ok) {
          toast.success('Mensagem enviada com sucesso!', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          })
          formik.resetForm()
        } else {
          toast.error('Erro ao enviar a mensagem. Tente novamente.', {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            transition: Bounce,
          })
        }
      } catch (error) {
        console.error('Erro:', error)
        toast.error('Erro ao enviar a mensagem. Tente novamente.', {
          position: 'bottom-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        })
      }
    },
  })

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
        <form
          className='flex flex-col gap-8 w-full justify-center items-center font-sans'
          onSubmit={formik.handleSubmit}
        >
          <TextField
            required
            label='Seu nome'
            type='text'
            name='fullname'
            variant='standard'
            fullWidth
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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

          <div>
            {formik.touched.fullname && formik.errors.fullname ? (
              <div>{formik.errors.fullname}</div>
            ) : null}
          </div>

          <TextField
            required
            label='Seu e-mail'
            type='email'
            name='email'
            variant='standard'
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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

          <div>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <TextField
            required
            label='Sua mensagem'
            type='text'
            name='message'
            variant='standard'
            maxRows={4}
            multiline
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
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

          <div>
            {formik.touched.message && formik.errors.message ? (
              <div>{formik.errors.message}</div>
            ) : null}
          </div>

          <button
            type='submit'
            className='w-fit p-4 bg-darkPurple-500 text-fontColor-50 font-semibold py-3 px-6 rounded-4xl transition-all duration-300 flex items-center justify-center gap-2 mt-4 hover:bg-neonGreen-400 hover:text-fontColor-900 cursor-pointer'
          >
            Enviar
            <RiSendPlaneFill size={24} />
          </button>
        </form>
      </div>

      <footer className='flex flex-col-reverse font-mono md:flex-row justify-between items-center border-t-2 border-t-[#33333375] gap-4 p-4 w-full mt-4 shadow-sm text-sm text-[#f2f2f285]'>
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

      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
        transition={Bounce}
      />
    </section>
  )
}

'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export default function About() {
  return (
    <motion.section
      id='about'
      className='w-full flex flex-col justify-center items-center px-4 py-10 sm:px-8 md:px-20 xl:px-40 xl:py-20 gap-10'
      style={{
        background: 'url(/bg-about.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <Image
        src='/icons/scroll.svg'
        alt='ícone de mouse'
        width={32}
        height={140}
      />

      <motion.div
        className='w-56 bg-darkPurple-500 text-fontColor-50 font-bold rounded-tl-3xl rounded-br-3xl shadow-sm flex justify-center items-center p-4 border-2 border-neonGreen-400'
        transition={{ duration: 0.5 }}
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
      >
        <h1 className='text-2xl font-sans'>Sobre mim</h1>
      </motion.div>
      <motion.div
        className='flex flex-col justify-center items-center md:flex-row-reverse gap-10'
        transition={{ duration: 0.5 }}
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
      >
        <div className='w-4/5 bg-darkPurple-900 rounded-3xl flex flex-col justify-center gap-4 p-4'>
          <div className='text-darkPurple-400 font-mono text-sm'>
            <code>&lt;p&gt;</code>
          </div>
          <p className='font-mono text-sm text-fontColor-50'>
            Sou desenvolvedora web front-end com experiência em JavaScript, HTML
            e CSS, tecnologias que me permitem criar interfaces modernas e
            eficazes. Motivada pela curiosidade e pelo entusiasmo pela
            tecnologia, iniciei meus estudos em plataformas on-line como a Alura
            e, atualmente, estou cursando uma pós-graduação em Full Stack
            Development na FIAP. Esse percurso acadêmico tem sido fundamental
            para construir uma base técnica forte e explorar práticas de
            desenvolvimento com profundidade.
            <br /> <br />
            Além do front-end, tenho desenvolvido interesse pelo back-end,
            especialmente com a criação de APIs REST utilizando Node.js e
            Express. Esse contato me permite ter uma visão mais completa do
            desenvolvimento, desde a interface do usuário até a estrutura do
            servidor. Nos meus projetos pessoais e freelancers busco sempre
            aliar criatividade e funcionalidade para oferecer ao usuário uma
            experiência única.
            <br /> <br />
            Estou sempre em busca de novos desafios no mercado de tecnologia,
            onde possa crescer e contribuir ativamente. Se você precisa de
            alguém dedicado e com uma visão completa de desenvolvimento web,
            adoraria conversar sobre o seu projeto!
          </p>
          <div className='text-darkPurple-400 font-mono text-sm text-end'>
            <code>&lt;/p&gt;</code>
          </div>
        </div>
        <motion.div
          className='w-80 h-[520px] border-4 border-fontColor-50 rounded-tl-[48px] rounded-br-[48px] mb-4 flex flex-col justify-center items-center gap-8 p-8 shadow-[-4px_-4px_1px_0px_rgba(87,242,170,1.00)]'
          style={{
            background: 'url(/profile-2.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
          transition={{ duration: 0.5 }}
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
        />
      </motion.div>
    </motion.section>
  )
}

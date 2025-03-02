'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavLinks from '../ui/nav-links'
import { RiMenu3Line } from 'react-icons/ri'
import { Drawer } from '@mui/material'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className='w-full h-32 px-4 flex items-center justify-between shadow-sm'>
      <div className='hidden w-full md:flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Logo Fernanda Vaz'
            width={64}
            height={64}
          />
        </Link>

        <NavLinks />

        <Link href='#'>
          <Image
            src='/icons/neon-message.svg'
            alt='Ícone direto para o whatsapp'
            width={48}
            height={48}
          />
        </Link>
      </div>

      <div className='md:hidden w-full flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Logo Fernanda Vaz'
            width={64}
            height={64}
          />
        </Link>

        <RiMenu3Line color='#52498c' size={44} onClick={handleMenuOpen}/>
      </div>

      <Drawer anchor='right' open={menuOpen} onClose={handleMenuOpen}>
        <div className='flex flex-col items-center h-full p-4 bg-darkPurple-500 text-fontColor-50 font-semibold gap-4 justify-center'>
          <NavLinks onLinkClick={handleMenuOpen} />
          <Link href='#'>
          <Image
            src='/icons/neon-message.svg'
            alt='Ícone direto para o whatsapp'
            width={36}
            height={36}
          />
        </Link>
        </div>
        
      </Drawer>
    </nav>
  )
}

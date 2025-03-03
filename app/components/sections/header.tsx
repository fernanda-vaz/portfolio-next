'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavLinks from '../ui/nav-links'
import { RiMenu3Line } from 'react-icons/ri'
import { Drawer } from '@mui/material'
import { useEffect, useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 mb-8 transition-all duration-300 text-fontColor-50 bg-darkPurple-900 ${
        isScrolled ? 'bg-darkPurple-900/75' : 'bg-darkPurple-900'
      }`}
    >
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

          <RiMenu3Line color='#52498c' size={44} onClick={handleMenuOpen} />
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
    </header>
  )
}

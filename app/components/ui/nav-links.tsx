import Link from 'next/link'

interface NavLinksProps {
  onLinkClick?: () => void
}

const links = [
  {
    id: 'about',
    name: 'SOBRE',
    href: '/#about',
  },
  {
    id: 'projects',
    name: 'PROJETOS',
    href: '/#projects',
  },
  {
    id: 'contact',
    name: 'CONTATO',
    href: '/#contact',
  },
]

export default function NavLinks({ onLinkClick }: NavLinksProps) {
  return (
    <div className='flex flex-col font-semibold font-sans gap-4 md:flex-row'>
      {links.map((link) => (
        <Link key={link.id} href={link.href} onClick={onLinkClick} className='hover:text-neonGreen-400 transition-colors duration-300'>
          {link.name}
        </Link>
      ))}
    </div>
  )
}

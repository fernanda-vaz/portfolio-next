'use client'

import Image from 'next/image'
import SectionTitle from '../ui/title'

const skills = [
  {
    label: 'HTML',
    icon: '/icons/skills/skills-purple/html.svg',
    hover: '/icons/skills/skills-hover/html.svg',
  },
  {
    label: 'CSS',
    icon: '/icons/skills/skills-purple/css.svg',
    hover: '/icons/skills/skills-hover/css.svg',
  },
  {
    label: 'JavaScript',
    icon: '/icons/skills/skills-purple/js.svg',
    hover: '/icons/skills/skills-hover/js.svg',
  },
  {
    label: 'TypeScript',
    icon: '/icons/skills/skills-purple/ts.svg',
    hover: '/icons/skills/skills-hover/ts.svg',
  },
  {
    label: 'ReactJS',
    icon: '/icons/skills/skills-purple/react.svg',
    hover: '/icons/skills/skills-hover/react.svg',
  },
  {
    label: 'Sass',
    icon: '/icons/skills/skills-purple/sass.svg',
    hover: '/icons/skills/skills-hover/sass.svg',
  },
  {
    label: 'TailwindCSS',
    icon: '/icons/skills/skills-purple/tailwind.svg',
    hover: '/icons/skills/skills-hover/tailwind.svg',
  },
  {
    label: 'Styled Components',
    icon: '/icons/skills/skills-purple/styled-components.svg',
    hover: '/icons/skills/skills-hover/styled-components.svg',
  },
  {
    label: 'Next.js',
    icon: '/icons/skills/skills-purple/nextjs.svg',
    hover: '/icons/skills/skills-hover/nextjs.svg',
  },
  {
    label: 'NodeJS',
    icon: '/icons/skills/skills-purple/nodejs.svg',
    hover: '/icons/skills/skills-hover/nodejs.svg',
  },
  {
    label: 'Figma',
    icon: '/icons/skills/skills-purple/figma.svg',
    hover: '/icons/skills/skills-hover/figma.svg',
  },
  {
    label: 'Git',
    icon: '/icons/skills/skills-purple/git.svg',
    hover: '/icons/skills/skills-hover/git.svg',
  },
  {
    label: 'GitHub',
    icon: '/icons/skills/skills-purple/github.svg',
    hover: '/icons/skills/skills-hover/github.svg',
  },
]

export default function Skills() {
  return (
    <section
      id='skills'
      className='flex flex-col justify-center items-center px-4 py-10 sm:px-8 md:px-20 lg:px-40'
      style={{
        background: 'url(/bg-skills.png)',
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
      />

      <SectionTitle>Tecnologias</SectionTitle>

      <div className='flex flex-wrap w-full md:w-4/5 gap-10 justify-center items-center p-10'>
        {skills.map((skill) => (
          <div key={skill.label} className='relative group cursor-pointer'>
            <div className='transition-opacity duration-300'>
              <Image
                src={skill.icon}
                alt={skill.label}
                width={72}
                height={72}
                className='md:w-24 md:h-24 lg:w-32 lg:h-32'
                onMouseOver={(e) => (e.currentTarget.src = skill.hover)}
                onMouseOut={(e) => (e.currentTarget.src = skill.icon)}
              />
            </div>

            <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-neonGreen-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center'>
              {skill.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

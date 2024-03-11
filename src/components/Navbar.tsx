'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ActivePages = '/' | '/about' | '/services' | '/contact'

export default function Navbar() {
  const [isMenuPressed, setIsMenuPressed] = useState(false)
  const [activeLink, setActiveLink] = useState<ActivePages>('/')

  const handleClick = (event: React.MouseEvent) => {
    const anchor = event.target
    const isAnchor = anchor instanceof HTMLAnchorElement
    if (!isAnchor) return
    const href = anchor.getAttribute('href')
    if (href === activeLink) {
      event.preventDefault()
      return
    }
    setActiveLink(href as ActivePages)
  }

  return (
    <header className='fixed z-20 bg-white top-0 left-0 w-full flex justify-between h-[130px]'>
      <nav className='flex items-center'>
        <Image
          priority={true}
          src='/logo.webp'
          alt='Logo de la empresa soluciones empresariales'
          width={120}
          height={120}
        />
        <h1 className='font-extrabold text-md md:text-lg lg:text-xl'>Soluciones Empresariales</h1>
      </nav>
      <nav className='flex items-center px-6 lg:hidden'>
        <button
          className='flex flex-col gap-[0.65rem] w-10'
          onClick={() => setIsMenuPressed(!isMenuPressed)}
        >
          <div
            className={`h-1 bg-[#333] duration-500 origin-left w-full rounded-md ${
              isMenuPressed ? 'rotate-45' : ''
            }`}
          ></div>
          <div
            className={`h-1 bg-[#333] duration-500 origin-left w-full rounded-md ${
              isMenuPressed ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`h-1 bg-[#333] duration-500 origin-left w-full rounded-md ${
              isMenuPressed ? '-rotate-45' : ''
            }`}
          ></div>
        </button>
      </nav>
      <nav
        className={`absolute top-0 left-0 mt-[129px] w-full flex flex-col pb-4 shadow-sm shadow-black lg:shadow-none items-center duration-500 lg:static lg:flex lg:gap-8 lg:w-auto lg:flex-row lg:m-0 lg:px-7 bg-white z-10 ${
          isMenuPressed ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
        }`}
      >
        <ul className='flex flex-col w-full items-center lg:flex-row lg:items-center lg:text-lg lg:gap-4'>
          <li className='md:text-xl'>
            <Link href='/' onClick={handleClick} className={`font-bold ${activeLink === '/' ? 'active' : 'underline-effect'}`}>Inicio</Link>
          </li>
          <li className='md:text-xl'>
            <Link href='/about' onClick={handleClick} className={`font-bold ${activeLink === '/about' ? 'active' : 'underline-effect'}`}>Acerca de</Link>
          </li>
          <li className='md:text-xl'>
            <Link href='/services' onClick={handleClick} className={`font-bold ${activeLink === '/services' ? 'active' : 'underline-effect'}`}>Servicios</Link>
          </li>
        </ul>
        <Link
          href='/contact'
          className='mt-4 lg:mt-0 px-4 py-2 bg-sky-600 text-white rounded-md lg:text-lg lg:px-6 duration-300 hover:bg-sky-800 md:text-xl'
          onClick={handleClick}
        >
          Contacto
        </Link>
      </nav>
    </header>
  )
}

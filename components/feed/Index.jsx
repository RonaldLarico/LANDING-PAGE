import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

import { BsFillEnvelopeAtFill } from "react-icons/bs";

import FooterIcons from './FooterIcons'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center bg-[#fffdfd28] sm:px-12 px-4  py-5'>
      <ul className='flex items-center justify-center py-4'>
              <BsFillEnvelopeAtFill className='lg:text-5xl text-3xl text-cyan-600'/>
                <li className='font-bold lg:text-2xl tracking-wide pl-4'>  metalurgica.jesac@gmail.com</li>
              </ul>
          <FooterIcons />
        <div className='flex items-center justify-center'>
        <Link href="#home">
                <Image
                  src="/logo-jesac.png"
                  width={200}
                  height={200}
                  alt="metalurgica-logo"
                  className='lg:w-48 w-36 py-2'
                />
                {/* <h2 className="text-2xl text-cyan-600 font-bold ">JESAC</h2> */}
              </Link>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 text-center pt-2 text-gray-400 text-md pb-5'>
        <span>© 2023 JESAC | Todos los derechos reservados</span>
        <span>Politica de privacidad</span>
      </div>
    </footer>
  )
}

export default Footer
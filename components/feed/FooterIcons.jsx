import React from 'react'

import Link from 'next/link';

import { BsFacebook, BsYoutube, BsTiktok, BsWhatsapp } from "react-icons/bs";

const FooterIcons = () => {
  return (
    <div className='flex justify-between pb-4'>
      <Link
                    href='https://wa.me/+51957033871?text=Hola,%20deseo%20realizar%20una%20consulta%20'
                    target='_blank'
                    rel='noreferrer'
                  >
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 lg:text-4xl text-2xl text-green-700 inline-flex items-center lg:mx-5
        hover:text-green-500'>
          <BsWhatsapp/>
        </div>
      </Link>

      <Link
                    href='https://www.facebook.com/metalurgica.jesac'
                    target='_blank'
                    rel='noreferrer'
                  >
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 lg:text-4xl text-2xl text-blue-700 inline-flex items-center lg:mx-5
        hover:text-blue-500'>
          <BsFacebook/>
        </div>
      </Link>

      <Link
                    href='https://www.tiktok.com/@juvefrank'
                    target='_blank'
                    rel='noreferrer'
                  >
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 lg:text-4xl text-2xl text-gray-950 inline-flex items-center lg:mx-5
        hover:text-gray-900'>
          <BsTiktok/>
        </div>
        </Link>
        <Link
                    href='https://www.youtube.com/@metalurgicajesacjuliaca5680/featured'
                    target='_blank'
                    rel='noreferrer'
                  >
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 lg:text-4xl text-2xl text-red-700 inline-flex items-center lg:mx-5
        hover:text-red-500'>
          <BsYoutube/>
        </div>
        </Link>
    </div>
  )
}

export default FooterIcons
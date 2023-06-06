import React from 'react'

import { BsFacebook, BsInstagram, BsTiktok, BsWhatsapp } from "react-icons/bs";

const FooterIcons = () => {
  return (
    <div className='flex justify-between pb-4'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl text-green-700 inline-flex items-center mx-1.5
        hover:text-green-500'>
          <BsWhatsapp/>
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl text-blue-700 inline-flex items-center mx-1.5
        hover:text-blue-500'>
          <BsFacebook/>
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl text-gray-950 inline-flex items-center mx-1.5
        hover:text-gray-900'>
          <BsTiktok/>
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl text-amber-700 inline-flex items-center mx-1.5
        hover:text-amber-500'>
          <BsInstagram/>
        </div>
    </div>
  )
}

export default FooterIcons
import React from 'react'

import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const FooterIcons = () => {
  return (
    <div className='flex justify-between'>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl text-blue-700 inline-flex items-center mx-1.5
        hover:text-blue-600'>
          <BsFacebook/>
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl text-red-700 inline-flex items-center mx-1.5
        hover:text-red-600'>
          <BsYoutube/>
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl text-gray-950 inline-flex items-center mx-1.5
        hover:text-gray-950'>
          <BsTiktok/>
        </div>
        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in duration-300 text-4xl text-amber-700 inline-flex items-center mx-1.5
        hover:text-amber-600'>
          <BsInstagram/>
        </div>
    </div>
  )
}

export default FooterIcons
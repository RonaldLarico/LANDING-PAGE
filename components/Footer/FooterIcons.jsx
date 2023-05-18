import React from 'react'

import { BsFacebook, BsInstagram, BsTiktok, BsYoutube } from "react-icons/bs";

const FooterIcons = () => {
  return (
    <div className='flex justify-between'>
        <div className='text-blue-700 p-2 cursor-pointer inline-flex items-center rounded-full mx-1.5 text-4xl
        hover:text-blue-400 duration-300'>
          <BsFacebook/>
        </div>
        <div className='text-red-700 p-2 cursor-pointer inline-flex items-center rounded-full mx-1.5 text-4xl
        hover:text-red-400 duration-300'>
          <BsYoutube/>
        </div>
        <div className='text-black p-2 cursor-pointer inline-flex items-center rounded-full mx-1.5 text-4xl
        hover:text-gray-500 duration-300'>
          <BsTiktok/>
        </div>
        <div className='text-amber-700 p-2 cursor-pointer inline-flex items-center rounded-full mx-1.5 text-4xl
        hover:text-amber-500 duration-300'>
          <BsInstagram/>
        </div>
    </div>
  )
}

export default FooterIcons
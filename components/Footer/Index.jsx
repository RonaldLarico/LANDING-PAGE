import React from 'react'
import { BsFillEnvelopeAtFill } from "react-icons/bs";

import FooterIcons from './FooterIcons'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-between md:items-center bg-[#ffffff19] sm:px-12 px-4  py-5'>
        <h1 className='text-cyan-500 text-2xl lg:leading-normal font-semibold md:w-auto w-full'>
          <BsFillEnvelopeAtFill />Jesac@gmail.com
        </h1>
          <FooterIcons />
        <div>
          <input type='text' placeholder='Enter Your ph.no' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'
          />
          <button className='bg-teal-400 hover:bg-teal-700 duration-300 px-5 py-2.5 font-[Popins] rounded-md text-white md:w-auto w-full'>
            Request Code
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
        <span>© 2023 Appy. All rights reserved</span>
        <span>Terms - Privacy Policy</span>
      </div>
    </footer>
  )
}

export default Footer
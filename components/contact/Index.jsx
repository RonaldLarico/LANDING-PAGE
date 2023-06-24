import React from 'react'

import { BsTelephoneInboundFill, BsFillEnvelopeAtFill,BsFacebook } from 'react-icons/bs';
import { FaMapMarkerAlt, FaTiktok } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/io';

import Link from 'next/link';

import { motion } from 'framer-motion';
import Maps from '../maps/Index'

import { fadeIn, staggerContainer} from '../../utils/motion';
import { TypingText } from '../cards/CustomTexts';

const Contact = () => {
  return (
      <section id='contact' className='w-full mt-[130px] lg:mt-auto'>
        <motion.div className='max-w-[1280px] m-auto px-2 py-2 w-full'
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
        <TypingText title="| CONTACTO" textStyles="text-center pb-8" />

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <motion.div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-3xl p-4'
            variants={fadeIn('right', 'tween', 0.2, 1)}>
            <div className='lg:p-4 h-full '>
              <div>
                <Maps
                className='grid grid-cols-1 p-10'
                with={2000}
                height={2000}
                 />
              </div>
              <ul className='flex items-center justify-normal py-4 text-gray-300'>
              <FaMapMarkerAlt className='text-3xl'/>
                <li className='mt-[4px] font-bold text-lg pl-4'>Av Sacsayhuaman N° 1680</li>
              </ul>
              <ul className='flex items-center justify-normal py-4 text-gray-300'>
              <BsFillEnvelopeAtFill className='text-3xl'/>
                <li className='mt-[4px] font-bold text-lg pl-4'>metalurgica.jesac@gmail.com</li>
              </ul>
              <ul className='flex items-center justify-normal py-4 text-gray-300'>
              <BsTelephoneInboundFill className='text-3xl'/>
                <li className='mt-[4px] font-bold text-lg pl-4'>+51 957 033 871</li>
              </ul>
              <ul className='flex items-center justify-normal py-4 text-gray-300'>
              <FaMapMarkerAlt className='text-3xl'/>
                <li className='mt-[4px] font-bold text-lg pl-4'>Juliaca - Perú</li>
              </ul>
              <div>
                <p className='font-bold text-xl uppercase pt-6 text-gray-300'>Contactanos</p>
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://wa.me/+51957033871?text=Hola,%20deseo%20realizar%20una%20consulta%20'
                    target='_blank'
                    rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 hover:text-green-600 ease-in duration-300 text-4xl text-gray-300'>
                      <IoLogoWhatsapp />
                    </div>
                  </Link>
                  <Link
                    href='https://www.facebook.com/metalurgica.jesac'
                    target='_blank'
                    rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 hover:text-blue-600 ease-in duration-300 text-4xl text-gray-300'>
                      <BsFacebook />
                    </div>
                  </Link>
                  <Link
                    href='https://www.tiktok.com/@juvefrank'
                    target='_blank'
                    rel='noreferrer'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 hover:text-gray-800 ease-in duration-300 text-4xl text-gray-300'>
                      <FaTiktok />
                    </div>
                  </Link>
                  <Link
                  href='https://www.gmail.com'
                  target='_blank'
                  rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-125 hover:text-cyan-700 ease-in duration-300 text-4xl text-gray-300'>
                  <BsFillEnvelopeAtFill />
                  </div>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* right */}
          <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-3xl lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='font-bold uppercase text-sm py-2 text-gray-300'>Nombres</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='font-bold uppercase text-sm py-2 text-gray-300'>
                      N° celular
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='font-bold uppercase text-sm text-gray-300 py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='font-bold uppercase text-sm text-gray-300 py-2'>Título</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='font-bold uppercase text-sm text-gray-300 py-2'>Mensaje</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='font-bold uppercase rounded-lg bg-cyan-600 hover:bg-cyan-500 w-auto p-4 text-gray-300 mt-4 text-l'>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        <div className='flex justify-center lg:pt-12 pt-12'>
          <Link href='/'>
              <div className='animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-gray-300'
                  size={30}
                />
              </div>
          </Link>
        </div>
      </motion.div>
      </section>
  )
}

export default Contact
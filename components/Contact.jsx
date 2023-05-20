import React from 'react'

import { AiOutlineMail } from 'react-icons/ai';
import { BsTelephoneInboundFill, BsFillEnvelopeAtFill,BsFacebook } from 'react-icons/bs';
import { FaMapMarkerAlt, FaTiktok } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { IoLogoWhatsapp } from 'react-icons/Io';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import contact from '../public/contact.jpg'

import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Contact = () => {
  return (
      <section id='contact' className='w-full lg:h-screen'>
        <motion.div className='max-w-[1280px] m-auto px-2 py-16 w-full '
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}>
        <h4 className='mt-[4px] font-bold sm:text-[52px] text-[56px] sm:leading-[80.32px] leading-[26.32px] uppercase text-cyan-600'>
          Contacto
        </h4>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <motion.div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-3xl p-4'
            variants={fadeIn('right', 'tween', 0.2, 1)}>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={contact}
                  alt='/'
                />
              </div>
              <ul className='flex items-center justify-normal py-4'>
              <FaMapMarkerAlt className='text-3xl'/>
                <li className='mt-[4px] font-bold text-lg'> | Av Sacsayhuaman N° 1680</li>
              </ul>
              <ul className='flex items-center justify-normal py-4'>
              <BsFillEnvelopeAtFill className='text-3xl'/>
                <li className='mt-[4px] font-bold text-lg'> | Jesac@gmail.com</li>
              </ul>
              <ul className='flex items-center justify-normal py-4'>
              <BsTelephoneInboundFill className='text-3xl'/>
                <li className='mt-[4px] font-bold text-lg'> | +51 991 303 509</li>
              </ul>
              <ul className='flex items-center justify-normal py-4'>
              <FaMapMarkerAlt className='text-3xl'/>
                <li className='mt-[4px] font-bold text-lg'> | Juliaca - Perú</li>
              </ul>
              <div>
                <p className='font-bold text-xl uppercase pt-6'>Contactanos</p>
                <div className='flex items-center justify-between py-4'>
                  <Link
                    href='https://wa.me/+51991303509?text=Hola,%20deseo%20realizar%20una%20consulta%20'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 text-3xl'>
                      <IoLogoWhatsapp />
                    </div>
                  </Link>
                  <Link
                    href='https://www.facebook.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 text-3xl'>
                      <BsFacebook />
                    </div>
                  </Link>
                  <Link
                    href='https://www.tiktok.com'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 text-3xl'>
                      <FaTiktok />
                    </div>
                  </Link>
                  <Link
                  href='https://www.gmail.com'
                  target='_blank'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-300 text-3xl'>
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
                    <label className='font-bold uppercase text-sm py-2'>Nombres</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='font-bold uppercase text-sm py-2'>
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
                  <label className='font-bold uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='font-bold uppercase text-sm py-2'>Título</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='font-bold uppercase text-sm py-2'>Mensaje</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='font-bold uppercase rounded-lg bg-cyan-600 hover:bg-cyan-500 w-auto p-4 text-white mt-4 text-l'>
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='animate-bounce rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
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
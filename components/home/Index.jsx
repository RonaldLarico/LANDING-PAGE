import React from 'react'

import { motion } from 'framer-motion';

import styles from '../../styles';
import { fadeIn, staggerContainer, zoomIn } from '../../utils/motion';

const HomePage = () => {
  return (
      <section id="home" className={`${styles.paddings}`}>
        <br></br>
        <br></br>
        <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px]  border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div className='relative'>
          <p className="font-bold sm:text-[25px] text-center text-[18px] sm:leading-[22.68px] leading-[26.68px] text-green-700">
            METALÚRGICA
          </p>
          <h4 className="mt-[4px] font-bold sm:text-[92px] text-center text-[56px] sm:leading-[80.32px] leading-[26.32px] text-cyan-600">
            JESAC
          </h4>
          <p className="mt-[14px] font-bold sm:text-[20px] text-center text-[12px] sm:leading-[22.68px] leading-[16.68px] text-gray-400">
            OPERACIONES MECÁNICAS Y METALÚRGICAS
          </p>

        <p className="mt-[25px] font-bold sm:text-[24px] text-center text-[18px] sm:leading-[30.6px] leading-[20.6px] text-gray-400">
          Proveedor de soluciones integrales en los servicios de diseño,
          mantenimiento y montaje de equipos de minería y construcción.
        </p>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src="/metalurgica-jesac.jpg"
          alt="metalurgica-jesac"
          className="w-full lg:h-[900px] h-auto min-h-[410px] object-cover rounded-[40px]"
        />

        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <img
            src="/stamp.png"
            alt="stamp"
            className="w-[155px] h-[155px] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default HomePage
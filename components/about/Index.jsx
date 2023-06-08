import React from 'react'
import Typed from 'react-typed';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { newFeatures } from '../constants';
import { TitleText, TypingText } from '../cards/CustomTexts';
import  NewFeatures  from '../cards/NewFeatures'
import { planetVariants, staggerContainer, fadeIn } from '../../utils/motion';

const About = () => {
  return (
  <section id='about' className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 lg:pb-auto`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| SOBRE NOSOTROS" />
        <TitleText title={<>Somos una empresa</>} />
        <Typed
        className='mt-[8px] font-bold md:text-[60px] text-[30px] text-[#bcdd43]'
        strings={['COMPROMETIDA', 'RESPONSABLE', 'INNOVADORA']}
        typeSpeed={140}
        backSpeed={40}
        loop
        />
        <TitleText title={<>con nuestro trabajo</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/metalurgica-jesac.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] rounded-full "
        />
      </motion.div>
    </motion.div>
  </section>
  )
}

export default About
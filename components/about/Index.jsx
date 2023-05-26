import React from 'react'

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
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| SOBRE NOSOTROS" />
        <TitleText title={<>Somos una empresa COMPROMETIDA con los resultados</>} />
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
          src="/planet-09.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
  )
}

export default About
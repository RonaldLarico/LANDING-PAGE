import React from 'react'

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { miningCard } from '../constants';
import { staggerContainer } from '../../utils/motion';
import { TitleText, TypingText } from '../cards/CustomTexts';
import MiningCard from '../cards/MiningCard';

const Services = () => {
  const [active, setActive] = useState('mining-1');

  return (
    <section className={`${styles.paddings}`} id="services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-[200px]`}
      >
        <TitleText
          title={<>Nuestros SERVICIOS para la industria <br className="md:block hidden" /></>}
          textStyles="text-center"
          />
          <p className="flex-1 mt-[16px] font-bold text-[16px] lg:text-[25px] text-gray-300 text-center p-6">
          Nuestra VOCACIÓN de servicio al cliente, de CALIDAD y mejora continua de nuestros procesos, nos permiten SATISFACER la exigente demanda del mercado nacional e internacional, contando con servicios para atender los sectores de Construcción, Industria y MINERÍA.
          </p>
          <br></br>
        <TypingText title="| SERVICIOS EN MINERÍA" textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {miningCard.map((mining, index) => (
            <MiningCard
              key={mining.id}
              {...mining}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
import React from 'react'

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles';
import { metalCard } from '../constants';
import { staggerContainer } from '../../utils/motion';
import MetalCard from '../cards/MetalCard';
import { TypingText } from '../cards/CustomTexts';

const Service = () => {
  const [active, setActive] = useState('metal-1');

  return (
    <section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-[180px] lg:mt-[200px]`}
      >
        <TypingText title="| SERVICIOS EN METALMECÁNICA" textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {metalCard.map((metal, index) => (
            <MetalCard
              key={metal.id}
              {...metal}
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

export default Service;
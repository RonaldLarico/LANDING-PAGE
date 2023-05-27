import { motion } from 'framer-motion';

import styles from '../../styles';
import { startingFeatures } from '../constants';
import { TypingText } from '../cards/CustomTexts';
import StartSteps from '../cards/StartSteps'
import { staggerContainer, fadeIn, planetVariants } from '../../utils/motion';

const GetStarted = () => {
  return (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8 mt-[180px] lg:mt-auto`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/planet-09.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| NUESTROS VALORES" />
        {/* <TitleText title={<>Get started with just a few clicks</>} /> */}
        <p className="mt-[16px] font-bold text-[25px] text-gray-300">
        Juntos podemos lograr mucho más de lo que podríamos hacer solos. Por eso en JESAC el trabajo coordinado es la clave para cumplir con nuestros proyectos.
          </p>
        <div className="mt-[30px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
  )
};

export default GetStarted;
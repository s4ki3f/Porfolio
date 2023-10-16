import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon }) => {
  return (
    <p>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div 
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>

        </motion.div>

      </Tilt>
    </p>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.heroHeadText}
        >Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text=[17px]
        max-w-2xl leading-[30px]"
      >
      Hello, I am Sakif. I am a full-stack web developer. 
      I have a passion for web development and love to 
      create for web and mobile devices. 
      I am a self-taught developer and 
      I have been learning web development 
      for the past 2 years. I am currently working as 
      a freelancer and I am open to new opportunities. 
      I am also a student of Computer Science and Engineering 
      at the School of Engineering and Computer Science, 
      Brac University.

      </motion.p>

      <div className="mt-20 flex flex-wrap gap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index=
          {index} {...service} 
        />
      ))}

      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
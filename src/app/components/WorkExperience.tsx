import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './experiencecards/ExperienceCard'
import ExperienceCard_2 from './experiencecards/ExperienceCard_2'
import ExperienceCard_3 from './experiencecards/ExperienceCard_3'



export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-400 text-1xl'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 mt-10 snap-x snap-mendatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fe21d2]/80'>
        <ExperienceCard_3 />
        <ExperienceCard_2 />
        <ExperienceCard />


      </div>

    </motion.div>


  )
}
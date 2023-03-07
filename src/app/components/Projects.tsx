import React from 'react'
import {motion} from 'framer-motion'
import { Project } from 'typings';
import { urlFor } from 'sanity';
import Image from 'next/image'
import Case1_swap from './cases/Case1_Swap';
import Case2_web from './cases/Case2_Web';



function Projects() {
    
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-400 text-1xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fe21d2]/80'>
            <Case1_swap/>
            <Case2_web/>
                
                
            
        </div>
        <div className='w-full absolute top-[30%] bg-[#fe21d2]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects
"use client"
import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';


type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto xl:items-center'>
      
      <motion.div 
        initial={{
          x: -500,
          opacity:0,
          scale:0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='flex flex-row items-center'
      >
        {/*social icon*/}
        
        
        <SocialIcon 
          url="https://linkedin.com/in/yrtsai" 
          fgColor='gray' 
          bgColor='transparent'
        />
        <SocialIcon 
          url="https://linkedin.com/in/yrtsai" 
          fgColor='gray' 
          bgColor='transparent'
        />
        <SocialIcon 
          url="https://linkedin.com/in/yrtsai" 
          fgColor='gray' 
          bgColor='transparent'
        />
      </motion.div>

      <motion.div 
        initial={{
          x: 500,
          opacity:0,
          scale:0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'
      >
        
        <SocialIcon 
          network='email'
          fgColor='gray' 
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          get in touch
        </p>
      </motion.div>
    </header>
    
  )
}
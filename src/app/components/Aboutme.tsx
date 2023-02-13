
import React from 'react'
import {motion} from "framer-motion"
import pfpic from "./img/pfpic.jpg"

type Props = {}

export default function Aboutme({}:Props) {
  return(
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
            About
        </h3>
        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0}}
        viewport= {{once: true}}
        src="https://miro.medium.com/max/5000/1*FHL0L21nragfsp35RCTgsQ.png"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] x;:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a little background
            </h4>
            <p className='text-base'>
            I am Zoe, graduated from National Taiwan University of Science and Technology (NTUST), department of Materials Science and Engineering.I am looking forward to meeting you in person and discuss my qualifications in detail. If you have any questions, please feel free to contact me via email or mobile.
            </p>
        </div>
        
    </div>
  )
}

import React from 'react'
import {motion} from "framer-motion"
import { PageInfo } from 'typings'
import { urlFor } from 'sanity'


type Props = {
    pageInfo: PageInfo
}

export default function Aboutme({pageInfo}:Props) {
  return(
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-400 text-1xl'>
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
        src={pageInfo?.profilePic && urlFor(pageInfo.profilePic).url()}
        className='-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] x;:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
                Here is a little background
            </h4>
            <p className='text-base'>
            {pageInfo?.aboutMeInformation}
            </p>
        </div>
        
    </div>
  )
}

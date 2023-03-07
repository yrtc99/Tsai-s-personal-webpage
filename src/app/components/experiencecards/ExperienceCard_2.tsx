import React from 'react'
import { motion } from 'framer-motion'

import { urlFor } from 'sanity'
import Image from 'next/image'



const ExperienceCard = () => {
    return (

        <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] snap-center bg-[#461739] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='w-16 h-16 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
                src='https://katamata.files.wordpress.com/2017/02/its-sticker-color.png'
            />

            <div className='px-0 md:px-18'>
                <h4 className='text-1xl font-light'>CED Program</h4>
                <p className='font-bold text-1xl mt-1'>NTUST, ITS</p>

                <p className='uppercase py-3 text-gray-300'>
                    2019 Jul - 2019 Aug
                </p>

                <ul className='list-disc space-y-4 ml-5 text-xs max-h-32 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#fe21d2]/80'>
                    <li>Waste management: improving the environmental condition in Puhsarang, Kediri.</li>
                    <li>Counsel the locals about waste classification and Build roofed waste collection area. </li>
                </ul>    

            </div>
        </article>


    )
}

export default ExperienceCard
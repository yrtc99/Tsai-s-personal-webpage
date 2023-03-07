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
                src='https://img.onl/eDVWOp'
            />

            <div className='px-0 md:px-18'>
                <h4 className='text-1xl font-light'>Material Engineering</h4>
                <p className='font-bold text-1xl mt-1'>NTUST</p>

                <p className='uppercase py-3 text-gray-300'>
                    2017 Sep - 2021 Jun
                </p>

                <ul className='list-disc space-y-4 ml-5 text-xs max-h-32 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#fe21d2]/80'>
                    <li>Research achievement: Textile-moisture management.</li>
                    <li>Chemical process research and development.</li>
                    <li>Switchable Wettability of Poly(NIPAAm-co-HEMA-co-NMA) Coated PET Fabric for Moisture Management</li>
                </ul>

            </div>
        </article>


    )
}

export default ExperienceCard
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
                src='https://scontent.fkhh1-2.fna.fbcdn.net/v/t39.30808-6/292156177_523971096188503_948295573277888070_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DT51J71tK28AX902rIS&_nc_ht=scontent.fkhh1-2.fna&oh=00_AfBeAaR0TI2ARMPlL4Akj8_UuNYHw0bqimIHjVOEUMkPEA&oe=6409BB43'
            />

            <div className='px-0 md:px-18'>
                <h4 className='text-1xl font-light'>Web Design</h4>
                <p className='font-bold text-1xl mt-1'>DLaw Law Firm</p>

                <p className='uppercase py-3 text-gray-300'>
                    2018 May - 2019 Dec
                </p>

                <ul className='list-disc space-y-4 ml-5 text-xs max-h-32 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#fe21d2]/80'>
                    <li>Design Responsive web by using Wordpress as template.</li>
                    <li>Basic Html5, CSS skills. </li>
                    <li><a href='https://www.dlaw.com.tw/' target="_blank">https://www.dlaw.com.tw/</a></li>
                </ul>    

            </div>
        </article>


    )
}

export default ExperienceCard
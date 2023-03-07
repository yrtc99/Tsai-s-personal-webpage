import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from 'typings'
import { urlFor } from 'sanity'


type Props = {
    pageInfo: PageInfo
}

export default function Aboutme({ pageInfo }: Props) {
    return (
        <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-400 text-1xl'>
                About
            </h3>
            <div>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    alt='goodpic'
                    src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgaz4aGFoqxFIHaQsgQmUNVlheGvIbm8SXMbOEIVQ_RGwOhtJ2OegYKw6N-qDNV8Gd23u66c4TmQf8ruoKdpwphZdObpzieFAfBh4QW-40nO9OYWnhFG3k4YlRBKHYO4LC4wk9jNxUzxCWoasuR41O4yMZxp6SJ2hSuJby5XCjN5reghsPr5cIb1dFc/s320/pfpic.png'
                    className='width:100% height:100% flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] ;:h-[600px]'
                />
            </div>
            <div className='space-y-8 px-0 md:px-10'>
                <h4 className='text-2xl font-semibold'>
                    Here is a little background
                </h4>
                <p className='text-base'>
                    I am Zoe, graduated from National Taiwan University of Science and Technology (NTUST), department of Materials Science and Engineering.I am looking forward to meeting you in person and discuss my qualifications in detail. If you have any questions, please feel free to contact me via email or mobile.
                </p>
            </div>

        </div>
    )
}

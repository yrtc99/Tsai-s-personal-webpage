import React from 'react'
import {motion} from 'framer-motion'

import { urlFor } from 'sanity';
import Image from 'next/image'


function Case2_web() { 
  return (
    <div 
                
    className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
    >
        
        <motion.img 
        initial={{ y:-300, opacity:0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='pt-10 w-40 h-40 xl:w-[300px] xl:h-[300px] object-cover object-center'
        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiws_qQKOr0BtpWrrBg9os_AWJdHb19TtgF5dJ2MFD8yHVtBNEiMokK0NEszk6n371Elf5g06Qd6CZIQI1SYrRpxSqpQvV-4qD358UbLLD51iT5GXJuXB2dIg6H5Pt_fB_TA4BENOZtohc0kDKEClUs4OFxxK9aL7qYfkqRh6BqzFdlOw2xIlLPj84h/s320/profolio_pic.png'
        />
        <div className='space-y-6 md:px-10 max-w-6xl'>
            <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#fe21d2]/50'>
                    Case Study 2 of 2: 
                </span>{" "}
                Profolio website
            </h4>

            <div className='flex items-center space-x-2 justify-center'>
                <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
                alt="typescript" 
                className='w-10 h-10 rounded-full'
                />
                <img             
                src='https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png'
                alt="nextjs" 
                className='w-10 h-10 rounded-full'
                />
                <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mi47a93MNg3XjntM_9ugfnzrVjUNNUHL7cWQ7jIKEg&s'
                alt="tailwindcss" 
                className='w-10 h-10 rounded-full'
                />

            </div>

            <p className='text-lg text-center md:text-left'>
                My profolio website with responsive web design. Based on typescript, next.js, tailwindcss, sanity.io.
            </p>
        </div>    
    </div>
)}

export default Case2_web

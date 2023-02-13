import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, i) => (
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{ y:-300, opacity:0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className='w-40 h-40 xl:w-[200px] xl:h-[200px] object-cover object-center'
                    src='https://assets.justinmind.com/wp-content/uploads/2020/02/website-mockup-compete-guide-768x492.png'/>
                    <div className='space-y-10 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#fe21d2]/50'>
                                Case Study {i+1} of {projects.length}: 
                            </span>{" "}
                            Golang B2C Website
                        </h4>
                        <p className='text-lg text-center md:text-left'>
                        t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                        </p>
                    </div>    
                </div>
            ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#fe21d2]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}

export default Projects
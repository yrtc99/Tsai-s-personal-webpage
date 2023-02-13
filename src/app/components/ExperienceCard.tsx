import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    
    <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#461739] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{ duration: 1.2 }} 
        whileInView={{ opacity: 1, y:0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://miro.medium.com/max/5000/1*FHL0L21nragfsp35RCTgsQ.png"/>
        
        <div className='px-0 md:px-18'>
            <h4 className='text-4xl font-light'>Golang Developer</h4>
            <p className='font-bold text-2xl mt-1'>Golang</p>
            <div className='flex space-x-2 my-2'>
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7YAFh8DzV7w66pV81BPFMSS8FTenVodLaw&usqp=CAU'
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7YAFh8DzV7w66pV81BPFMSS8FTenVodLaw&usqp=CAU'
                />
                <img
                    className='h-10 w-10 rounded-full'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7YAFh8DzV7w66pV81BPFMSS8FTenVodLaw&usqp=CAU'
                />
                {/* tech used */}
               
            </div>
            <p className='uppercase py-5 text-gray-300'>
                started work-ended
            </p>

            <ul className='list-disc space-4 ml-5 text-lg'>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
                <li>summary points</li>
            </ul>
        </div>
    </article>
    
    
  )
}

export default ExperienceCard
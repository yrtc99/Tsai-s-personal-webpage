import React from 'react'
import {motion} from 'framer-motion'

import { urlFor } from 'sanity';



const Skill = () => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                
                opacity: 0, 
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src='https://avatars.githubusercontent.com/u/15729372?s=280&v=4'
            className='rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
    </div>
  )
}

export default Skill
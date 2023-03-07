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
            src='data:image/png;base64,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'
            className='rounded-full border border-gray-500 object-cover w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
    </div>
  )
}

export default Skill
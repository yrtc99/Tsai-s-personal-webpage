import React from 'react'
import {motion} from 'framer-motion'
import { Skill } from 'typings'
import { urlFor } from 'sanity';

type Props = {
  skill:Skill;
  directionLeft?: boolean;
}

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0, 
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
    </div>
  )
}

export default Skill
import React from 'react'
import {motion} from "framer-motion"
import Golangicon from './skillicons/golang'
import Htmlicon from './skillicons/html'
import Cssicon from './skillicons/css'
import Nextjsicon from './skillicons/nextjs'
import Reacticon from './skillicons/react'
import Tailwindicon from './skillicons/tailwindcss'
import Typescripticon from './skillicons/typescript'
import Ginicon from './skillicons/gin'
import JSicon from './skillicons/javascript'
import Pyicon from './skillicons/python'
import Djicon from './skillicons/django'




const Skills = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-400 text-1xl'>
            Skills
        </h3>

        <h3 className='absolute top-20 uppercase tracking-[3px] text-gray-400 text-sm'>
           Hover over a skill for currency profieciency 
        </h3>
        <div className='grid grid-cols-4 gap-5'>
          
              <Golangicon />
              <Ginicon/>
              <Htmlicon/>
              <Cssicon/>
              <Reacticon/>
              <Tailwindicon/>
              <Typescripticon/>
              <Nextjsicon/>
              <JSicon/>
              <Pyicon/>
              <Djicon/>

          
        </div>
    </motion.div>
  )
}

export default Skills



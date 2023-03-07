import React from 'react'
import {motion} from 'framer-motion'

import { urlFor } from 'sanity';
import Image from 'next/image'


function Case1_swap() {
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
        src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgkOIRqMIaBafDs3fcE78R7DmvkzI-gHFMk8ZgAIFGOiAElKUS-k08zPmzT5d0yqhmeY2uOlErMWYlLaOMBD415kk5Bz5GFZB7VtBZj_NPnrCUUnmT5PV7TFgxolxnc31gcYoJNliJ5GEne8oH3g5lpi1tpuQvT1PpbgwaoCZamzaGrm_qiIo3-CZf/s320/swap_pic.png'
        />
        <div className='space-y-6 md:px-10 max-w-6xl'>
            <h6 className='text-1xl font-semibold text-center'>
                <span className='underline decoration-[#fe21d2]/50'>
                    Case Study 1 of 2: 
                </span>{" "}
                Web 3.0 Cryptocurrency Exchange Decentralized Application
            </h6>

            <div className='flex items-center space-x-2 justify-center'>
                <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3BHmEt2cEKhzklswnaHnGm_BFB5YCuSIO36TCww&s'
                alt="javascript" 
                className='w-10 h-10 rounded-full'
                />
                <img             
                src='https://w7.pngwing.com/pngs/235/872/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail.png'
                alt="react" 
                className='w-10 h-10 rounded-full'
                />
                <img 
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mi47a93MNg3XjntM_9ugfnzrVjUNNUHL7cWQ7jIKEg&s'
                alt="tailwindcss" 
                className='w-10 h-10 rounded-full'
                />

            </div>

            <p className='text-sm text-center md:text-left'>
            A decentralized cryptocurrency exchange React application with metamask pairing, live smart contract data fetching.
            The app connect to your wallet with MetaMask and sawp your tokens. The smart contracts is complied & deployed using CRANQ. And deploy them to blockchain by Alchemy.
            </p>
        </div>   
    </div>
  )
}

export default Case1_swap

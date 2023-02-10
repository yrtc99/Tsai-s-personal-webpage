"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Bgcircle from './Bgcircle'
import { Link, BrowserRouter } from "react-router-dom"

type Props = {}

export default function Intro({}: Props) {
    const [text, count] = useTypewriter({
        words:[
        "hi, I'm Zoe :D",
        "I'm a beginer learner",
        "Glad to meet you here",
        ],
        loop: true,
        delaySpeed: 2000,
        
         
    }); 

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <Bgcircle />

            <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
            src='../img/jam.jpg'/>

            <div className=''>
                <h2 className='text-sm uppercase pb-2 tracking-[14px]'>
                    software engineer
                </h2>
                <h1 className='text-4xl lg:text-6xl font-semibold scroll-px-10'>
                    <span>{text}</span>
                    <Cursor cursorColor='pink'/>
                </h1>
            </div> 

            <BrowserRouter>
                <div className='z-20'>
                    <Link to="#about">
                        <button className='introButton'>About</button>
                    </Link>
                    
                    <Link to='#experience'>
                        <button className='introButton'>Experience</button>
                    </Link>
                    
                    <Link to='#skills'>
                        <button className='introButton'>Skills</button>
                    </Link>
                    
                    <Link to='#projects'>
                        <button className='introButton'>Projects</button>
                    </Link>
                    
                </div>
            </BrowserRouter>
            
               
        </div>
    )
}
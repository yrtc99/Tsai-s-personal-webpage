"use client"

import './globals.css'
import React from "react"
import Header from './components/Header'
import Intro from './components/Intro'
import Aboutme from './components/Aboutme'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContectMe from './components/ContactMe'
import { Experience, PageInfo, Project, Skill, Social } from 'typings'

import { fetchPageInfo } from 'utiles/fetchPageInfo'
import { fetchExperiences } from 'utiles/fetchExperineces'
import { fetchSocial } from 'utiles/fetchSocials'
import { fetchSkills } from 'utiles/fetchSkills'
import { fetchProjects } from 'utiles/fetchProjects'

import { NoSSR } from './components/NoSSR';





const layout = () => {
  return (

    <html lang="en" className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fe21d2]/80' >

      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />

      <body>
        {/*header */}
        <NoSSR>
          <Header/>
        </NoSSR>



        {/*intro*/}
        <NoSSR>
          <section id="intro" className='snap-start'>
            <Intro />
          </section>
        </NoSSR>


        {/*about */}
        <NoSSR>
          <section id="about" className='snap-center'>
            <Aboutme />
          </section>
        </NoSSR>


        {/*experience */}
        <NoSSR>
          <section id="experience" className='snap-center'>
            <WorkExperience  />
          </section>
        </NoSSR>

        <NoSSR>
          {/*skills */}
          <section id="skills" className='snap-start'>
            <Skills />
          </section>
        </NoSSR>

        <NoSSR>
          {/*projects */}
          <section id="projects" className='snap-start'>
            <Projects  />
          </section>
        </NoSSR>

        <NoSSR>

          {/*contact me */}
          <section id="contactme" className='snap-start'>
            <ContectMe />
          </section>
        </NoSSR>
      </body>

    </html>

  )
}
export default layout;
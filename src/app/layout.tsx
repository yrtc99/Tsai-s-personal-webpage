"use client"
import './globals.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Aboutme from './components/Aboutme'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ContectMe from './components/ContactMe'
import { Experience, PageInfo, Project, Skill, Social } from 'typings'
import { GetStaticProps } from 'next'
import { fetchPageInfo } from 'utiles/fetchPageInfo'
import { fetchExperiences } from 'utiles/fetchExperineces'
import { fetchSocial } from 'utiles/fetchSocials'
import { fetchSkills } from 'utiles/fetchSkills'
import { fetchProjects } from 'utiles/fetchProjects'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (

    <html lang="en" className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fe21d2]/80' >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body></body>
      {/*header */}
      <Header socials={socials} />

      {/*intro*/}
      <section id="intro" className='snap-center'>
        <Intro pageInfo = {pageInfo} />
      </section>

      {/*about */}
      <section id="about" className='snap-center'>
        <Aboutme pageInfo = {pageInfo} />
      </section>

      {/*experience */}
      <section id="experience" className='snap-center'>
        <WorkExperience experiences = {experiences} />
      </section>

      {/*skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/*projects */}
      <section id="projects" className='snap-start'>
        <Projects projects={projects}/>
      </section>

      {/*contact me */}
      <section id="contactme" className='snap-start'>
        <ContectMe />
      </section>

    </html>

  )
}

export default Home;

export async function getStaticProps() {
  const pageInfo: PageInfo[] = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocial()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    //next.js will attempt to re-generate the page:
    // when a reguest comes in a most once every 10 seconds
    revalidate: 10,
  }
}
import './globals.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Aboutme from './components/Aboutme'
import Experience from './components/Experience'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[rgb(36,36,36)] text-white' h-screen snap-y snap-mandatory overflow-scroll z-0>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>{children}</body>
      {/*header */}
      <Header />

      {/*intro*/}
      <section id='intro' className='snap-center'>
        <Intro />
      </section>

      {/*about */}
      <section id='about' className='snap-center'>
        <Aboutme />
      </section>

      {/*experience */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>
      {/*skills */}

      {/*projects */}

      {/*contact me */}

    </html>
  )
}

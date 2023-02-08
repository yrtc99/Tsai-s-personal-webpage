import './globals.css'
import Header from './components/Header'
import Intro from './components/Intro'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>{children}</body>
      {/*header */}
      <Header />

      {/*intro*/}
      <section>
        <Intro />
      </section>
      {/*about */}

      {/*experience */}

      {/*skills */}

      {/*projects */}

      {/*contact me */}

    </html>
  )
}

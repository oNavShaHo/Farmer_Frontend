import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './navbar'
import ImageForm from './ImageForm'
import Homee from './home'
import About from './About'
import Hf from './Hf'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
    
    <Navbar/>
    <Hf/>

    

     


   {/*

    <section id="home" className="snap-center">
      <Homee/>
    </section>

     
    <section id="about" className="snap-center">
    <About/>
    </section> */}
  

    {/* <section id="skills" className='snap-start'>
      <Skills/>
    </section>  */}
    </main>
  )
}

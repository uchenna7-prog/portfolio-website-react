import styles from "./Home.module.css"
import Experience from '../../Sections/Experience/Experience'
import Contact from "../../Sections/Contact/Contact"
import Hero from "../../Sections/Hero/Hero"
import About from "../../Sections/About/About"
import Skills from '../../Sections/Skills/Skills'
import Projects from "../../Sections/Projects/Projects"
import Services from '../../Sections/Services/Services'
import PixelName from "../../Components/PixelName/PixelName";



export default function Home() {
    return (   
    <div className={styles.appContainer}>
      <Hero/>
      <div>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <PixelName text="UCHENNA" speed={25} />
      </div>

    </div>
    )
}
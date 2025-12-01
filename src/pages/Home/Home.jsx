import "./Home.css"
import Experience from '../../Sections/Experience/Experience'
import Contact from "../../Sections/Contact/Contact"
import Footer from "../../Components/Footer/Footer"
import Hero from "../../Sections/Hero/Hero"
import Header from "../../Components/Header/Header"
import About from "../../Sections/About/About"
import Skills from '../../Sections/Skills/Skills'
import Projects from "../../Sections/Projects/Projects"
import Services from '../../Sections/Services/Services'


export default function Home() {
    return (   
    <div id="appContainer">
      <Header/>
      <Hero/>
      <div>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Experience/>
        <Contact/>
        <Footer/>
      </div>

    </div>
    )
}

import "./App.css"
import Experience from './Components/Experience/Experience'
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Header from "./Components/Header/Header"
import About from "./Components/About/About"
import Skills from './Components/Skills/Skills'
import Projects from "./Components/Projects/Projects"
import Services from './Components/Services/Services'



function App() {
 
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

export default App

import styles from "./Projects.module.css"

import ProjectCard from "./ProjectCard"

import cgpaCalcHome from "../../assets/CgpaCalcScreenshots/cgpaCalcHome.png"
import cgpaCalc from "../../assets/CgpaCalcScreenshots/cgpaCalc.png"
import cgpaPredictor from "../../assets/CgpaCalcScreenshots/cgpaPredictor.png"
import gpaCalc from "../../assets/CgpaCalcScreenshots/gpaCalc.png"

import portfolioHome from "../../assets/PortfolioScreenshots/portfolioHome.png"
import portfolioAbout from "../../assets/PortfolioScreenshots/portfolioAbout.png"
import portfolioServices from "../../assets/PortfolioScreenshots/portfolioServices.png"
import portfolioSkills from "../../assets/PortfolioScreenshots/portfolioSkills.png"
import portfolioProjects from "../../assets/PortfolioScreenshots/portfolioProject.png"
import portfolioContact from "../../assets/PortfolioScreenshots/portfolioContact.png"



import imageEditorHome from "../../assets/image-editor.jpeg"
import crop from "../../assets/crop.jpeg"




function Projects(){
    return(
        <section  className={styles.projectsSection} id="projects">
            <h2 className="sectionHeading">RECENT PROJECTS</h2>
            <ProjectCard technologiesUsed={["HTML","CSS","Javascript","Python"]} projectTitle="PORTFOLIO WEBSITE"  images={[portfolioHome,portfolioAbout,portfolioServices,portfolioSkills,portfolioProjects,portfolioContact]} projectDecription="A modern personal portfolio website showcasing my skills, services, experience, and projects, featuring smooth navigation, responsive design, engaging visual sections, and an accessible contact area for seamless communication with visitors and potential clients."/>
            <ProjectCard technologiesUsed={["HTML","CSS","Javascript"]} projectTitle="CGPA CALCULATOR" images={[cgpaCalcHome,cgpaCalc, cgpaPredictor,gpaCalc]} projectDecription="A streamlined CGPA Calculator app designed for Nigerian university students, featuring dynamic semester tracking, quick per-semester GPA computation, and an intuitive predictor tool that estimates future CGPA using previous performance and expected grades."/>
            <ProjectCard technologiesUsed={["HTML","CSS","Javascript","Python"]} projectTitle="IMAGE EDITOR"  images={[imageEditorHome,crop, crop,crop]} projectDecription="A versatile image editor web app that lets users remove backgrounds, resize photos, apply quick adjustments, and export high-quality results through an intuitive, responsive interface designed for fast, accessible, and effortless editing."/>
            <a className={styles.seeAllProjectsBtn}>
                <span>See All Projects</span> 
                <i class="material-icons">open_in_new</i>
            </a>
        </section>
    )
}

export default Projects




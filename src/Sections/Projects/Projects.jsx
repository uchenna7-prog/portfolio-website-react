import styles from "./Projects.module.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import cgpaCalcHome from "../../assets/CgpaCalcScreenshots/cgpaCalcHome.png";
import cgpaCalc from "../../assets/CgpaCalcScreenshots/cgpaCalc.png";
import cgpaPredictor from "../../assets/CgpaCalcScreenshots/cgpaPredictor.png";
import gpaCalc from "../../assets/CgpaCalcScreenshots/gpaCalc.png";

import portfolioHome from "../../assets/PortfolioScreenshots/portfolioHome.png";
import portfolioAbout from "../../assets/PortfolioScreenshots/portfolioAbout.png";
import portfolioServices from "../../assets/PortfolioScreenshots/portfolioServices.png";
import portfolioSkills from "../../assets/PortfolioScreenshots/portfolioSkills.png";
import portfolioProjects from "../../assets/PortfolioScreenshots/portfolioProject.png";
import portfolioContact from "../../assets/PortfolioScreenshots/portfolioContact.png";

import imageEditorHome from "../../assets/ImageEditorScreenshots/image-editor.jpeg";
import crop from "../../assets/ImageEditorScreenshots/crop.jpeg";

// Heading animation
const headingVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.05,
      delayChildren: 0.1
    } 
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  show: { 
    opacity: 1, 
    y: 0,
    rotateX: 0,
    transition: { 
      type: "spring",
      damping: 12,
      stiffness: 100
    } 
  },
};

// Project card animation with alternating directions
const projectVariants = {
  hidden: (index) => ({
    opacity: 0,
    y: 60,
    scale: 0.9,
  }),
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      mass: 1,
    }
  }
};

// Button animation
const buttonVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 30
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.3
    }
  }
};

function Projects() {
  const reduceMotion = useReducedMotion();
  const headingText = "RECENT PROJECTS";

  const projects = [
    {
      technologiesUsed: ["HTML", "CSS", "Javascript", "Python"],
      projectTitle: "PORTFOLIO WEBSITE",
      images: [portfolioHome, portfolioAbout, portfolioServices, portfolioSkills, portfolioProjects, portfolioContact],
      projectDecription: "A modern personal portfolio website showcasing my skills, services, experience, and projects, featuring smooth navigation, responsive design, engaging visual sections, and an accessible contact area for seamless communication with visitors and potential clients."
    },
    {
      technologiesUsed: ["HTML", "CSS", "Javascript"],
      projectTitle: "CGPA CALCULATOR",
      images: [cgpaCalcHome, cgpaCalc, cgpaPredictor, gpaCalc],
      projectDecription: "A streamlined CGPA Calculator app designed for Nigerian university students, featuring dynamic semester tracking, quick per-semester GPA computation, and an intuitive predictor tool that estimates future CGPA using previous performance and expected grades."
    },
    {
      technologiesUsed: ["HTML", "CSS", "Javascript", "Python"],
      projectTitle: "IMAGE EDITOR",
      images: [imageEditorHome, crop, crop, crop],
      projectDecription: "A versatile image editor web app that lets users remove backgrounds, resize photos, apply quick adjustments, and export high-quality results through an intuitive, responsive interface designed for fast, accessible, and effortless editing."
    }
  ];

  return (
    <section className={styles.projectsSection} id="Projects">
      {/* Animated heading */}
      <div className={styles.headingWrapper}>
        <motion.h2
          className="sectionHeading"
          variants={headingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          style={{ 
            display: 'inline-flex', 
            overflow: 'hidden',
            perspective: '1000px'
          }}
        >
          {headingText.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              style={{ 
                display: 'inline-block',
                transformOrigin: 'bottom'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h2>
        <motion.div 
          className={styles.headingUnderline}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Animated project cards */}
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={reduceMotion ? {} : projectVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.2 }}
            style={{
              width: "100%",
              perspective: "1500px",
              transformStyle: "preserve-3d"
            }}
          >
            <ProjectCard
              technologiesUsed={project.technologiesUsed}
              projectTitle={project.projectTitle}
              images={project.images}
              projectDecription={project.projectDecription}
            />
          </motion.div>
        ))}
      </div>

      {/* Animated button */}
      <motion.div
        variants={reduceMotion ? {} : buttonVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
      >
        <Link to="Projects" className="link">
          <motion.button 
            className={styles.seeAllProjectsBtn}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              boxShadow: "0 15px 35px rgba(14, 96, 179, 0.4)",
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 15 
              }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              See All Projects
            </motion.span>
            <motion.i 
              className="material-icons"
              initial={{ x: 0, rotate: 0 }}
              whileHover={{ x: 5, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              arrow_forward
            </motion.i>
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

export default Projects;
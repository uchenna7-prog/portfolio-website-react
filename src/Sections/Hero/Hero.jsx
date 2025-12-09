import styles from "./Hero.module.css"
import {Link} from "react-router-dom"
import {useReducedMotion, motion} from "framer-motion"


const nameVariant = {
    hidden:{
        opacity:0,
        y:-60
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type: "spring",
            stiffness: 80,
            damping: 20,
        }
    }
}

const briefIntroVariant={
      hidden:{
        opacity:0,
        y:60
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type: "spring",
            stiffness: 80,
            damping: 20
        }
    }
}

const buttonsContainerVariant={
    hidden:{
        opacity:0,
        scale:0
    },
    show:{
        opacity:1,
        scale:1,
        transition:{
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay:0.5
        }
    }
}

function Hero(){
    const reduceMotion = useReducedMotion()
    return(
        <section className={styles.heroSection} id="home">

            <div className={styles.contentContainer}>
                <motion.h1 
                className={styles.name} 
                variants={nameVariant} 
                initial="hidden" 
                whileInView="show"
                >
                    UCHENDU UCHENNA
                </motion.h1>

                <motion.div 
                className={styles.briefIntro} 
                variants={briefIntroVariant} 
                initial="hidden" 
                whileInView="show">
                    Front-end Web Developer | Computer Science Student.
                </motion.div>

                <motion.div 
                className={styles.buttonsContainer}  
                variants={buttonsContainerVariant} 
                initial="hidden" 
                whileInView="show">
                    <button className={`${styles.button} ${styles.hireMeBtn}`}>
                        <i class="fa-solid fa-briefcase"></i>
                        Hire Me
                    </button>
                    <Link to="/Resume" className="link">
                        <button className={`${styles.button} ${styles.resumeBtn}`}>
                            <i className="fa-regular fa-file-lines"></i>
                            Résumé
                        </button>
                    </Link>

                </motion.div>

            </div>

            <div className={styles.scrollDownArrowContainer}>
                <motion.a 
                animate={reduceMotion ? {opacity:1} : {y:[0,12,0],opacity:[1,0.5,1]}}
                transition={{repeat:Infinity,ease:"easeInOut",duration:1.6}}
                className="material-icons" 
                href="#About">
                    keyboard_arrow_down
                </motion.a>
            </div>
        </section>
    )
}

export default Hero
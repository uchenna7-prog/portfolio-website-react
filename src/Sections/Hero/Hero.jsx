import styles from "./Hero.module.css"
import {Link} from "react-router-dom"
import {delay, motion} from "framer-motion"


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
    return(
        <section className={styles.heroSection} id="home">

            <div>
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
                <a className="material-icons">keyboard_arrow_down</a>
            </div>
        </section>
    )
}

export default Hero
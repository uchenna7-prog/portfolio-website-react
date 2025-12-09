import styles from './Skills.module.css';
import { motion, useReducedMotion } from "framer-motion";


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


const sliderContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20
    }
  }
};

function Skills() {
    const reduceMotion = useReducedMotion();
    const headingText = "SKILLS";

    const skills1 = [
        { icon: "ci-html", name: "HTML" },
        { icon: "ci-css", name: "CSS" },
        { icon: "ci-javascript", name: "Javascript" },
        { icon: "ci-python", name: "Python" },
        { icon: "ci-mysql", name: "MySql" },
        { icon: "ci-cpp", name: "C++" }
    ];

    const skills2 = [
        { icon: "ci-react", name: "React" },
        { icon: "ci-bootstrap", name: "Bootstrap" },
        { icon: "ci-flask", name: "Flask" },
        { icon: "ci-django", name: "Django" },
        { icon: "ci-expressjs", name: "Express.js" },
        { icon: "ci-tailwindcss", name: "Tailwind Css" }
    ];

    const skills3 = [
        { icon: "ci-github", name: "GitHub" },
        { icon: "ci-git", name: "Git" },
        { icon: "ci-pycharm", name: "PyCharm" },
        { icon: "ci-vscode", name: "VsCode" },
        { icon: "ci-postman", name: "Postman" },
        { icon: "ci-vercel", name: "Vercel" },
        { icon: "ci-render", name: "Render" }
    ];

    return (
        <section className={styles.skillsSection} id="Skills">
          
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
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
            </div>

            <div className={styles.skillsContainer}>

                <motion.div 
                    className={styles.sliderContainer}
                    variants={reduceMotion ? {} : sliderContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className={styles.slider1}>
                        {[...skills1, ...skills1, ...skills1].map((skill, index) => (
                            <motion.div 
                                key={index}
                                className={styles.skill}
                                whileHover={reduceMotion ? {} : {
                                    scale: 1.15,
                                    y: -10,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 15
                                    }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.i 
                                    className={`ci ${skill.icon}`}
                                    whileHover={reduceMotion ? {} : {
                                        scale: 1.3,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }}
                                />
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

    
                <motion.div 
                    className={styles.sliderContainer}
                    variants={reduceMotion ? {} : sliderContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={styles.slider2}>
                        {[...skills2, ...skills2, ...skills2].map((skill, index) => (
                            <motion.div 
                                key={index}
                                className={styles.skill}
                                whileHover={reduceMotion ? {} : {
                                    scale: 1.15,
                                    y: -10,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 15
                                    }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.i 
                                    className={`ci ${skill.icon}`}
                                    whileHover={reduceMotion ? {} : {
                                        scale: 1.3,
                                        rotate: 360,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }}
                                />
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

        
                <motion.div 
                    className={styles.sliderContainer}
                    variants={reduceMotion ? {} : sliderContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.6 }}
                >
                    <div className={styles.slider3}>
                        {[...skills3, ...skills3, ...skills3].map((skill, index) => (
                            <motion.div 
                                key={index}
                                className={styles.skill}
                                whileHover={reduceMotion ? {} : {
                                    scale: 1.15,
                                    y: -10,
                                    transition: {
                                        type: "spring",
                                        stiffness: 400,
                                        damping: 15
                                    }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.i 
                                    className={`ci ${skill.icon}`}
                                    whileHover={reduceMotion ? {} : {
                                        scale: 1.3,
                                        rotate: 360,
                                        transition: {
                                            duration: 0.5
                                        }
                                    }}
                                />
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;
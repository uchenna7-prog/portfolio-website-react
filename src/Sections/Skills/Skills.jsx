import styles from './Skills.module.css';
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";


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
          
            <SectionHeading headingText="SKILLS"/>

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
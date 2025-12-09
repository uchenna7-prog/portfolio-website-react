import styles from "./SectionHeading.module.css"
import {motion} from "framer-motion"

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

function SectionHeading({headingText}){
    
    return(
        <div className={styles.headingContainer}>
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
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
    )
}

export default SectionHeading
import styles from "./About.module.css";
import profilePic from "../../assets/profilePic.jpg";
import { motion, useReducedMotion } from "framer-motion";

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

// Profile picture animation
const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.6,
    rotate: -10
  },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      delay: 0.2
    }
  }
};

// Text content animation
const textContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4
    }
  }
};

const paragraphVariants = {
  hidden: { 
    opacity: 0, 
    x: 50,
    y: 20
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }
};

// Location animation
const locationVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    y: 20
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.6
    }
  }
};

function About() {
  const reduceMotion = useReducedMotion();
  const headingText = "ABOUT ME";

  return (
    <section className={styles.aboutSection} id="about">
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
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>


      <div className={styles.aboutSectionContentContainer}>
        {/* Animated profile picture */}
        <motion.img 
          className={styles.profilePicture} 
          src={profilePic} 
          alt="Profile"
          variants={reduceMotion ? {} : imageVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          whileHover={reduceMotion ? {} : { 
            scale: 1.05,
            rotate: 5,
            filter: "grayscale(100%)",
            transition: { 
              type: "spring", 
              stiffness: 300, 
              damping: 15 
            }
          }}
          whileTap={{ scale: 0.95 }}
        />

        {/* Animated text content */}
        <motion.div
          variants={reduceMotion ? {} : textContainerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={paragraphVariants}
          >
            I am Uchendu Uchenna, a passionate developer who enjoys turning ideas into
            smooth, visually polished interfaces that work across all devices. My work is
            driven by curiosity, attention to detail, and a strong desire to create
            digital products that are both beautiful and functional.
          </motion.p>

          <motion.p
            variants={paragraphVariants}
          >
            I'm currently seeking internship opportunities and freelance
            projects where I can apply my skills, grow through real-world
            experience, and collaborate with developers who inspire me. I enjoy
            learning new tools, tackling challenges that improve my
            problem-solving ability, and contributing to projects that have
            meaningful impact. If you're looking for a dedicated,
            eager-to-learn developer who brings both technical ability and
            genuine enthusiasm to the table, let's connect.
          </motion.p>

          {/* Animated location */}
          <motion.div 
            className={styles.locationContainer}
            variants={reduceMotion ? {} : locationVariants}
            whileHover={reduceMotion ? {} : { 
              scale: 1.05,
              backgroundColor: "rgba(14, 96, 179, 0.15)",
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 15 
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className={styles.locationIconWrapper}
              animate={reduceMotion ? {} : {
                rotate: [-8, 8, -8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 117.55"
                className={styles.locationSVG}
              >
                <path
                  d="M78.81,82.78c-4.35,4.77-9.42,9.05-15.12,12.51c-0.7,0.51-1.65,0.58-2.43,0.08
                    c-8.41-5.35-15.48-11.78-21.03-18.76c-7.66-9.61-12.49-20.27-14.14-30.53c-1.68-10.41-0.11-20.42,5.07-28.56
                    c2.04-3.22,4.65-6.15,7.83-8.68C46.3,3.01,54.65-0.06,62.96,0c8.01,0.06,15.91,3.05,22.74,9.28c2.4,2.18,4.42,4.68,6.07,7.39
                    c5.57,9.17,6.77,20.87,4.32,32.73c-2.41,11.71-8.41,23.62-17.28,33.35V82.78L78.81,82.78z
                    M25.32,74.54c1.98,0,3.59,1.61,3.59,3.59c0,1.98-1.61,3.59-3.59,3.59h-6.74l-8.88,28.67h103.22l-9.64-28.67h-5.57
                    c-1.98,0-3.59-1.61-3.59-3.59c0-1.98,1.61-3.59,3.59-3.59h10.7l14.46,43.01H0l13.32-43.01H25.32L25.32,74.54z
                    M61.38,18.51c9.88,0,17.88,8.01,17.88,17.87c0,9.88-8.01,17.88-17.88,17.88c-9.88,0-17.87-8-17.87-17.88
                    C43.49,26.51,51.5,18.51,61.38,18.51L61.38,18.51L61.38,18.51z"
                  fill="currentColor"
                />
                <circle cx="61.38" cy="36.38" r="15" fill="var(--bg)" />
              </svg>
            </motion.div>
            <span>Port Harcourt, Nigeria.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
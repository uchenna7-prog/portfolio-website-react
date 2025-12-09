import { motion, useReducedMotion } from "framer-motion";
import styles from "./Services.module.css";
import ServiceCard from "./ServiceCard/ServicesCard";


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


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.85,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      mass: 1
    }
  }
};

export default function Services() {
  const reduceMotion = useReducedMotion();
  const headingText = "SERVICES";

  const services = [
    {
      service: "FRONTEND",
      iconClass: "fa-code",
      serviceDescription: "I build modern, responsive, and visually engaging web interfaces that provide seamless user experiences. Using HTML, CSS, and JavaScript frameworks like React and Next.js, I transform designs into fast, interactive websites."
    },
    {
      service: "FREELANCE",
      iconClass: "fa-laptop",
      serviceDescription: "I offer freelance web development services, delivering high-quality, reliable solutions tailored to clients' needs. I combine creativity with technical expertise to create websites that are both functional and aesthetically pleasing."
    },
    {
      service: "INTERNSHIP",
      iconClass: "fa-graduation-cap",
      serviceDescription: "I am eager to join a team as an intern to contribute to real-world projects. I bring a strong foundation in frontend development and a passion for learning, collaborating to build innovative and functional web solutions."
    }
  ];

  return (
    <section className={styles.servicesSection} id="Services">
      <div className={styles.headingWrapper}>
        <motion.h1
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
        </motion.h1>
        <motion.div 
          className={styles.headingUnderline}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      
      <motion.div 
        className={styles.cardsContainer}
        variants={reduceMotion ? {} : containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((serviceData, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={reduceMotion ? {} : cardVariants}
            whileHover={reduceMotion ? {} : {
              scale: 1.02,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
              }
            }}
          >
            <ServiceCard 
              service={serviceData.service}
              iconClass={serviceData.iconClass}
              serviceDescription={serviceData.serviceDescription}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

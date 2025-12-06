import styles from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard";
import { useRef, useEffect, useState } from "react";
import uniportLogo from "/uniportLogo.png";
import codeLogo from "/codeLogo.png";
import brandLogo from "/brandLogo.png";
import { motion, useReducedMotion } from "framer-motion";

// Heading animation with letter reveal effect
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

// Card animation with staggered entrance from different sides
const cardVariants = {
  hidden: (index) => ({ 
    opacity: 0, 
    x: index % 2 === 0 ? -100 : 100,
    y: 50,
    scale: 0.9,
    rotateY: index % 2 === 0 ? -15 : 15,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 18, 
      mass: 0.8,
    },
  },
};

// Timeline element animations
const timelineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  show: { 
    scaleY: 1, 
    opacity: 1,
    transition: { 
      duration: 1.5, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2
    } 
  },
};

export default function Experience() {
  const experienceCards = [
    {
      id: 1,
      experienceTitle: "Freelance Developer",
      organization: "Frontend Developer",
      organizationLogo: codeLogo,
      date: "Jan 2025 - Present",
      cardPoints: [
        "Collaborate with clients to design and develop responsive websites.",
        "Provide end-to-end solutions from planning to deployment and testing.",
        "Ensure websites perform efficiently and deliver modern user experience.",
        "Develop layouts optimized for both desktop and mobile devices.",
        "Continuously learn and apply new tools to improve project quality.",
      ],
    },
    {
      id: 2,
      experienceTitle: "Personal Projects",
      organization: "Independent Development",
      organizationLogo: brandLogo,
      date: "2024 - Present",
      cardPoints: [
        "Design and implement small apps to practice new technologies.",
        "Create responsive and visually appealing layouts for various projects.",
        "Apply best coding practices to ensure maintainable and readable code.",
        "Test and refine features to achieve reliable performance and usability.",
        "Document and showcase completed projects to build a professional portfolio.",
      ],
    },
    {
      id: 3,
      experienceTitle: "Education",
      organization: "University Of Port Harcourt",
      organizationLogo: uniportLogo,
      date: "2025 - Present",
      cardPoints: [
        "Learn core programming concepts and apply them in real-world projects.",
        "Practice algorithms and data structures to solve complex coding problems.",
        "Understand computer networks and design secure communication systems.",
        "Study artificial intelligence techniques and build small AI models.",
        "Explore system architecture and understand how computers execute programs.",
      ],
    },
  ];

  const timelineRef = useRef(null);
  const cardsRef = useRef([]);
  const tCirclesRef = useRef([]);
  const movingCircleRef = useRef(null);
  const progresslineRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const tLine1Ref = useRef(null);
  const tLine2Ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  const updateTimeline = () => {
    if (!timelineRef.current || !cardsContainerRef.current) return;

    const timelineRect = timelineRef.current.getBoundingClientRect();
    const left =
      window.innerWidth < 1000
        ? parseFloat(cardsContainerRef.current.getBoundingClientRect().left) - 20
        : parseFloat(cardsContainerRef.current.getBoundingClientRect().left) - 25;

    const newProgress = Math.min(
      Math.max(window.innerHeight / 2 - timelineRect.top, 0),
      timelineRect.height
    );
    setProgress(newProgress);

    // Update line and moving circle with smooth transitions
    if (progresslineRef.current) {
      progresslineRef.current.style.height = newProgress + "px";
      progresslineRef.current.style.left = left + "px";
    }
    
    if (movingCircleRef.current) {
      movingCircleRef.current.style.top = newProgress + "px";
      movingCircleRef.current.style.left = left + "px";
    }
    
    if (tLine1Ref.current) {
      tLine1Ref.current.style.left = left + "px";
    }
    
    if (tLine2Ref.current) {
      tLine2Ref.current.style.left = left + 10 + "px";
    }

    // Animate timeline circles in sync with cards
    cardsRef.current.forEach((card, index) => {
      if (!card || !tCirclesRef.current[index]) return;
      
      const rect = card.getBoundingClientRect();
      const top = rect.top - timelineRect.top;
      if (index === 0){
        tCirclesRef.current[index].style.top = "0px";
      }
      else{
        tCirclesRef.current[index].style.top = top + "px";
      }
      
      tCirclesRef.current[index].style.left = left + "px";

      if (newProgress >= top) {
        tCirclesRef.current[index].classList.add(styles.filled);
      } else {
        tCirclesRef.current[index].classList.remove(styles.filled);
      }
    });
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateTimeline();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateTimeline);
    
    setTimeout(updateTimeline, 100);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  const headingText = "EXPERIENCE";

  return (
    <section className={styles.experienceSection}>
      {/* Section heading with letter-by-letter animation */}
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
              {letter}
            </motion.span>
          ))}
        </motion.h2>
        <motion.div 
          className={styles.headingUnderline}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className={styles.timelineContainer} ref={timelineRef}>
        <motion.div 
          className={styles.tLine1} 
          ref={tLine1Ref}
          variants={timelineVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{ originY: 0 }}
        ></motion.div>
        
        <motion.div 
          className={styles.tLine2} 
          ref={tLine2Ref}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ originY: 1 }}
        ></motion.div>
        
        <div className={styles.progressLine} ref={progresslineRef}></div>
        <div className={styles.movingCircle} ref={movingCircleRef}></div>

        {experienceCards.map((_, index) => (
          <div
            key={index}
            className={styles.tCircle}
            ref={(el) => (tCirclesRef.current[index] = el)}
          ></div>
        ))}

        <div className={styles.cardsContainer} ref={cardsContainerRef}>
          {experienceCards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              variants={reduceMotion ? { hidden: {}, show: {} } : cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
              whileHover={reduceMotion ? {} : { 
                scale: 1.02,
                y: -5,
                rotateY: 2,
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }
              }}
              whileTap={reduceMotion ? {} : { scale: 0.98 }}
              style={{ 
                width: "100%", 
                willChange: "transform, opacity",
                perspective: "1500px",
                transformStyle: "preserve-3d"
              }}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <ExperienceCard
                className={styles.card}
                experienceTitle={card.experienceTitle}
                organization={card.organization}
                organizationLogo={card.organizationLogo}
                cardPoints={card.cardPoints}
                date={card.date}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
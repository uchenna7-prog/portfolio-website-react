import styles from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard";
import { useRef, useEffect, useState } from "react";
import uniportLogo from "/uniportLogo.png";
import codeLogo from "/codeLogo.png";
import brandLogo from "/brandLogo.png";
import { motion, useReducedMotion } from "framer-motion";

// Heading animation
const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15, duration: 0.6 },
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

    // Update line and moving circle
    progresslineRef.current.style.height = newProgress + "px";
    progresslineRef.current.style.left = left + "px";
    movingCircleRef.current.style.top = newProgress + "px";
    movingCircleRef.current.style.left = left + "px";
    tLine1Ref.current.style.left = left + "px";
    tLine2Ref.current.style.left = left + 10 + "px";

    // Animate timeline circles in sync with cards
    cardsRef.current.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const top = rect.top - timelineRect.top;
      tCirclesRef.current[index].style.top = top + "px";
      tCirclesRef.current[index].style.left = left + "px";

      if (newProgress >= top) {
        tCirclesRef.current[index].classList.add(styles.filled);
      } else {
        tCirclesRef.current[index].classList.remove(styles.filled);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", updateTimeline);
    window.addEventListener("resize", updateTimeline);
    updateTimeline(); // initialize
    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <section className={styles.experienceSection}>
      {/* Section heading animation */}
      <motion.h2
        className="sectionHeading"
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        EXPERIENCE
      </motion.h2>

      <div className={styles.timelineContainer} ref={timelineRef}>
        <div className={styles.tLine1} ref={tLine1Ref}></div>
        <div className={styles.tLine2} ref={tLine2Ref}></div>
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
              key={index}
              variants={reduceMotion ? { hidden: {}, show: {} } : cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.15 }}
              whileHover={reduceMotion ? {} : { scale: 1.02, y: -5 }}
              whileTap={reduceMotion ? {} : { scale: 0.99 }}
              style={{ width: "100%", willChange: "transform, opacity" }}
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

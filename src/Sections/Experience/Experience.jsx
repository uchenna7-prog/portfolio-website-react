import styles from "./Experience.module.css";
import ExperienceCard from "./ExperienceCard";
import { useRef,useEffect } from "react";
import uniportLogo from "/uniportLogo.png"
import codeLogo from "/codeLogo.png"
import brandLogo from "/brandLogo.png"

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
      "Continuously learn and apply new tools to improve project quality."
    ]
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
      "Explore system architecture and understand how computers execute programs."
    ]
  }
  ,
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
      "Document and showcase completed projects to build a professional portfolio."
    ]
  }
];

  
  const timelineRef = useRef(null)
  const cardsRef = useRef([])
  const tCirclesRef = useRef([])
  const movingCircleRef = useRef(null)
  const progresslineRef = useRef(null)
  const cardsContainerRef = useRef(null)
  const tLine1Ref = useRef(null)
  const tLine2Ref = useRef(null)
  

  const updateTimeline =() =>{

    const timelineRect = timelineRef.current.getBoundingClientRect()
    let left;
    if(window.innerWidth < 1000){
      left = parseFloat(cardsContainerRef.current.getBoundingClientRect().left) - 20
    }
    else{
      left = parseFloat(cardsContainerRef.current.getBoundingClientRect().left) - 25
    }
    
    const progress = Math.min(Math.max(window.innerHeight / 2 - timelineRect.top,0),timelineRect.height)

    progresslineRef.current.style.height = progress + "px"
    progresslineRef.current.style.left = left + "px"

    movingCircleRef.current.style.top = progress + "px"
    movingCircleRef.current.style.left = left + "px"

    tLine1Ref.current.style.left = left + "px"
    tLine2Ref.current.style.left = left + 10 + "px"
    

    cardsRef.current.forEach((card,index)=>{
      const rect = card.getBoundingClientRect()
      const top = rect.top - timelineRect.top
      tCirclesRef.current[index].style.top = top + "px"
      tCirclesRef.current[index].style.left = left + "px"
    
      if(progress >= top){
        tCirclesRef.current[index].classList.add(styles.filled)
      }
      else{
        tCirclesRef.current[index].classList.remove(styles.filled)
      }
  })
  }

  useEffect(
    ()=>{
      window.addEventListener("scroll",updateTimeline)
      window.addEventListener("resize",updateTimeline)
      return ()=>{
        window.removeEventListener("scroll",updateTimeline)
        window.removeEventListener("resize",updateTimeline)
      }
    }
  ,[])
  
  const generateTcirclesIDsArray = () => {
    let IDsArray = []
    for(let i = 0; i < experienceCards.length ; i++){
      IDsArray.push(i)
  }
    return IDsArray 
}

  const tCircleIDsArray = generateTcirclesIDsArray()

  return(
    <section className={styles.experienceSection}>
      <h2 className="sectionHeading">EXPERIENCE</h2>
      <div className={styles.timelineContainer} ref={timelineRef}>

        <div className={styles.tLine1} ref={tLine1Ref}></div>
        <div className={styles.tLine2} ref={tLine2Ref}></div>
        <div className={styles.progressLine} ref={progresslineRef}></div>
        <div className={styles.movingCircle} ref={movingCircleRef}></div>

        {tCircleIDsArray.map((element,index) => <div 
        className={styles.tCircle} 
        key={index} 
        ref={(el)=>tCirclesRef.current[index]=el}>
        </div> 
        )}

        <div className={styles.cardsContainer} ref={cardsContainerRef}>
          {experienceCards.map((card,index)=>
          <ExperienceCard 
          className={styles.card}
          key={index} 
          ref={(el)=>cardsRef.current[index]=el} 
          experienceTitle={card.experienceTitle} 
          organization={card.organization} 
          organizationLogo={card.organizationLogo}
          cardPoints={card.cardPoints} 
          date={card.date}>
          </ExperienceCard>
        )}
        </div>

      </div>
    </section>
  )


  
}

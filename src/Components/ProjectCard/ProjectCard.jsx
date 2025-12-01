
import { useState, useEffect } from "react"
import styles from "./ProjectCard.module.css"

function ProjectCard(props){

    const [index, setIndex] = useState(0)
    const next = () => setIndex((index + 1) % props.images.length)
    const prev = () => setIndex((index - 1 + props.images.length) % props.images.length)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % props.images.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])



    return(
        <div>
            <div className={styles.projectCard}>

                <div className={styles.sliderContainer}>
                    <div className={styles.imagesContainer} style={{ transform: `translateX(-${index * 100}%)` }}>
                        {props.images.map((img, i) => (
                        <img key={i} src={img} className={styles.projectPicture} />
                        ))}
                    </div>

                    <span className={styles.prevArrow} onClick={prev}>&#10094;</span>
                    <span className={styles.nextArrow} onClick={next}>&#10095;</span>

                    <div className={styles.dotsContainer}>
                        {props.images.map((_, i) => (
                        <span
                            key={i}
                            className={`${styles.dot} ${index === i ? styles.activeDot : ""}`}
                            onClick={() => setIndex(i)}
                        ></span>
                        ))}
                    </div>
                    </div>
                
                <div className={styles.projectDescriptionContainer}>
                    <div className={`${styles.descriptionTitle} title`}>{props.projectTitle}</div>
                    <p className="project-description">{props.projectDecription}</p>
                    <div className={styles.technologiesUsedContainer}>
                        {
                            props.technologiesUsed.map((technology,index)=><div key={index}>{technology}</div>)
                        }
                    </div>
                    <div className={styles.projectCardBtnsContainer}>
                        <a className={styles.viewSourceCodeBtn}>
                            <span>source code</span> 
                            <i className="fa-brands fa-github fa-lg"></i>
                        </a>
                        <a className={styles.viewProjectBtn}>
                            <span>live demo</span> 
                            <i className="fa-solid fa-link"></i>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
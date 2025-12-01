import styles from "./Resume.module.css"
import resumePDF from "../../assets/resume.pdf"

export default function Resume() {
    return (
    <div className={styles.resumePageContainer}>
        <h2 className="sectionHeading">MY RESUME</h2>
        <div className={styles.resumeContainer}>
            <iframe className={styles.resumePDF} src={resumePDF}></iframe>
        </div>
         
    </div>
    )
}
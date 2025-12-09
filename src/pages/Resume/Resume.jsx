import styles from "./Resume.module.css"
import resumePDF from "../../assets/resume.pdf"
import SectionHeading from "../../Components/SectionHeading/SectionHeading"

export default function Resume() {
    return (
    <div className={styles.resumePageContainer}>
        <SectionHeading headingText="MY RESUME"/>
        <div className={styles.resumeContainer}>
            <iframe className={styles.resumePDF} src={resumePDF}></iframe>
        </div>
         
    </div>
    )
}
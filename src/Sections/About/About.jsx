import styles from "./About.module.css"
import profilePic from "../../assets/profilePic.jpg"

function About(){
    return(
    <section className={styles.aboutSection} id="about">
        <h2 className="sectionHeading">ABOUT ME</h2>
        <div className={styles.aboutSectionContentContainer}>
          <img className ={styles.profilePicture} src={profilePic}/>
          <div >
            <p>I am Uchendu Uchenna, a passionate Frontend Developer based in Port Harcourt, Nigeria. I build interactive and responsive websites that focus on clean design, great user experience, and efficient performance. My work is driven by curiosity, attention to detail, and a strong desire to create digital products that are both beautiful and functional.</p>
            <p>I’m currently seeking internship opportunities and freelance projects where I can apply my skills, grow through real-world experience, and collaborate with developers who inspire me. I enjoy learning new tools, tackling challenges that improve my problem-solving ability, and contributing to projects that have meaningful impact. If you’re looking for a dedicated, eager-to-learn developer who brings both technical ability and genuine enthusiasm to the table, let’s connect.</p>
            <div className={styles.locationContainer}>
              <i className="fa-solid fa-location-dot"></i>
              <span>port Harcourt, Nigeria.</span>
            </div>

          </div>
        </div>
      </section>
    )
}

export default About
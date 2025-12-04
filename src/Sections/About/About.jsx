import styles from "./About.module.css";
import profilePic from "../../assets/profilePic.jpg";

function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <h2 className="sectionHeading">ABOUT ME</h2>

      <div className={styles.aboutSectionContentContainer}>
        <img className={styles.profilePicture} src={profilePic} alt="Profile" />

        <div>
          <p>
            I am Uchendu Uchenna, a passionate developer who enjoys turning ideas into
            smooth, visually polished interfaces that work across all devices. My work is
            driven by curiosity, attention to detail, and a strong desire to create
            digital products that are both beautiful and functional.
          </p>


          <p>
            I’m currently seeking internship opportunities and freelance
            projects where I can apply my skills, grow through real-world
            experience, and collaborate with developers who inspire me. I enjoy
            learning new tools, tackling challenges that improve my
            problem-solving ability, and contributing to projects that have
            meaningful impact. If you’re looking for a dedicated,
            eager-to-learn developer who brings both technical ability and
            genuine enthusiasm to the table, let’s connect.
          </p>
          <div className={styles.locationContainer}>
          <div className={styles.locationIconWrapper}>
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

          </div>
          <span>Port Harcourt, Nigeria.</span>
    </div>



        </div>
      </div>
    </section>
  );
}

export default About;

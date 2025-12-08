import styles from "./Hero.module.css"
import {Link} from "react-router-dom"

function Hero(){
    return(
        <section className={styles.heroSection} id="home">
            
            <div>
                <h1 className={styles.name}>UCHENDU UCHENNA</h1>
                <div className={styles.briefIntro}>Front-end Web Developer | Computer Science Student.</div>

                <div className={styles.buttonsContainer}>
                    <button className={`${styles.button} ${styles.hireMeBtn}`}>
                        <i class="fa-solid fa-briefcase"></i>
                        Hire Me
                    </button>
                    <Link to="/Resume" className="link">
                        <button className={`${styles.button} ${styles.resumeBtn}`}>
                            <i className="fa-regular fa-file-lines"></i>
                            Résumé
                        </button>
                    </Link>

                </div>

            </div>

        </section>
    )
}

export default Hero
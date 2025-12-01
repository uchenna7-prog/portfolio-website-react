import styles from "./Hero.module.css"
import {Link} from "react-router-dom"

function Hero(){
    return(
        <section className={styles.heroSection} id="home">
            <div>
                <h1 className={styles.name}>UCHENDU UCHENNA</h1>
                <div className={styles.briefIntro}>Front-end Web Developer | Computer Science Student.</div>

                <div className={styles.buttonsContainer}>
                    <button className={`${styles.button} ${styles.hireMeBtn}`}>Hire Me</button>
                    <Link to="/Resume">
                        <button className={`${styles.button} ${styles.resumeBtn}`}>Résumé</button>
                    </Link>
                    

                </div>

            </div>


        </section>
    )
}

export default Hero
import styles from "./Hero.module.css"

function Hero(){
    return(
        <section className={styles.heroSection} id="home">
            <div>
                <h1 className="name">UCHENDU UCHENNA</h1>
                <div className={styles.briefIntro}>Front-end Web Developer | Computer Science Student.</div>

                <div className={styles.buttonsContainer}>
                    <button className={`${styles.button} ${styles.hireMeBtn}`}>Hire Me</button>
                    <button className={`${styles.button} ${styles.resumeBtn}`}>Résumé</button>

                </div>

            </div>


        </section>
    )
}

export default Hero
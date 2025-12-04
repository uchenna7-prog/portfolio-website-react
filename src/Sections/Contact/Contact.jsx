import styles from "./Contact.module.css"

function Contact(){

    return(
        <section className={styles.contactSection} id="contact">
            <h2 className="sectionHeading">LET'S CONNECT</h2>
            <div className={styles.contactContainer}>
                <form className={styles.form}>
                    <div>
                        <div className={`${styles.formRow1Container} ${styles.formRowContainer}`}> 
                            <input className={styles.formInput} placeholder="Your Name"></input>
                            <input className={styles.formInput} placeholder="Your Email" type="email"></input>
                        </div>
                        <input placeholder="Email Subject" className={`${styles.formRowContainer} ${styles.formInput}`}></input>
                    
                        <textarea className={`${styles.formInput} ${styles.formRowContainer}`} placeholder="Your Message" rows={20}></textarea>
                        <button className={`${styles.formButton} ${styles.formRowContainer}`}>
                            <span className={styles.sendBtnText}><i className="fa fa-paper-plane" aria-hidden="true"></i>Send Message</span>
                        </button>
                    </div>
                </form>
                <div>
                    <h2 className={`${styles.secondDivFirstHeading} title`}>Get In Touch</h2>
                    <div className={styles.ContactDetailContainer}>
                        <i className="material-icons">mail</i>
                        <div>
                            <div>Email</div>
                            <a>uchenduuchenna7@gmail.com</a>
                        </div>
                        <span className="material-icons">content_copy</span>
                    </div>
                    <div className={styles.ContactDetailContainer}>
                        <i className="material-icons">phone</i>
                        <div>
                            <div>Phone</div>
                            <a>+234 - 9079116980</a>
                        </div>
                        <span className="material-icons">content_copy</span>
                    </div>
                    
                    <div className={styles.ContactDetailContainer}>
                        <i className="material-icons">location_on</i>
                        <div>
                            <div>Location</div>
                            <a>Port Harcourt, Nigeria.</a>
                        </div>
                    </div>
                    <h2 className="title">Socials</h2>
                    <span className={styles.socialIconsContainer}>
                        <a className={styles.socialIcon} href="https://www.linkedin.com/in/uchenna-uchendu-b2a0a8307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
                        <a className={styles.socialIcon} href="https://github.com/uchenna7-prog"><i className="fa-brands fa-github fa-lg"></i></a>
                        <a className={styles.socialIcon} href="https://x.com/?utm_source=homescreen&utm_medium=shortcut"><i className="fa-brands fa-x-twitter fa-lg"></i></a>
                        <a className={styles.socialIcon} href="https://www.facebook.com/uchenna.uchendu.383796"><i className="fa-brands fa-facebook fa-lg"></i></a>
                        <a className={styles.socialIcon} href="mailto:uchenduuchenna7@gmail.com"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></a>
                    </span>

                </div>
            </div>
        </section>
    )

}

export default Contact
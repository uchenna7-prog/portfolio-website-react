import styles from "./Footer.module.css"
import logo from "/logo.png"
import logo2 from "/logo2.png"
import { useTheme } from "../../Context/ThemeContext"   


function Footer(){
    const {theme} = useTheme()
    return(

        <footer className={styles.footerSection}>
            <div>
                <div className={styles.nameContainer}>
                   <img src={theme==="light-mode"? logo : logo2} className={styles.logo}></img>
                </div>
                
                <div className={styles.socialIconsContainer}>
                    <a className={styles.socialIcon} href="https://www.linkedin.com/in/uchenna-uchendu-b2a0a8307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app"><i className="fa-brands fa-linkedin-in fa-lg"></i></a>
                    <a className={styles.socialIcon} href="https://github.com/uchenna7-prog"><i className="fa-brands fa-github fa-lg"></i></a>
                    <a className={styles.socialIcon} href="mailto:uchenduuchenna7@gmail.com"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></a>
                </div>
            </div>
            <hr className={styles.horizontalRule}/>
            <p className={styles.copyRightContainer}>
                &copy; 2024 uchendu uchenna. All rights reserved.
            </p>
           
        </footer>
    )
}

export default Footer
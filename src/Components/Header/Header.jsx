import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [theme,toogleTheme] = useState("light-mode")
    const changeTheme = ()=>{
      document.documentElement.getAttribute("data-theme") === "light-mode" ? document.documentElement.setAttribute("data-theme","dark-mode"):document.documentElement.setAttribute("data-theme","light-mode")
      toogleTheme(document.documentElement.getAttribute("data-theme"))
    }
  return (
    <header className={styles.headerSection}>
      <div className={styles.headerContainer}>
        <span className={`${styles.logo} material-icons`}>home</span>
        <nav className={styles.navLinksContainer}>
          <a href="#about" className={styles.navLink}>About</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#skills" className={styles.navLink}>Skills</a>
          <a href="#projects" className={styles.navLink}>Projects</a>
          <a href="#experience" className={styles.navLink}>Experience</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
    
          <span className={`${styles.toogleThemeBtn} material-icons`} onClick={()=>changeTheme()}>dark_mode</span>
          <span className={`${styles.menuBtn} material-icons`}>menu</span>
        </nav>
      </div>
    </header>

  );
}

export default Header;
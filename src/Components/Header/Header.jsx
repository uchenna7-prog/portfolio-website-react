import styles from "./Header.module.css";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";


function Header() {
    const mobileMenuOptions = ["About","Services","Skills","Projects","Experience","Contact"]
    const [theme,toggleTheme] = useState("light-mode")
    const [menuOpen,setMenuOpen] = useState(false)
    const mobileMenuRef = useRef(null);
    const mobileMenuBtnRef = useRef(null);
    const themeButtonRef = useRef(null);
    const mobileMenuBtns = useRef([]);
   

    const openMenu = ()=>{
      if(!menuOpen){
        mobileMenuRef.current.classList.add(styles.activeMobileMenu)
        mobileMenuBtnRef.current.textContent = "close"
        setMenuOpen(true)
      }
      else{
        mobileMenuRef.current.classList.remove(styles.activeMobileMenu)
        mobileMenuBtnRef.current.textContent = "menu"
        setMenuOpen(false)
      }
    }
    const changeTheme = ()=>{
      let dataTheme = document.documentElement.getAttribute("data-theme")
      if(dataTheme ==="light-mode"){
        document.documentElement.setAttribute("data-theme","dark-mode")
        themeButtonRef.current.textContent = "light_mode"
      }
      else{
        document.documentElement.setAttribute("data-theme","light-mode")
        themeButtonRef.current.textContent = "dark_mode"
      }
      toggleTheme(document.documentElement.getAttribute("data-theme"))
    }
  return (
    <>
      <div className={styles.mobileMenu} ref={mobileMenuRef}>
        <div className={styles.menuOptionsContainer}>
          {mobileMenuOptions.map(
            (option,index)=><a key={index} className={styles.mobileMenuOption} href={"#" + option.toLowerCase()}>{option}</a>
          )}
        </div>
      </div>

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
            <span className={`${styles.toggleThemeBtn} material-icons`} onClick={()=>changeTheme()} ref={themeButtonRef}>dark_mode</span>
            <span className={`${styles.menuBtn} material-icons`} onClick={()=>openMenu()} ref={mobileMenuBtnRef} >menu</span>
          </nav>

        </div>
      </header>
    </>

   
  );
}

export default Header;
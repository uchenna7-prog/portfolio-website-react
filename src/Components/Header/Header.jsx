import { useState, useEffect } from "react";
import { useTheme } from "../../Context/ThemeContext";
import styles from "./Header.module.css";
import logo1 from "/logo1.png"
import logo2 from "/logo2.png"

function Header() {

  const {theme,toggleTheme} = useTheme()

  const navItems = ["About" ,"Services" ,"Skills","Projects" ,"Experience","Contact" ];

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <>
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.activeMobileMenu : ""
        }`}
      >
        <div className={styles.menuOptionsContainer}>
          {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className={styles.mobileMenuOption}
                onClick={toggleMenu}
              >
                {item}
              </a>
          ))}
        </div>
      </div>

      <header className={styles.headerSection}>
        <div className={styles.headerContainer}>

          <div className={styles.logoContainer}>
            <img src={theme ==="light-mode" ? logo1: logo2} className={styles.logo} alt="logo"></img>
          </div>
      
          <nav className={styles.navLinksContainer}>
            {navItems.map((item, index) => (
              <a
                href={`#${item}`}
                className={styles.navLink}
                key={index}
              >
                {item}
              </a>
            ))}

            <span
              className={`${styles.toggleThemeBtn} material-icons`}
              onClick={toggleTheme}
            >
              {theme === "light-mode" ? "dark_mode" : "light_mode"}
            </span>

            <span
              className={`${styles.menuBtn} material-icons`}
              onClick={toggleMenu}
            >
              {menuOpen ? "close" : "menu"}
            </span>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

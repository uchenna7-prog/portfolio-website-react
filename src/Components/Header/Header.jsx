import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import logo from "/logo.png"
import logo2 from "/logo2.png"
import { useTheme } from "../../Context/ThemeContext";
function Header() {

  const {theme,toggleTheme} = useTheme()

  const navItems = [
    { label: "About", icon: "fa-solid fa-user" },
    { label: "Services", icon: "fa-solid fa-briefcase" },
    { label: "Skills", icon: "fa-solid fa-code" },
    { label: "Projects", icon: "fa-solid fa-diagram-project" },
    { label: "Experience", icon: "fa-solid fa-clock-rotate-left" },
    { label: "Contact", icon: "fa-solid fa-envelope" },
  ];


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
            <span className={styles.mobileMenuOptionContainer} key={index}>
              <i className={item.icon}></i>
              <a
                href={`#${item.label.toLowerCase()}`}
                className={styles.mobileMenuOption}
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </span>
          ))}
        </div>
      </div>

      <header className={styles.headerSection}>
        <div className={styles.headerContainer}>

          <img src={theme ==="light-mode" ? logo: logo2} className={styles.logo} alt="logo"></img>

          <nav className={styles.navLinksContainer}>
            {navItems.map((item, i) => (
              <a
                href={`#${item.label.toLowerCase()}`}
                className={styles.navLink}
                key={i}
              >
                {item.label}
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

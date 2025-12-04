import styles from "./Header.module.css";
import { useState } from "react";

function Header() {
  const navItems = [
    { label: "About", icon: "fa-solid fa-user" },
    { label: "Services", icon: "fa-solid fa-briefcase" },
    { label: "Skills", icon: "fa-solid fa-code" },
    { label: "Projects", icon: "fa-solid fa-diagram-project" },
    { label: "Experience", icon: "fa-solid fa-clock-rotate-left" },
    { label: "Contact", icon: "fa-solid fa-envelope" },
  ];

  const [theme, setTheme] = useState("light-mode");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <div
       className={`${styles.mobileMenu} ${menuOpen ? styles.activeMobileMenu : ""}`}
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
          <span className={`${styles.logo} material-icons`}>home</span>

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

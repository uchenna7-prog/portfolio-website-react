import styles from "./Services.module.css";

function Services() {
  return (
    <section className={styles.servicesSection}>
      <h1 className="sectionHeading">SERVICES</h1>

      <div className={styles.cardsWrapper}>

        <div className={styles.serviceCard}>
          <h3 className={`${styles.cardTitle} title`}>
            <i className="fa fa-code" aria-hidden="true"></i> FRONTEND
          </h3>
          <p>
            I build modern, responsive, and visually engaging web interfaces
            that provide seamless user experiences. Using HTML, CSS, and
            JavaScript frameworks like React and Next.js, I transform designs
            into fast, interactive websites.
          </p>
        </div>

       
        <div className={styles.serviceCard}>
          <h3 className={`${styles.cardTitle} title`}>
            <i className="fa fa-laptop" aria-hidden="true"></i> FREELANCE
          </h3>
          <p>
            I offer freelance web development services, delivering high-quality,
            reliable solutions tailored to clients’ needs. I combine creativity
            with technical expertise to create websites that are both functional
            and aesthetically pleasing.
          </p>
        </div>

      
        <div className={styles.serviceCard}>
          <h3 className={`${styles.cardTitle} title`}>
            <i className="fa fa-graduation-cap" aria-hidden="true"></i> INTERNSHIP
          </h3>
          <p>
            I am eager to join a team as an intern to contribute to real-world
            projects. I bring a strong foundation in frontend development and a
            passion for learning, collaborating to build innovative and functional
            web solutions.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Services;

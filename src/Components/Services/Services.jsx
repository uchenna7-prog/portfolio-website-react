import styles from "./Services.module.css";
import ServiceCard from "./ServicesCard";


function Services() {
  return (
    <section className={styles.servicesSection} id="services" >
      <h1 className="sectionHeading">SERVICES</h1>
      
      <div className={styles.cardsContainer}>
        <ServiceCard service="FRONTEND" iconClass="fa-code" serviceDescription="I build modern, responsive, and visually engaging web interfaces that provide seamless user experiences. Using HTML, CSS, and JavaScript frameworks like React and Next.js, I transform designs into fast, interactive websites."/>
        <ServiceCard service="FREELANCE" iconClass="fa-laptop" serviceDescription="I offer freelance web development services, delivering high-quality, reliable solutions tailored to clients’ needs. I combine creativity with technical expertise to create websites that are both functional and aesthetically pleasing."/>
        <ServiceCard service="INTERNSHIP" iconClass="fa-graduation-cap" serviceDescription="I am eager to join a team as an intern to contribute to real-world projects. I bring a strong foundation in frontend development and a passion for learning, collaborating to build innovative and functional web solutions."/>
      </div>
      
    </section>
  );
}

export default Services;

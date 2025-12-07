import styles from "./ServiceCard.module.css";

function ServiceCard({ service, iconClass, serviceDescription }) {
  return (
    <div className={styles.serviceCard}>
      <h3 className={`${styles.cardTitle} title`}>
        <i className={`fa ${iconClass}`} aria-hidden="true"></i> {service}
      </h3>
      <p>{serviceDescription}</p>
    </div>
  );
}

export default ServiceCard;

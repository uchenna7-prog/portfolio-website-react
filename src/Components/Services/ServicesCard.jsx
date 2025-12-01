import styles from "./ServiceCard.module.css"

function ServiceCard(props){
    return(
        <div className={styles.serviceCard}>
            <h3 className={`${styles.cardTitle} title`}>
            <i className={`fa ${props.iconClass}`} aria-hidden="true"></i> {props.service}
            </h3>
            <p>{props.serviceDescription}</p>
        </div>
    )
}

export default ServiceCard
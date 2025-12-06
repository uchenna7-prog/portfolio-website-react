import styles from "./ExperienceCard.module.css";
import { forwardRef } from "react";

const ExperienceCard = forwardRef((props, ref) => {
    const cardPoints = props.cardPoints;

    return (
        <div className={styles.card} ref={ref}>
            <h2 className="title">{props.experienceTitle}</h2>

            <div className={styles.organizationAndDateContainer}>
                <div className={styles.organizationContainer}>
                    <img src={props.organizationLogo} />
                    <div className={styles.organization}>{props.organization}</div>
                </div>

                <div className={styles.date}>{props.date}</div>
            </div>

            <ul>
                {cardPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
});

export default ExperienceCard;

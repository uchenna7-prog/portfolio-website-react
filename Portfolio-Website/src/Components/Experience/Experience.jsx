import React, { useEffect, useRef } from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  const timelineRef = useRef(null);
  const progressRef = useRef(null);
  const movingRef = useRef(null);

  const circles = useRef([]);
  const items = useRef([]);

  const setCircleRef = (el, idx) => (circles.current[idx] = el);
  const setItemRef = (el, idx) => (items.current[idx] = el);

  const updateTimeline = () => {
    if (!timelineRef.current || !progressRef.current || !movingRef.current) return;
    const timelineRect = timelineRef.current.getBoundingClientRect();
    const timelineHeight = timelineRef.current.offsetHeight;
    const progressHeight = Math.min(Math.max(window.innerHeight / 2 - timelineRect.top, 0), timelineHeight);

    progressRef.current.style.height = progressHeight + "px";
    movingRef.current.style.top = progressHeight + "px";

    // position circles
    items.current.forEach((item, i) => {
      if (!item || !circles.current[i]) return;
      const itemRect = item.getBoundingClientRect();
      const top = itemRect.top - timelineRect.top;
      circles.current[i].style.top = top + "px";

      // fill/unfill based on progress
      if (progressHeight > top) {
        circles.current[i].classList.add(styles.filled);
      } else {
        circles.current[i].classList.remove(styles.filled);
      }
    });
  };

  useEffect(() => {
    updateTimeline();
    window.addEventListener("scroll", updateTimeline);
    window.addEventListener("resize", updateTimeline);
    return () => {
      window.removeEventListener("scroll", updateTimeline);
      window.removeEventListener("resize", updateTimeline);
    };
  }, []);

  return (
    <section className={styles.experienceSection} id="experience">
      <h2 className="sectionHeading">EXPERIENCE</h2>
      <div className={styles.timelineContainer} ref={timelineRef}>
        <div className={styles.tLine1}></div>
        <div className={styles.tLine2}></div>
        <div className={styles.progressLine} ref={progressRef}></div>
        <div className={styles.movingCircle} ref={movingRef}></div>

        {[0, 1, 2].map((_, i) => (
          <div key={i} className={styles.tCircle} ref={(el) => setCircleRef(el, i)}></div>
        ))}

        <div className={styles.itemsContainer}>
          <div className={styles.item} ref={(el) => setItemRef(el, 0)}>
            <h2 className="title">Freelance Developer</h2>
            <div className={styles.organizationAndDateContainer}>
              <div className={styles.organization}>Frontend Developer</div>
              <div className={styles.date}>Jan 2025 - present</div>
            </div>
            <ul>
              <li>Collaborate with clients to design and develop custom web applications.</li>
              <li>Provide end-to-end solutions, from planning and coding to testing and deployment.</li>
              <li>Ensure efficient performance and a modern user experience.</li>
              <li>Build responsive designs optimized for both desktop and mobile devices.</li>
              <li>Continuously learn and apply new technologies to improve project quality.</li>
            </ul>
          </div>

          <div className={styles.item} ref={(el) => setItemRef(el, 1)}>
            <h2 className="title">Education</h2>
            <div className={styles.organizationAndDateContainer}>
              <div className={styles.organization}>University Of Port Harcourt</div>
              <div className={styles.date}>Oct 2024 - present</div>
            </div>
            <ul>
              <li>Studying the principles of computing, algorithms, artificial intelligence, and system design.</li>
              <li>Gaining hands on experience by building real-world projects that apply theoretical knowledge to practical problems.</li>
            </ul>
          </div>

          <div className={styles.item} ref={(el) => setItemRef(el, 2)}>
            <h2 className="title">Another Role</h2>
            <div className={styles.organizationAndDateContainer}>
              <div className={styles.organization}>Frontend Developer</div>
              <div className={styles.date}>Jan 2025 - present</div>
            </div>
            <ul>
              <li>Collaborate with clients to design and develop custom web applications.</li>
              <li>Provide end-to-end solutions, from planning and coding to testing and deployment.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


import styles from "../styles/FocusMarquee.module.css";

const focusAreas = [
  "Full-Stack Development",
  "Product Design",
  "Creative Problem Solving",
  "Technical Leadership",
  "Frontend Engineering",
  "Teamwork",
  "Backend Development",
  "Mentorship",
];

function FocusWords() {
  return (
    <div className={styles.wordGroup}>
      {focusAreas.map((area) => (
        <span className={styles.wordItem} key={area}>
          <span>{area}</span>
          <span className={styles.separator} aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );
}

export default function FocusMarquee() {
  return (
    <div className={styles.focusStrip}>
      <div className={styles.focusLabel}>
        <span className={styles.labelStar} aria-hidden="true">
          ✦
        </span>
        <span>FOCUS AREAS</span>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          <FocusWords />

          <div aria-hidden="true">
            <FocusWords />
          </div>
        </div>
      </div>
    </div>
  );
}

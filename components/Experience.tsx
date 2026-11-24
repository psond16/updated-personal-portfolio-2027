import styles from "../styles/Experience.module.css";

const experiences = [
  {
    id: "lit-lab",
    date: "MAY – JUN 2026",
    title: "Software Engineer Sprintern",
    organization: "LIT Lab · Break Through Tech",
    description:
      "Led a six-person team and built frontend features for a web application.",
    highlighted: false,
  },
  {
    id: "wics",
    date: "2026 – PRESENT",
    title: "Development Lead",
    organization: "Women in Computer Science · UIC",
    description:
      "Co-led Merge website development and mentored students in web development.",
    highlighted: true,
  },
  {
    id: "service-desk",
    date: "2026 – PRESENT",
    title: "Service Desk Consultant",
    organization: "UIC Technology Solutions",
    description:
      "Troubleshoot technical issues and support campus users.",
    highlighted: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      {/* SECTION HEADER */}

      <div className={styles.headingArea}>
        <div className={styles.headingLeft}>
          <p className={styles.eyebrow}>
            EXPERIENCE
          </p>

          <h2 className={styles.title}>
            Experience.
          </h2>
        </div>

        <div className={styles.headingRight}>
          <span
            className={styles.headingDivider}
            aria-hidden="true"
          />

          <p>
            A TIMELINE OF MY
            <br />
            ENGINEERING JOURNEY
          </p>
        </div>
      </div>

      {/* EXPERIENCE TIMELINE */}

      <div className={styles.timeline}>
        {experiences.map((experience) => (
          <article
            key={experience.id}
            className={`${styles.entry} ${
              experience.highlighted ? styles.highlighted : ""
            }`}
          >
            <div className={styles.timelineMarker}>
              <span className={styles.star} aria-hidden="true">
                ✦
              </span>
            </div>

            <p className={styles.date}>
              {experience.date}
            </p>

            <div className={styles.details}>
              <h3 className={styles.role}>
                {experience.title}
              </h3>

              <p className={styles.organization}>
                {experience.organization}
              </p>

              <p className={styles.description}>
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

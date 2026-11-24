import styles from "../styles/About.module.css";

import Image from "next/image";

const interests = [
  "Building products",
  "Design",
  "Travel",
  "Photography",
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* SECTION HEADER */}

      <div className={styles.headingArea}>
        <div className={styles.headingLeft}>
          <p className={styles.eyebrow}>
            GET TO KNOW ME
          </p>

          <h2 className={styles.title}>
            About Me.
          </h2>
        </div>

        <div className={styles.headingRight}>
          <span className={styles.headingDivider} />

          <p>
            A LITTLE MORE
            <br />
            ABOUT ME
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className={styles.mainContent}>

        <div className={styles.illustration}>
            <div className={styles.sageShape} aria-hidden="true" />
            <div className={styles.pinkShape} aria-hidden="true" />

            <div className={styles.photoFrame}>
                <Image
                src="/images/aboutMe3.png"
                alt="Portrait of Parineet Sond"
                fill
                sizes="(max-width: 760px) 280px, 300px"
                className={styles.photo}
                />
            </div>
        </div>
 

        {/* INTRODUCTION */}

        <div className={styles.introduction}>
          <p>
            I&apos;m a Computer Science and Honors student
            at UIC who enjoys building software,
            learning through debugging, and collaborating
            with people who love to create.
          </p>

          <div className={styles.introDivider} />
        </div>
      </div>

      {/* BOTTOM CONTENT */}

      <div className={styles.bottomContent}>
        <div className={styles.interests}>
          <h3>A FEW THINGS I LOVE</h3>

          <div className={styles.tags}>
            {interests.map((interest) => (
              <span key={interest} className={styles.tag}>
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.approach}>
          <h3>MY APPROACH</h3>

          <p>
            I like taking ideas from concept to code,
            working across frontend and backend, and
            improving them through thoughtful iteration
            and feedback.
          </p>
        </div>
      </div>
    </section>
  );
}

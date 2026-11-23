import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  console.log("Hero styles:", styles);
  console.log("Photo frame class:", styles.photoFrame);
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            COMPUTER SCIENCE @ UIC
          </p>

          <h1 className={styles.title}>
            Hi, I&apos;m
            <br />
            Parineet.
          </h1>

          <p className={styles.description}>
            I&apos;m a Computer Science and Honors student @ UIC who
            enjoys building software, solving challenging problems,
            and bringing ideas to life through code.
          </p>

          <div className={styles.actions}>
            <Link
              href="#projects"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="#contact"
              className={`${styles.button} ${styles.buttonOutline}`}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.sageBack} aria-hidden="true" />
          <div className={styles.pinkBack} aria-hidden="true" />

          <div className={styles.photoFrame} style={{ position: "absolute" }}>
            <Image
              src="/images/aboutMe3.png"
              alt="Portrait of Parineet Sond"
              fill
              priority
              sizes="(max-width: 900px) 85vw, 450px"
              className={styles.photo}
            />
          </div>

          <div className={styles.accentStar} aria-hidden="true">
            ✳
          </div>

          <div className={styles.currentlyCard}>
            <p className={styles.currentlyLabel}>
              CURRENTLY
            </p>
            <p>CS + Honors @ UIC</p>
            <p>WiCS Development Lead</p>
          </div>
        </div>
      </div>

      <div className={styles.focusStrip}>
        <div className={styles.focusLabel}>
          <span aria-hidden="true">✦</span>
          <span>FOCUS AREAS</span>
        </div>

        <p>
          Full-Stack Development
          <span className={styles.focusDot}>·</span>
          Engineering Leadership
          <span className={styles.focusDot}>·</span>
          Mentorship
        </p>
      </div>
      
    </section>
    
  );
}

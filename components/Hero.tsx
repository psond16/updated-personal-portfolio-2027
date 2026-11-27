import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Hero.module.css";
import FocusMarquee from "./FocusMarquee";

export default function Hero() {

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
            I've led a <strong>team of 10+</strong>, co-led website development, and built features across <span className={styles.squigglyUnderline}>frontend and backend projects</span>. I learn quickly, take ownership of challenges, and enjoy bringing people together to turn <span className={styles.handCircle}>ambitious</span>ideas into working products.
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
              href="/#contact"
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

      <FocusMarquee />
      
    </section>
    
  );
}

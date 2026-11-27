
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.shell}>
      <div className={styles.panel}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

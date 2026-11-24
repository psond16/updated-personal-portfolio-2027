import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";

import styles from "../styles/page.module.css";


export default function Home() {
  return (
    <main className={styles.shell}>
      <div className={styles.panel}>
        <Header />
        <Hero />
        <About />
      </div>
    </main>
  );
}

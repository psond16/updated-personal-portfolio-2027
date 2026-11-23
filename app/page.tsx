import Header from "@/components/Header";
import Hero from "@/components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.shell}>
      <div className={styles.panel}>
        <Header />
        <Hero />
      </div>
    </main>
  );
}

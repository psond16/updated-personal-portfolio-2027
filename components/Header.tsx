import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        className={styles.logo}
        aria-label="Parineet Sond homepage"
      >
        <span className={styles.logoStar} aria-hidden="true">
          ✦
        </span>
        <span>Parineet Sond</span>
      </Link>

      <div className={styles.right}>
        <nav className={styles.nav} aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <span
          className={styles.resumeButton}
          title="Résumé coming soon"
        >
          Résumé ↗
        </span>
      </div>
    </header>
  );
}

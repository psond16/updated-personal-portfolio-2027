"use client";

import { useState } from "react";
import styles from "../styles/Projects.module.css";

type Category = "All" | "Full-stack" | "Web" | "Backend";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  categories: Category[];
  preview: "wics" | "chat" | "litlab" | "bakery";
};

const filters: Category[] = [
  "All",
  "Full-stack",
  "Web",
  "Backend",
];

const projects: Project[] = [
  {
    id: "wics-merge",
    title: "WiCS Merge",
    subtitle: "Merchandise experience · Astro",
    categories: ["Web"],
    preview: "wics",
  },
  {
    id: "gamified-chat",
    title: "Gamified Chat App",
    subtitle: "Django APIs · PostgreSQL",
    categories: ["Full-stack", "Backend"],
    preview: "chat",
  },
  {
    id: "lit-lab",
    title: "LIT Lab Application",
    subtitle: "Team-based web application",
    categories: ["Full-stack", "Web"],
    preview: "litlab",
  },
  {
    id: "sweet-t",
    title: "Sweet-T Bakery",
    subtitle: "Responsive client website",
    categories: ["Web"],
    preview: "bakery",
  },
];

function ProjectPreview({
  type,
}: {
  type: Project["preview"];
}) {
  switch (type) {
    case "wics":
      return (
        <div className={`${styles.preview} ${styles.wicsPreview}`}>
          <div className={styles.wicsWindow}>
            <span className={styles.wicsTitle}>
              WiCS MERCH
            </span>
            <div className={styles.wicsProduct}>
              WiCS
            </div>
          </div>
        </div>
      );

    case "chat":
      return (
        <div className={`${styles.preview} ${styles.chatPreview}`}>
          <div className={styles.chatCards}>
            {[1, 2, 3, 4].map((number) => (
              <div key={number} className={styles.chatCard}>
                {"{}"}
              </div>
            ))}
          </div>
        </div>
      );

    case "litlab":
      return (
        <div className={`${styles.preview} ${styles.litPreview}`}>
          <div className={styles.litWindow}>
            <span>LIT Lab / Planner</span>
            <div className={styles.litRule} />
          </div>
        </div>
      );

    case "bakery":
      return (
        <div className={`${styles.preview} ${styles.bakeryPreview}`}>
          <div className={styles.bakeryWindow}>
            Sweet-T
          </div>
        </div>
      );
  }
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const visibleProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(activeFilter)
        );

  return (
    <section id="projects" className={styles.projects}>
      {/* SECTION HEADING */}

      <div className={styles.headingArea}>
        <div className={styles.headingLeft}>
          <p className={styles.eyebrow}>
            SELECTED WORK
          </p>

          <h2 className={styles.title}>
            Projects.
          </h2>
        </div>

        <div className={styles.headingRight}>
          <span
            className={styles.headingDivider}
            aria-hidden="true"
          />

          <p>
            A SELECTION OF
            <br />
            WHAT I HAVE BUILT
          </p>
        </div>
      </div>

      {/* PROJECT FILTERS */}

      <div className={styles.filters} aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`${styles.filterButton} ${
              activeFilter === filter ? styles.activeFilter : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}

      <div className={styles.projectGrid}>
        {visibleProjects.map((project) => (
          <article
            className={styles.projectCard}
            key={project.id}
          >
            <ProjectPreview type={project.preview} />

            <div className={styles.projectInfo}>
              <div className={styles.projectText}>
                <h3 className={styles.projectTitle}>
                  {project.title}
                </h3>

                <p className={styles.projectSubtitle}>
                  {project.subtitle}
                </p>
              </div>

              <span
                className={styles.projectArrow}
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

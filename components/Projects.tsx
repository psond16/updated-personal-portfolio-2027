
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

type Category = "All" | "Full-stack" | "Web" | "Mobile";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  categories: Category[];
  images: string[];
};

const filters: Category[] = [
  "All",
  "Full-stack",
  "Web",
  "Mobile",
];

const projects: Project[] = [
  {
    id: "wics-shop",
    title: "WiCS Merch Shop",
    subtitle: "WiCS @ UIC",
    categories: ["Web"],
    images: [
      "/images/projects/wics-shop/wics1.png",
      "/images/projects/wics-shop/wics2.png",
      "/images/projects/wics-shop/wics3.png",
      "/images/projects/wics-shop/wics4.png",
    ],
  },
  {
    id: "sweet-t",
    title: "Sweet-T's Bakery - E-commerce Website",
    subtitle: "WiCS @ UIC",
    categories: ["Full-stack", "Web"],
    images: [
      "/images/projects/Sweet-T/st1.png",
      "/images/projects/Sweet-T/st2.png",
      "/images/projects/Sweet-T/st3.png",
    ],
  },
  {
    id: "lit-lab",
    title: "Social Robot's Reminder App",
    subtitle: "Break Through Tech X UIC",
    categories: ["Full-stack", "Mobile"],
    images: [
      "/images/projects/LIT-lab/lit1.PNG",
      "/images/projects/LIT-lab/lit2.PNG",
      "/images/projects/LIT-lab/lit3.PNG",
      "/images/projects/LIT-lab/lit4.PNG",
    ],
  },
  {
    id: "goat-together",
    title: "Goat Together - Goals Tracker App",
    subtitle: "Hackathon Project",
    categories: ["Full-stack", "Mobile"],
    images: [
      "/images/projects/goat-together/gt1.PNG",
      "/images/projects/goat-together/gt2.PNG",
      "/images/projects/goat-together/gt3.PNG",
      "/images/projects/goat-together/gt4.PNG",
    ],
  },
];

function ProjectSlideshow({ project }: { project: Project }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = viewportRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !isVisible ||
      isPaused ||
      project.images.length < 2
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((previous) =>
        (previous + 1) % project.images.length
      );
    }, 3500);

    return () => window.clearInterval(interval);
  }, [isVisible, isPaused, project.images.length]);

  return (
    <div ref={viewportRef} className={styles.preview}>
      <div
        className={styles.slideshowTrack}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {project.images.map((src, index) => (
          <div key={src} className={styles.slide}>
            <Image
              src={src}
              alt={`${project.title} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              className={styles.thumbnail}
            />
          </div>
        ))}
      </div>

      {project.images.length > 1 && (
        <button
          type="button"
          className={styles.pauseButton}
          onClick={() => setIsPaused((previous) => !previous)}
          aria-label={
            isPaused
              ? `Play ${project.title} slideshow`
              : `Pause ${project.title} slideshow`
          }
        >
          {isPaused ? "▶" : "Ⅱ"}
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState<Category>("All");

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

      <div
        className={styles.filters}
        aria-label="Filter projects"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`${styles.filterButton} ${
              activeFilter === filter
                ? styles.activeFilter
                : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}

      <div className={styles.projectGrid}>
        {visibleProjects.map((project) => {
          const isMobile =
            project.id === "lit-lab" ||
            project.id === "goat-together";

          return (
            <article
              key={project.id}
              className={`${styles.projectCard} ${
                isMobile
                  ? styles.phoneCard
                  : styles.desktopCard
              }`}
            >
              <ProjectSlideshow project={project} />

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
          );
        })}
      </div>
    </section>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import ProjectGallery from "@/components/ProjectGallery";

import styles from "../../../styles/ProjectDetail.module.css";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ProjectDetails = {
  title: string;
  subtitle: string;
  images: string[];
  techStack: string[];
  codeUrl?: string;
  liveUrl?: string;
  overview?: string;
  role?: string;
  challenges?: string;
  results?: string;
};

const projectDetails: Record<string, ProjectDetails> = {
  "wics-shop": {
    title: "WiCS Merch Shop",
    subtitle:
      "Merchandise platform for Women in Computer Science at UIC.",
    images: [
      "/images/projects/wics-shop/wics1.png",
      "/images/projects/wics-shop/wics2.png",
      "/images/projects/wics-shop/wics3.png",
      "/images/projects/wics-shop/wics4.png",
    ],
    techStack: ["Astro", "React", "TypeScript", "Git", "CSS"],
    codeUrl: "https://github.com/wics-uic/WiCS-Website",
    overview:
      "A merchandise experience integrated into the Women in Computer Science website at UIC, bringing together product browsing, cart management, and checkout.",
    role:
      "I co-led the project and was responsible for the frontend implementation, including product pages, the shopping cart, checkout, and the navigation cart indicator.",
    challenges:
      "Keeping cart information consistent between pages was a key challenge. I implemented temporary browser storage for cart persistence, along with dynamic quantities and checkout totals, while coordinating with the backend lead.",
    results:
      "Built connected frontend experiences for browsing products, managing a cart, and checking out, with persistent cart data and dynamically updated totals.",
  },

  "sweet-t": {
    title: "Sweet-T's Bakery",
    subtitle: "Responsive client website.",
    images: [
      "/images/projects/Sweet-T/st1.png",
      "/images/projects/Sweet-T/st2.png",
      "/images/projects/Sweet-T/st3.png",
    ],
    techStack: [],
  },

  "lit-lab": {
    title: "UIC LIT Lab Application",
    subtitle: "Team-based mobile application.",
    images: [
      "/images/projects/LIT-lab/lit1.png",
      "/images/projects/LIT-lab/lit2.png",
      "/images/projects/LIT-lab/lit3.png",
      "/images/projects/LIT-lab/lit4.png",
    ],
    techStack: [],
  },

  "goat-together": {
    title: "Goat Together Goals Tracker App",
    subtitle: "Mobile application for goal tracking.",
    images: [
      "/images/projects/goat-together/gt1.png",
      "/images/projects/goat-together/gt2.png",
      "/images/projects/goat-together/gt3.png",
      "/images/projects/goat-together/gt4.png",
    ],
    techStack: [],
  },
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  const isMobile =
    slug === "lit-lab" || slug === "goat-together";

  const sections = [
    { title: "Overview", content: project.overview },
    { title: "My Role", content: project.role },
    {
      title: "Challenges & Solutions",
      content: project.challenges,
    },
    { title: "Results", content: project.results },
  ].filter(
    (section): section is { title: string; content: string } =>
      Boolean(section.content)
  );

  return (
    <main className={styles.shell}>
      <div className={styles.panel}>
        <Header />

        <div className={styles.content}>
          <Link
            href="/#projects"
            className={styles.backLink}
          >
            ← All Projects
          </Link>

          <header className={styles.projectHeader}>
            <h1 className={styles.title}>
              {project.title}
            </h1>

            <p className={styles.subtitle}>
              {project.subtitle}
            </p>

            {(project.liveUrl || project.codeUrl) && (
              <div className={styles.actions}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                  >
                    Live Demo ↗
                  </a>
                )}

                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                  >
                    View Code ↗
                  </a>
                )}
              </div>
            )}
          </header>

          <ProjectGallery
            images={project.images}
            title={project.title}
            isMobile={isMobile}
          />

          {project.techStack.length > 0 && (
            <div className={styles.techRow}>
              <h2>TECH STACK</h2>

              <div className={styles.techTags}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className={styles.techTag}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {sections.length > 0 ? (
            <div className={styles.details}>
              {sections.map((section) => (
                <section
                  key={section.title}
                  className={styles.detailRow}
                >
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </section>
              ))}
            </div>
          ) : (
            <p className={styles.comingSoon}>
              More details about this project are coming soon.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

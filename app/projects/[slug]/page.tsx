
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
  overview: string;
  role?: string;
  challenges?: string;
  results?: string;
};

const projectDetails: Record<string, ProjectDetails> = {
  // --------------------------------------------------
  // PROJECT 1 — WICS MERCH SHOP
  // --------------------------------------------------

  "wics-shop": {
    title: "WiCS Merch Shop",
    subtitle:
      "An e-commerce experience for Women in Computer Science at UIC.",

    images: [
      "/images/projects/wics-shop/wics1.png",
      "/images/projects/wics-shop/wics2.png",
      "/images/projects/wics-shop/wics3.png",
      "/images/projects/wics-shop/wics4.png",
    ],

    techStack: ["Astro", "React", "Git", "CSS"],

    codeUrl: "https://github.com/wics-uic/WiCS-Website",

    overview:
      "WiCS Merch Shop is a merchandise experience integrated into the Women in Computer Science website at UIC. It brings together product browsing, shopping cart management, and checkout in a cohesive interface.",

    role:
      "As a co-lead on the project, I took responsibility for the frontend implementation. I worked on the product pages, shopping cart, checkout interface, and navigation cart indicator while coordinating with the backend lead.",

    challenges:
      "One important challenge was keeping cart information consistent across different pages. I used temporary browser storage to preserve cart contents and implemented dynamic cart quantities and checkout totals. These frontend decisions also had to be communicated clearly to the backend lead for integration.",

    results:
      "Implemented interconnected product, cart, and checkout experiences with persistent cart data, dynamic totals, and a consistent cart indicator across the website.",
  },

  // --------------------------------------------------
  // PROJECT 2 — SWEET-T'S BAKERY
  // --------------------------------------------------

  "sweet-t": {
    title: "Sweet-T's Bakery",
    subtitle:
      "A responsive website for a bakery, designed to present its brand and offerings.",

    images: [
      "/images/projects/Sweet-T/st1.png",
      "/images/projects/Sweet-T/st2.png",
      "/images/projects/Sweet-T/st3.png",
    ],

    techStack: [],

    overview:
      "Sweet-T's Bakery is a website project focused on creating a welcoming online presence for a bakery. The project brings the bakery's branding and content into a responsive web experience.",

    role:
      "The project involved developing a website experience with an emphasis on visual presentation, readable content, and layouts suited to different screen sizes.",

    challenges:
      "A key design consideration for a bakery website is balancing visual personality with usability. The interface needs to present the business clearly while remaining easy to navigate across devices.",

    results:
      "The project showcases a bakery-focused website interface, with screenshots demonstrating its visual design and page layouts.",
  },

  // --------------------------------------------------
  // PROJECT 3 — UIC LIT LAB APPLICATION
  // --------------------------------------------------

  "lit-lab": {
    title: "UIC LIT Lab Application",
    subtitle:
      "A mobile-oriented reminder and scheduling application developed during my software engineering sprinternship.",

    images: [
      "/images/projects/LIT-lab/lit1.png",
      "/images/projects/LIT-lab/lit2.png",
      "/images/projects/LIT-lab/lit3.png",
      "/images/projects/LIT-lab/lit4.png",
    ],

    techStack: [],

    overview:
      "During my Break Through Tech Software Engineering Sprinternship at LIT Lab, I worked with a six-person team on an application that supports creating and managing reminders. The interface included reminder scheduling, family member and location selection, and views for tracking activities over time.",

    role:
      "I served as Team Captain for our six-person team and contributed directly to frontend development. My work included building and coordinating application views for login, reminder creation, family member and location selection, date ranges, scheduling, calendar, and reminder status sections. I also communicated with mentors and program leads throughout the project.",

    challenges:
      "The application contained several connected user flows, making consistency across screens important. Coordinating multiple frontend features while leading a team also required clear communication, task organization, and careful integration of different parts of the interface.",

    results:
      "Contributed more than five frontend features and views while helping coordinate a six-person engineering team. The project strengthened my experience in frontend implementation, collaborative development, and technical leadership.",
  },

  // --------------------------------------------------
  // PROJECT 4 — GOAT TOGETHER
  // --------------------------------------------------

  "goat-together": {
    title: "Goat Together Goals Tracker App",
    subtitle:
      "A mobile application centered on tracking goals and personal progress.",

    images: [
      "/images/projects/goat-together/gt1.png",
      "/images/projects/goat-together/gt2.png",
      "/images/projects/goat-together/gt3.png",
      "/images/projects/goat-together/gt4.png",
    ],

    techStack: [],

    overview:
      "Goat Together is a mobile application project centered on goal tracking. Its purpose is to make goals and progress easier to organize and follow through a mobile-first experience.",

    role:
      "The project focuses on translating goal-tracking needs into a mobile application interface, with attention to how people view and interact with their goals on smaller screens.",

    challenges:
      "A central product design consideration is presenting goal information clearly within the limited space of a phone screen while keeping the experience easy to follow.",

    results:
      "The project showcases a mobile-oriented goal-tracking interface, with screenshots illustrating its application screens and visual direction.",
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
    {
      title: "Overview",
      content: project.overview,
    },
    {
      title: "My Role",
      content: project.role,
    },
    {
      title: "Challenges & Solutions",
      content: project.challenges,
    },
    {
      title: "Results",
      content: project.results,
    },
  ].filter(
    (section): section is {
      title: string;
      content: string;
    } => Boolean(section.content)
  );

  return (
    <main className={styles.shell}>
      <div className={styles.panel}>
        <Header />

        <div className={styles.content}>
          {/* BACK TO PROJECTS */}

          <Link
            href="/#projects"
            className={styles.backLink}
          >
            ← All Projects
          </Link>

          {/* PROJECT HEADER */}

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

          {/* SCREENSHOT GALLERY */}

          <ProjectGallery
            images={project.images}
            title={project.title}
            isMobile={isMobile}
          />

          {/* TECH STACK */}

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

          {/* PROJECT DETAILS */}

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
        </div>
      </div>
    </main>
  );
}

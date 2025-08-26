// src/pages/Projects.tsx
import React from "react";
import { Github } from "lucide-react"; // npm i lucide-react

// --- highlight utility (bolds key phrases like your resume) ---
function highlight(text: string, phrases: string[] = []) {
  if (!phrases.length) return text;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  return text.split(re).map((part, i) =>
    re.test(part) ? (
      <strong key={i} className="font-semibold text-slate-900">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

type Bullet = { text: string; highlights?: string[] };
type Project = {
  title: string;
  org: string;
  period: string;
  bullets: Bullet[];
  github?: string;
  accent?: "slate" | "indigo" | "emerald" | "rose" | "sky";
};

const PROJECTS: Project[] = [
  {
    title: "Software Technologies for Early Detection Screening Camp",
    org: "Karkinos Healthcare Private Limited",
    period: "02/2021 – 04/2021",
    bullets: [
      {
        text: "Developed a web-based system with backend APIs and pipelines to capture patient data during early detection camps.",
        highlights: ["web-based system", "backend APIs", "pipelines"],
      },
      {
        text: "Built dashboards and reporting modules to generate GP consultation reports, serving 200+ patients.",
        highlights: ["dashboards", "reporting modules", "200+ patients"],
      },
      {
        text: "Applied MVC architecture for modular design and maintainability.",
        highlights: ["MVC architecture"],
      },
    ],
    github: "https://github.com/yourname/early-detection-platform",
    accent: "emerald",
  },
  {
    title: "Prediction of Disease Symptoms using Decision Tree Algorithm",
    org: "San José State University (SJSU)",
    period: "01/2025 – 05/2025",
    bullets: [
      {
        text: "Engineered an end-to-end pipeline in Python using OOP design for data preprocessing, training, and evaluation.",
        highlights: ["end-to-end pipeline", "Python", "OOP"],
      },
      {
        text: "Optimized classification system with Decision Tree, achieving >80% accuracy on medical datasets.",
        highlights: ["Decision Tree", ">80% accuracy"],
      },
      {
        text: "Applied predictive analytics for identifying high-risk users, similar to churn scoring and CLV prediction.",
        highlights: ["predictive analytics", "high-risk users", "churn scoring", "CLV prediction"],
      },
    ],
    github: "https://github.com/lavanya-4/Prediction-of-disease-symptoms-based-on-decision-tree",
    accent: "indigo",
  },
  {
    title: "Customer Engagement Prediction (TikTok Data Analysis)",
    org: "San José State University (SJSU)",
    period: "01/2025 – 05/2025",
    bullets: [
      {
        text: "Developed a Python pipeline to ingest and preprocess 1,000+ TikTok videos for engagement analysis.",
        highlights: ["Python pipeline", "1,000+ TikTok videos"],
      },
      {
        text: "Engineered pipeline for regression models on 1,000+ videos, reducing preprocessing time by 20%.",
        highlights: ["regression models", "reducing preprocessing time by 20%"],
      },
      {
        text: "Created visualizations to present findings, showing that IT and Education content achieved 40% higher engagement across demographics.",
        highlights: ["visualizations", "40% higher engagement", "IT", "Education"],
      },
    ],
    github: "https://github.com/lavanya-4/Statistical-Analysis-of-Tiktok-Videos-Going-Viral",
    accent: "sky",
  },
  {
    title: "Online Student Feedback Form – Web Application",
    org: "JNTUK",
    period: "01/2019 – 05/2019",
    bullets: [
      {
        text: "Developed a web application using Java, JSP, and JDBC to enable students to provide feedback for tutors and institutions.",
        highlights: ["web application", "Java", "JSP", "JDBC"],
      },
      {
        text: "Designed and implemented database connectivity with JDBC for secure storage and retrieval of feedback.",
        highlights: ["database connectivity", "JDBC", "secure storage"],
      },
      {
        text: "Improved feedback collection efficiency by enabling real-time submissions compared to manual paper-based methods.",
        highlights: ["real-time submissions"],
      },
    ],
    github: "https://github.com/yourname/student-feedback-app",
    accent: "rose",
  },
];

export default function Projects() {
  return (
    <section className="space-y-8">
      {/* Header */}
      <header className="space-y-1">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Projects
        </h2>
        <p className="text-[15px] leading-7 text-slate-600">
        </p>
      </header>

      {/* Stack for readability on all screens */}
      <div className="space-y-6">
        {PROJECTS.map((p) => {
          const accentClasses =
            p.accent === "indigo"
              ? "bg-indigo-600"
              : p.accent === "emerald"
              ? "bg-emerald-600"
              : p.accent === "rose"
              ? "bg-rose-600"
              : p.accent === "sky"
              ? "bg-sky-600"
              : "bg-slate-600";

          return (
            <article
              key={p.title}
              className="group relative rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              {/* left accent bar */}
              <span
                className={`absolute left-0 top-0 h-full w-1.5 rounded-l-xl ${accentClasses} opacity-90 group-hover:w-2 transition-all`}
              />
              <div className="relative p-6 md:p-7 pl-7 md:pl-8">
                {/* meta row */}
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight text-slate-900">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm italic text-slate-700">
                      {p.org}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                    {p.period}
                  </span>
                </div>

                {/* bullets */}
                <ul className="mt-4 max-w-[68ch] list-disc space-y-2.5 pl-5 text-[15px] leading-7 text-slate-800">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{highlight(b.text, b.highlights)}</li>
                  ))}
                </ul>

                {/* footer */}
                <div className="mt-5 flex justify-end">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-300"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

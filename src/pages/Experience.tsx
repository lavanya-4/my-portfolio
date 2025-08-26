// src/pages/Experience.tsx
import React from "react";
import { Briefcase } from "lucide-react"; // icon for roles

function highlight(text: string, phrases: string[]) {
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

type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  highlights: string[];
  badge?: string;
  accent?: "indigo" | "emerald" | "rose";
};

const JOBS: Job[] = [
  {
    company: "Karkinos Healthcare Private Limited",
    role: "Software Developer",
    period: "05/2021 – 01/2024",
    location: "Bangalore, India",
    badge: "Full-time",
    bullets: [
      "Developed full-stack applications in Python (OOP, classes, modular design) using Flask and ReactJS.",
      "Applied the MVC (Model-View-Controller) architecture to ensure modular, maintainable, and testable code.",
      "Built and maintained scalable REST APIs and backend services integrated with SQL/NoSQL databases (Postgres, MySQL, MongoDB).",
      "Designed and deployed end-to-end data pipelines ensuring smooth data flow from ingestion to storage to visualization.",
      "Utilized Google Cloud Platform (GCP) to store large healthcare datasets and access them through Cloud Storage buckets, enabling secure and scalable data handling.",
      "Built interactive dashboards in Metabase and PowerBI to deliver real-time insights for 5+ healthcare stakeholders.",
      "Integrated ML models into production systems to extract insights from unstructured notes, improving analytics accuracy by 25%.",
      "Collaborated in Agile teams to deliver production-ready features, reducing release cycle time by 30%."
    ],
    highlights: [
      "full-stack applications",
      "MVC",
      "scalable REST APIs",
      "backend services",
      "SQL/NoSQL",
      "end-to-end data pipelines",
      "Google Cloud Platform",
      "GCP",
      "Cloud Storage",
      "interactive dashboards",
      "PowerBI",
      "Metabase",
      "ML models",
      "unstructured notes",
      "accuracy by 25%",
      "Agile",
      "release cycle time by 30%"
    ],
    accent: "indigo",
  },
  {
    company: "Karkinos Healthcare Private Limited",
    role: "Technology Intern",
    period: "11/2020 – 04/2021",
    location: "Bangalore, India",
    badge: "Internship",
    bullets: [
      "Contributed to the early development of healthcare applications, writing clean, object-oriented Python code.",
      "Assisted in building API endpoints and database connections for efficient data flow.",
      "Supported the team in debugging and testing pipelines while gaining hands-on Agile experience.",
      "Helped design initial data analysis dashboards to track patient records and healthcare metrics."
    ],
    highlights: [
      "object-oriented Python",
      "API endpoints",
      "database connections",
      "debugging",
      "testing pipelines",
      "Agile",
      "data analysis dashboards",
      "healthcare metrics"
    ],
    accent: "emerald",
  },
  {
    company: "Vizag Steel Plant",
    role: "Intern — ERP Implementation",
    period: "06/2018 – 08/2018",
    location: "Vizag, India",
    badge: "Internship",
    bullets: [
      "Collaborated in Agile teams to deliver robust, production-ready features across ERP and analytics platforms."
    ],
    highlights: ["Agile", "ERP", "analytics platforms", "production-ready"],
    accent: "rose",
  }
];

// accent maps
const accentMap = {
  indigo: "from-indigo-100 to-indigo-50 border-indigo-200",
  emerald: "from-emerald-100 to-emerald-50 border-emerald-200",
  rose: "from-rose-100 to-rose-50 border-rose-200",
};

const dotMap = {
  indigo: "bg-indigo-600",
  emerald: "bg-emerald-600",
  rose: "bg-rose-600",
};

export default function Experience() {
  return (
    <section className="relative mx-auto max-w-5xl px-4 py-10">
      {/* Section heading */}
      <header className="mb-10">
        <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <div className="mt-2 h-1 w-32 rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400" />
      </header>

      {/* Timeline line */}
      <div className="relative">
        <div aria-hidden className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-indigo-200 via-slate-200 to-emerald-200 md:left-1/2" />

        <div className="space-y-12">
          {JOBS.map((job, idx) => (
            <div key={idx} className="relative md:grid md:grid-cols-2 md:gap-10">
              {/* timeline dot */}
              <div
                aria-hidden
                className={`absolute left-[14px] top-5 h-4 w-4 rounded-full border-4 border-white shadow ${dotMap[job.accent || "indigo"]} md:left-[calc(50%-8px)] animate-pulse`}
              />

              {/* Card column (alternate sides on md+) */}
              <div
                className={`md:col-start-${
                  idx % 2 === 0 ? "1" : "2"
                } md:pr-6`}
              >
                <div
                  className={`relative rounded-xl border bg-gradient-to-br ${accentMap[job.accent || "indigo"]} shadow-md hover:shadow-xl transition`}
                >
                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="text-lg font-semibold">
                        <span className="inline-flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-slate-600" />
                          <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                            {job.role}
                          </span>
                        </span>
                        <span className="italic text-slate-700">
                          {" "}
                          · {job.company}
                        </span>
                      </div>
                      <div className="text-xs font-medium text-slate-600 bg-white/70 px-2 py-1 rounded">
                        {job.period}
                      </div>
                    </div>
                    <div className="mt-1 text-xs text-slate-500">{job.location}</div>
                    {job.badge && (
                      <div className="mt-2 inline-block rounded-full border border-slate-300 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-700 shadow-sm">
                        {job.badge}
                      </div>
                    )}

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-slate-800">
                      {job.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="transition hover:text-slate-900 hover:translate-x-1"
                        >
                          {highlight(b, job.highlights)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* spacer */}
              <div
                className={`hidden md:block md:col-start-${
                  idx % 2 === 0 ? "2" : "1"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

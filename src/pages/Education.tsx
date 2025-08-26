// src/pages/Education.tsx
import React from "react";
import { GraduationCap, MapPin } from "lucide-react"; // npm i lucide-react

type Edu = {
  degree: string;
  school: string;
  period: string;     // "01/2025 – 12/2027"
  location?: string;  // "San José, CA"
  focus: string[];    // list of topics/skills as chips
  accent?: "indigo" | "emerald" | "rose" | "sky" | "slate";
};

const EDUCATION: Edu[] = [
  {
    degree: "Master of Science in Artificial Intelligence (MSAI)",
    school: "San José State University (SJSU)",
    period: "01/2025 – Present",
    location: "San José, CA",
    focus: [
      "Machine Learning",
      "Artificial Intelligence",
      "Deep Learning",
      "Big Data Analysis",
      "Predictive Modeling",
    ],
    accent: "indigo",
  },
  {
    degree: "Master of Technology in CSE (Big Data Analytics)",
    school: "Vellore Institute of Technology (VIT)",
    period: "07/2019 – 05/2021",
    location: "Vellore, India",
    focus: [
      "Apache Pig",
      "Spark",
      "Database Management System",
      "Web Applications",
      "Hadoop",
      "Hive",
      "Cassandra",
      "MongoDB",
    ],
    accent: "emerald",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Jawaharlal Nehru Technological University Kakinada (JNTUK), India",
    period: "07/2015 – 05/2019",
    location: "Guntur, India",
    focus: [
      "Data Structures",
      "Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Software Development",
      "Project Implementation",
      "Data Handling",
    ],
    accent: "rose",
  },
];

/** Small helper to render a subtle accent header bar + gradient border glass card */
const PrettyCard: React.FC<
  React.PropsWithChildren<{ className?: string; accent?: Edu["accent"] }>
> = ({ className = "", accent = "slate", children }) => {
  const ring = "from-slate-200 via-slate-300 to-slate-100";
  const strip =
    accent === "indigo"
      ? "from-indigo-500/80 to-indigo-300/60"
      : accent === "emerald"
      ? "from-emerald-500/80 to-emerald-300/60"
      : accent === "rose"
      ? "from-rose-500/80 to-rose-300/60"
      : accent === "sky"
      ? "from-sky-500/80 to-sky-300/60"
      : "from-slate-500/80 to-slate-300/60";

  return (
    <div className={`relative rounded-2xl bg-gradient-to-tr ${ring} p-[1px] shadow-xl ${className}`}>
      {/* soft top accent strip */}
      <div
        className={`pointer-events-none absolute inset-x-4 top-3 h-1.5 rounded-full bg-gradient-to-r ${strip} opacity-80 blur-[1px]`}
      />
      <div className="rounded-[16px] bg-white/85 p-6 pt-8 backdrop-blur-md transition-all duration-200 hover:-translate-y-[2px] hover:shadow-2xl">
        {children}
      </div>
    </div>
  );
};

/** Tiny chip for focus items */
const Chip: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-sm">
    {children}
  </span>
);

export default function Education() {
  return (
    <section className="space-y-8 animate-fadeup">
      {/* Section header */}
      <header className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        <p className="text-[15px] leading-7 text-slate-600">
        </p>
      </header>

      {/* Stack for readability on all screens */}
      <div className="space-y-6">
        {EDUCATION.map((e) => (
          <PrettyCard key={e.degree} accent={e.accent}>
            {/* top row */}
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-xl font-bold leading-tight text-slate-900">
                  <span className="inline-flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-slate-500" />
                    <span>{e.degree}</span>
                  </span>
                </h3>
                <p className="mt-1 text-sm italic text-slate-700">{e.school}</p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700">
                  {e.period}
                </span>
                {e.location && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-600">
                    <MapPin className="h-3.5 w-3.5" />
                    {e.location}
                  </span>
                )}
              </div>
            </div>

            {/* divider */}
            <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            {/* focus chips */}
            <div className="flex flex-wrap gap-2">
              {e.focus.map((f) => (
                <Chip key={f}>{f}</Chip>
              ))}
            </div>
          </PrettyCard>
        ))}
      </div>
    </section>
  );
}

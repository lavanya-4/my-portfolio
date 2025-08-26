// src/pages/Skills.tsx
import React from "react";
import { Code2, Cpu, Database, Brain, Wrench } from "lucide-react"; // npm i lucide-react

type Level = 1 | 2 | 3 | 4 | 5;
type Skill = { name: string; level: Level };
type Group = {
  title: string;
  icon: React.ReactNode;
  tint: "indigo" | "emerald" | "sky" | "rose" | "slate";
  items: Skill[];
};

const GROUPS: Group[] = [
  {
    title: "Programming & Core",
    icon: <Code2 className="h-5 w-5" />,
    tint: "indigo",
    items: [
      { name: "Python (OOP, backend, pipelines, dashboards)", level: 5 },
      { name: "SQL", level: 5 },
      { name: "R", level: 3 },
      { name: "C++ (coursework)", level: 2 },
      { name: "Java (coursework)", level: 2 },
      { name: "REST APIs", level: 4 },
      { name: "Systems Design", level: 4 },
      { name: "MVC / modular design", level: 4 },
    ],
  },
  {
    title: "Web & Frameworks",
    icon: <Cpu className="h-5 w-5" />,
    tint: "sky",
    items: [
      { name: "Flask", level: 4 },
      { name: "ReactJS", level: 3 },
      { name: "HTML", level: 4 },
      { name: "CSS", level: 4 },
      { name: "JavaScript", level: 3 },
    ],
  },
  {
    title: "Data Eng & Big Data",
    icon: <Database className="h-5 w-5" />,
    tint: "emerald",
    items: [
      { name: "Airflow / ETL", level: 3 },
      { name: "PostgreSQL", level: 4 },
      { name: "MongoDB", level: 3 },
      { name: "Hadoop", level: 3 },
      { name: "Spark", level: 3 },
      { name: "Apache Pig", level: 3 },
      { name: "openEHR", level: 2 },
    ],
  },
  {
    title: "ML & Analytics",
    icon: <Brain className="h-5 w-5" />,
    tint: "rose",
    items: [
      { name: "Scikit-learn", level: 4 },
      { name: "TensorFlow (coursework)", level: 2 },
      { name: "Predictive Modeling", level: 4 },
      { name: "Metabase", level: 4 },
      { name: "Power BI", level: 3 },
      { name: "Data Visualization", level: 4 },
    ],
  },
  {
    title: "Tools & Practices",
    icon: <Wrench className="h-5 w-5" />,
    tint: "slate",
    items: [
      { name: "Git", level: 4 },
      { name: "GitLab", level: 3 },
      { name: "Jira", level: 3 },
      { name: "GCP", level: 3 },
      { name: "Agile", level: 4 },
    ],
  },
];

// helper for tint classes
const tintMap = {
  indigo: "from-indigo-500 to-indigo-300",
  emerald: "from-emerald-500 to-emerald-300",
  sky: "from-sky-500 to-sky-300",
  rose: "from-rose-500 to-rose-300",
  slate: "from-slate-700 to-slate-400",
};

// animated level bar
const LevelBar: React.FC<{ level: Level; tint: keyof typeof tintMap }> = ({
  level,
  tint,
}) => {
  const pct = `${level * 20}%`;
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100">
      <div
        className={`h-full rounded-full bg-gradient-to-r ${tintMap[tint]} animate-grow`}
        style={{ width: pct }}
      />
      <span className="absolute -top-5 right-0 text-[10px] font-semibold text-slate-500">
        {level}/5
      </span>
    </div>
  );
};

// premium card shell
const CardShell: React.FC<
  React.PropsWithChildren<{ tint: keyof typeof tintMap }>
> = ({ tint, children }) => (
  <article className="relative rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm ring-1 ring-black/0 backdrop-blur transition hover:-translate-y-[2px] hover:shadow-md">
    {/* header glow */}
    <div
      className={`pointer-events-none absolute inset-x-6 top-4 h-1.5 rounded-full bg-gradient-to-r ${tintMap[tint]} opacity-80 blur-[1px]`}
    />
    {children}
  </article>
);

export default function Skills() {
  return (
    <section className="space-y-8 animate-fadeup">
      <header className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-[15px] leading-7 text-slate-600">
          Proficiency matrix across languages, frameworks, data engineering, ML, and tooling.
        </p>
      </header>

      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {GROUPS.map((g) => (
          <CardShell key={g.title} tint={g.tint}>
            {/* group header */}
            <div className="mb-5 flex items-center justify-between">
              <div className="inline-flex items-center gap-2">
                <span className="rounded-xl bg-slate-100 p-2 text-slate-700">
                  {g.icon}
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {g.title}
                </h3>
              </div>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] text-slate-600">
                {g.items.length} items
              </span>
            </div>

            {/* skills list */}
            <ul className="space-y-4">
              {g.items.map((s, i) => (
                <li
                  key={s.name}
                  className="group flex flex-col gap-1 rounded-xl border border-slate-200/70 bg-white/80 p-3 shadow-xs transition hover:bg-white"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-800">
                      {s.name}
                    </span>
                  </div>
                  <LevelBar level={s.level} tint={g.tint} />
                </li>
              ))}
            </ul>
          </CardShell>
        ))}
      </div>
    </section>
  );
}

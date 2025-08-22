import React, { useState, useMemo } from "react";
import { Card, Chip } from "../components/UI";

const ALL = [
  {
    title: "Disease Symptoms Prediction",
    note: "Decision Trees • &gt;80% accuracy",
    blurb: "End-to-end pipeline: preprocessing → training → evaluation on medical datasets.",
    tags: ["Python", "Scikit-learn", "Pipelines"],
    year: "2025",
    link: "#",
  },
  {
    title: "TikTok Engagement Analysis",
    note: "1,000+ videos • −20% preprocessing time",
    blurb: "Regression pipeline & visualization; IT/Education content ↑ engagement.",
    tags: ["Python", "Pandas", "Dashboards"],
    year: "2025",
    link: "#",
  },
  {
    title: "Early Detection Screening Platform",
    note: "200+ patients served",
    blurb: "Web app + APIs + data pipelines; GP consultation reports.",
    tags: ["Flask", "React", "SQL"],
    year: "2021",
    link: "#",
  },
];

export default function Projects() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(ALL.flatMap((p) => p.tags))),
    []
  );

  const list = useMemo(() => {
    const term = q.trim().toLowerCase();
    return ALL.filter((p) => {
      const matchesQ =
        !term ||
        [p.title, p.blurb, ...(p.tags || [])].join(" ").toLowerCase().includes(term);
      const matchesTag = !tag || p.tags.includes(tag);
      return matchesQ && matchesTag;
    });
  }, [q, tag]);

  return (
    <section className="space-y-4 animate-fadeup">
      <h2 className="text-2xl font-bold">Projects</h2>

      <Card className="p-4">
        <div className="flex flex-wrap gap-3 items-center">
          <input
            placeholder="Search projects…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="min-w-[220px] rounded-xl border border-white/10 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400/50"
          />
          <div className="flex flex-wrap gap-2">
            <Chip active={!tag} onClick={() => setTag(null)}>All</Chip>
            {tags.map((t) => (
              <Chip key={t} active={tag === t} onClick={() => setTag(t)}>
                {t}
              </Chip>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <Card key={p.title} className="p-5 hover:bg-white/15 transition">
            <div className="flex items-center justify-between">
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-slate-400">{p.year}</div>
            </div>
            <div className="text-xs text-emerald-300 mt-1" dangerouslySetInnerHTML={{ __html: p.note }} />
            <p className="mt-2 text-sm text-slate-200">{p.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                  {t}
                </span>
              ))}
            </div>
            {p.link && p.link !== "#" && (
              <a className="mt-3 inline-block text-sm text-emerald-300 hover:underline" href={p.link}>
                View →
              </a>
            )}
          </Card>
        ))}
        {list.length === 0 && (
          <div className="text-slate-400 text-sm col-span-full">No projects match your search.</div>
        )}
      </div>
    </section>
  );
}

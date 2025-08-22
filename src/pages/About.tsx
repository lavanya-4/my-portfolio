import React from "react";
import { Card } from "../components/UI";

export default function About() {
  const stats = [
    { label: "Experience", value: "3+ yrs" },
    { label: "Projects", value: "10+" },
    { label: "Domains", value: "Healthcare, ML" },
  ];

  return (
    <section className="space-y-6 animate-fadeup">
      <Card className="p-6">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-2 text-slate-300 text-sm">
          Graduate student in the <b>M.S. Artificial Intelligence</b> program at <b>San José State University</b>,
          with 3+ years of software development. Focus on Python backends, data pipelines, dashboards, and applied ML.
        </p>
      </Card>

      <div className="grid sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-4 text-center">
            <div className="text-emerald-400 text-2xl font-extrabold">{s.value}</div>
            <div className="text-xs text-slate-300">{s.label}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { Card } from "../components/UI";

export default function Experience() {
  const jobs = [
    {
      where: "Karkinos Healthcare",
      role: "Software Engineer",
      period: "2020 – 2024",
      bullets: [
        "Built web apps & REST APIs for early detection programs.",
        "Dashboards & pipelines serving 200+ patients.",
        "Integrated ML on unstructured notes for analytics accuracy.",
      ],
    },
  ];

  return (
    <section className="space-y-4 animate-fadeup">
      <h2 className="text-2xl font-bold">Experience</h2>
      {jobs.map((j) => (
        <Card key={j.where} className="p-5">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{j.role} · {j.where}</div>
            <div className="text-xs text-slate-400">{j.period}</div>
          </div>
          <ul className="mt-3 text-sm text-slate-200 space-y-1 list-disc pl-5">
            {j.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </Card>
      ))}
    </section>
  );
}

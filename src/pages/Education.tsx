import React from "react";
import { Card } from "../components/UI";

export default function Education() {
  const schools = [
    { degree: "M.S. Artificial Intelligence", school: "San José State University", period: "2025 – 2027" },
    { degree: "M.Tech CSE (Big Data Analytics)", school: "VIT", period: "2019 – 2021" },
    { degree: "B.Tech CSE", school: "JNTU Kakinada", period: "2015 – 2019" },
  ];
  return (
    <section className="space-y-4 animate-fadeup">
      <h2 className="text-2xl font-bold">Education</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {schools.map((s) => (
          <Card key={s.degree} className="p-5">
            <div className="font-semibold">{s.degree}</div>
            <div className="text-sm text-slate-300">{s.school}</div>
            <div className="text-xs text-slate-400 mt-1">{s.period}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import { Card } from "../components/UI";

export default function Skills() {
  const groups = [
    { title: "Programming & Core", items: ["Python", "SQL", "R", "C++ (coursework)", "Java (coursework)"] },
    { title: "Web & Frameworks", items: ["Flask", "React", "HTML", "CSS", "JavaScript"] },
    { title: "Data Eng & Big Data", items: ["Airflow / ETL", "PostgreSQL", "MongoDB", "Hadoop", "Spark", "Apache Pig"] },
    { title: "ML & Analytics", items: ["Scikit-learn", "TensorFlow (coursework)", "Predictive Modeling", "Metabase", "Power BI", "openEHR"] },
    { title: "Tools & Practices", items: ["Git", "GitLab", "Jira", "GCP", "Agile"] },
  ];

  return (
    <section className="space-y-4 animate-fadeup">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {groups.map((g) => (
          <Card key={g.title} className="p-5">
            <div className="inline-block rounded-xl bg-emerald-500/20 px-3 py-1 text-emerald-300 text-sm font-semibold">
              {g.title}
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10">
                  {it}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

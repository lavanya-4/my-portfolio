import React from "react";
import { Card } from "../components/UI";

export default function Home() {
  return (
    <section className="animate-fadeup">
      <Card className="p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              MSAI @ SJSU • Software Engineer
            </h1>
            <p className="mt-3 text-slate-300">
              3+ years building backends, data pipelines, dashboards, and applied ML.
              Strong foundations in DSA and software architecture (MVP/MVC).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/projects" className="rounded-xl bg-emerald-500 text-slate-900 font-semibold px-4 py-2 hover:bg-emerald-400">
                View Projects →
              </a>
              <a href="/experience" className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
                Experience
              </a>
              <a href="/contact" className="rounded-xl border border-white/20 px-4 py-2 hover:bg-white/10">
                Contact
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-teal-500/20 to-fuchsia-500/20 border border-white/10 h-48 md:h-64 grid place-items-center">
            <span className="text-6xl">✨</span>
          </div>
        </div>
      </Card>
    </section>
  );
}

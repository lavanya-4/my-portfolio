import React from "react";
import { Card } from "../components/UI";

export default function Home() {
  return (
    <section className="relative isolate animate-fadeup">
      {/* background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-72 w-[82%] rounded-[48px] bg-gradient-to-r from-indigo-200 via-sky-200 to-fuchsia-200 blur-3xl opacity-60"
      />

      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr,1fr]">
        {/* Left: Text */}
        <div>
          {/* tiny availability badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 backdrop-blur shadow-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            Open to Software Engineer/ ML/AI roles
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Building reliable software with AI, data & clean APIs.
            </span>
          </h1>

          <p className="mt-4 max-w-prose text-[17px] leading-8 text-slate-700">
            3+ years in building web applications, backends, data pipelines, dashboards, and applied ML.
            Strong foundations in DSA and software architecture (MVP/MVC). Currently
            pursuing an M.S. in Artificial Intelligence at SJSU.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/projects"
              className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:-translate-y-[1px] hover:bg-indigo-700 hover:shadow-md"
            >
              View Projects →
            </a>
            <a
              href="/experience"
              className="rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md"
            >
              Experience
            </a>
            <a
              href="/contact"
              className="rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-[1px] hover:bg-white hover:shadow-md"
            >
              Contact
            </a>
          </div>

          {/* quick stats */}
          <div className="mt-8 grid max-w-lg grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">5+</div>
              <div className="text-slate-600">Stakeholders</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">25%</div>
              <div className="text-slate-600">Accuracy uplift</div>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">30%</div>
              <div className="text-slate-600">Faster releases</div>
            </div>
          </div>
        </div>

        {/* Right: Photo card */}
        <Card className="overflow-hidden p-0 shadow-xl">
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img
                src="/me.jpg"               // you already added this
                alt="Lavanya Bandla"
                className="h-full w-full object-cover transition will-change-transform group-hover:kenburns"
              />
              {/* shine sweep */}
              <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
              {/* bottom gradient for legibility */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* info strip over white glass */}
            <div className="grid gap-2 bg-white/85 px-5 py-4 backdrop-blur">
              <div className="text-xs font-medium text-slate-600">Based in</div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-900">San José, CA</div>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {["Python", "Flask", "React", "GCP", "Postgres"].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-slate-700 shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

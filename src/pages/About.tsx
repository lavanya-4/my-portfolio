import {
  Briefcase,
  Download,
  FolderGit2,
  GraduationCap,
  Mail,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  // Google Drive resume link (viewer mode)
  const RESUME =
    "https://drive.google.com/file/d/1Pn5QJUOUR73M8MGWAGuMmWZGkD3m371e/view?usp=sharing";

  return (
    <main className="relative isolate animate-fadeup">
      {/* background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-64 w-[80%] rounded-[40px] bg-gradient-to-r from-indigo-200 via-sky-200 to-fuchsia-200 blur-3xl opacity-60"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-44 -z-10 h-64 w-64 rounded-full bg-indigo-300/40 blur-3xl"
      />

      {/* --- Intro + Image --- */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-8">
        <div className="grid items-center gap-8 md:grid-cols-[220px,1fr]">
          {/* Profile Image */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div className="relative aspect-[4/5] w-full">
              <img
                src="/me.jpg"
                alt="Lavanya Bandla"
                className="h-full w-full object-cover"
              />
              {/* shine sweep */}
              <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
              {/* glow strip */}
              <span className="pointer-events-none absolute inset-x-6 top-3 h-1 rounded-full bg-gradient-to-r from-indigo-500/70 to-fuchsia-400/70 blur-[1px]" />
            </div>
          </div>

          {/* Summary */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h1>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[15px] leading-7 text-slate-700">
                Graduate student in the{" "}
                <strong className="text-slate-900">
                  M.S. Artificial Intelligence
                </strong>{" "}
                program at{" "}
                <strong className="text-slate-900">
                  San José State University
                </strong>{" "}
                with{" "}
                <strong className="text-slate-900">
                  3+ years of professional software development experience
                </strong>
                . Skilled in{" "}
                <strong className="text-slate-900">Python</strong> (OOP,
                backend systems, data pipelines, dashboards) with strong
                foundations in{" "}
                <strong className="text-slate-900">data structures</strong>,{" "}
                <strong className="text-slate-900">algorithms</strong>,{" "}
                <strong className="text-slate-900">systems design</strong>, and{" "}
                <strong className="text-slate-900">software architecture</strong>{" "}
                (MVP, MVC). Experienced in building{" "}
                <strong className="text-slate-900">full-stack applications</strong>,{" "}
                <strong className="text-slate-900">scalable APIs</strong>, and{" "}
                <strong className="text-slate-900">end-to-end data pipelines</strong>
                . Familiar with C++ and Java through coursework.
              </p>

              {/* quick tech chips */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {[
                  "Python",
                  "Flask",
                  "React",
                  "GCP",
                  "Postgres",
                  "MongoDB",
                  "Metabase",
                  "Power BI",
                ].map((t) => (
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
      </section>

      {/* --- Highlight mini-cards --- */}
      <section className="mx-auto max-w-5xl px-4 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-[2px] hover:shadow-md">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              What I do
            </h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-700">
              Design <strong>clean APIs</strong>, build{" "}
              <strong>ETL/data pipelines</strong>, integrate{" "}
              <strong>ML</strong>, and ship dashboards users can act on.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-[2px] hover:shadow-md">
            <Target className="h-5 w-5 text-emerald-600" />
            <h3 className="mt-2 text-lg font-semibold text-slate-900">
              Focus
            </h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-700">
              <strong>Scalable backends</strong>,{" "}
              <strong>data platforms</strong>, and{" "}
              <strong>applied ML</strong> with a bias for maintainability.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-[2px] hover:shadow-md">
            <GraduationCap className="h-5 w-5 text-rose-600" />
            <h3 className="mt-2 text-lg font-semibold text-slate-900">Now</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-700">
              M.S. AI @ SJSU 
              • Open to Software Engineer/ Data / ML-AI roles &
              collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA row --- */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:-translate-y-[1px] hover:bg-indigo-700 hover:shadow-md"
          >
            <FolderGit2 className="h-4 w-4" />
            View Projects
          </Link>
          <Link
            to="/experience"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:bg-slate-50 hover:shadow-md"
          >
            <Briefcase className="h-4 w-4" />
            Experience
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:bg-slate-50 hover:shadow-md"
          >
            <Mail className="h-4 w-4" />
            Contact
          </Link>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-[1px] hover:bg-slate-50 hover:shadow-md"
          >
            <Download className="h-4 w-4" />
            Résumé
          </a>
        </div>
      </section>
    </main>
  );
}

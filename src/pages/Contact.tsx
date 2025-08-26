// src/pages/Contact.tsx
import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react";

const PrettyCard: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <div className={`relative rounded-2xl bg-gradient-to-tr from-slate-200 via-slate-300 to-slate-100 p-[1px] shadow-xl ${className}`}>
    <div className="rounded-[16px] bg-white/85 p-8 backdrop-blur-md transition-all duration-200 hover:-translate-y-[2px] hover:shadow-2xl">
      {children}
    </div>
  </div>
);

export default function Contact() {
  const EMAIL = "lavanyabandla8@gmail.com";         
  const GITHUB = "https://github.com/lavanya-4";
  const LINKEDIN = "https://www.linkedin.com/in/lavanya-bandla-95486a11a/";

  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <section className="relative isolate space-y-6 animate-fadeup">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-24 -z-10 mx-auto h-64 w-[80%] rounded-[40px] bg-gradient-to-r from-indigo-200 via-sky-200 to-fuchsia-200 blur-3xl opacity-60" />

      <PrettyCard>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Let’s build something together
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-[60ch] text-[15px] leading-7 text-slate-600">
            Open to Software Developer / Data / ML roles, freelancing, and collaborations. I usually reply within a day.
          </p>

          {/* email chip with copy */}
          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-800 shadow-sm">
            <Mail className="h-4 w-4 text-indigo-600" />
            <a className="hover:underline" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <button
              onClick={copyEmail}
              className="ml-1 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-slate-100"
              title="Copy email"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-600" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {/* Email */}
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-indigo-700 hover:shadow-md"
              href={`mailto:${EMAIL}`}
            >
              <Mail className="h-4 w-4 transition group-hover:scale-110" />
              Email Me
            </a>

            {/* GitHub */}
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#181717] px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-black hover:shadow-md"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 transition group-hover:scale-110" />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-4 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-[#004182] hover:shadow-md"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-4 w-4 transition group-hover:scale-110" />
              LinkedIn
            </a>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Prefer Calendly or a quick call? Add a note and I’ll send a slot.
          </p>
        </div>
      </PrettyCard>
    </section>
  );
}

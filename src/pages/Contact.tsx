import React from "react";
import { Card } from "../components/UI";

export default function Contact() {
  return (
    <section className="animate-fadeup">
      <Card className="p-8 text-center">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="mt-2 text-slate-300">Open to software / ML roles and collaborations.</p>
        <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
          <a className="rounded-xl bg-emerald-500 text-slate-900 font-semibold py-2 text-center hover:bg-emerald-400 transition" href="mailto:you@example.com">
            Email
          </a>
          <a className="rounded-xl bg-white/10 border border-white/10 py-2 text-center hover:bg-white/20 transition" href="https://github.com/yourhandle">
            GitHub
          </a>
          <a className="rounded-xl bg-white/10 border border-white/10 py-2 text-center hover:bg-white/20 transition" href="https://www.linkedin.com/in/yourhandle/">
            LinkedIn
          </a>
        </div>
      </Card>
    </section>
  );
}

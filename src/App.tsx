import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function App() {
  return (
    <div className="min-h-screen text-slate-800 relative">
      {/* Bolt-style colorful background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-fuchsia-200/60 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 -translate-x-1/2 h-96 w-[48rem] rounded-full bg-purple-200/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_0%,#dbeafe_0%,transparent_60%),radial-gradient(900px_500px_at_90%_10%,#f5d0fe_0%,transparent_60%),linear-gradient(180deg,#ffffff,rgba(255,255,255,0.9))]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-white/60">
        <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="/me.jpg" alt="avatar" className="h-9 w-9 rounded-xl object-cover border border-white/70 shadow" />
            <span className="font-bold tracking-tight">Lavanya Bandla</span>
          </a>
          <div className="flex flex-wrap gap-1">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                className={({ isActive }) =>
                  [
                    "px-3 py-2 rounded-lg text-sm font-medium transition",
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "hover:bg-white/70 border border-white/70",
                  ].join(" ")
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* Pages */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="pb-8 text-sm text-slate-600">
          © {new Date().getFullYear()} Lavanya Bandla
        </footer>
      </main>
    </div>
  );
}

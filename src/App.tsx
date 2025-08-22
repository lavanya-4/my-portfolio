// src/App.tsx
import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const navLinks = [
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
    <div className="min-h-screen text-slate-100 bg-slate-900">
      {/* subtle gradient blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
        <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] left-1/2 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/10 backdrop-blur border-b border-white/10">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <NavLink to="/" className="font-bold tracking-tight text-white">
            Your Name
          </NavLink>
          <div className="flex flex-wrap gap-1">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  [
                    "px-3 py-2 rounded-lg text-sm font-medium transition",
                    isActive ? "bg-emerald-500 text-slate-900" : "hover:bg-white/10",
                  ].join(" ")
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      {/* Page container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="mt-8 border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} Your Name
          </p>
          <div className="flex gap-4 text-sm">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} className="hover:underline">
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
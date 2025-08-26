import React from "react";
import { NavLink } from "react-router-dom";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/education", label: "Education" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-white/60 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
      <div className="h-0.5 bg-gradient-to-r from-blue-500 via-fuchsia-400 to-purple-500 opacity-70" />
      <nav className="mx-auto max-w-screen-2xl px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/me.jpg" alt="avatar" className="h-9 w-9 rounded-xl object-cover border border-white/70 shadow" />
          <span className="font-bold tracking-tight">Lavanya Bandla</span>
        </NavLink>

        <div className="flex flex-wrap gap-1">
          {NAV.map((n) => (
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
  );
}
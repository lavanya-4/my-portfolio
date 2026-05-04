import { useEffect, useState } from "react";
import {
  FiHome,
  FiBriefcase,
  FiFolder,
  FiZap,
  FiBook,
  FiAward,
  FiMail,
} from "react-icons/fi";

import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

const sections = [
  { id: "home", label: "Home", icon: <FiHome /> },
  { id: "experience", label: "Experience", icon: <FiBriefcase /> },
  { id: "projects", label: "Projects", icon: <FiFolder /> },
  { id: "skills", label: "Skills", icon: <FiZap /> },
  { id: "education", label: "Education", icon: <FiBook /> },
  { id: "certifications", label: "Certifications", icon: <FiAward /> },
  { id: "contact", label: "Contact", icon: <FiMail /> },
];

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el) {
          const top = el.offsetTop;
          if (window.scrollY >= top - 200) {
            current = s.id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex">

      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 h-screen w-20 bg-white/70 backdrop-blur-md border-r border-gray-200 flex flex-col justify-between items-center py-10">

        {/* NAV ICONS */}
        <nav className="flex flex-col gap-8 text-xl">

          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className="relative group"
            >
              {/* ICON */}
              <span
  className={`transition text-xl hover:scale-110 ${
    active === s.id
      ? "scale-110"
      : "text-gray-400"
  } ${
    s.id === "home"
      ? "text-orange-500"
      : s.id === "experience"
      ? "text-blue-500"
      : s.id === "projects"
      ? "text-purple-500"
      : s.id === "skills"
      ? "text-green-500"
      : s.id === "education"
      ? "text-pink-500"
      : s.id === "certifications"
      ? "text-yellow-500"
      : "text-red-500"
  }`}
>
  {s.icon}
</span>

              {/* TOOLTIP */}
              <span className="absolute left-12 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                {s.label}
              </span>
            </button>
          ))}

        </nav>

        {/* FOOTER */}
        <p className="text-xs text-gray-400 rotate-[-90deg]">
          © 2026
        </p>

      </aside>

      {/* MAIN CONTENT */}
      <main className="ml-20 w-[calc(100%-5rem)] px-8 py-16 space-y-32">

        {/* CENTERED CONTENT WRAPPER */}
        <div className="max-w-6xl mx-auto w-full">

          <Home />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />

        </div>

      </main>

    </div>
  );
}
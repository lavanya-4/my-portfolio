import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Full Stack", "Frontend", "ML & AI", "Data Analysis"];

  const projects = [
    {
      title: "ER Monitron",
      category: "ML & AI",
      desc: "AI-driven emergency dispatch system using patient data and traffic optimization.",
      impact: "Improved decision accuracy with AI-based scoring.",
      image: "/er_monitron.png",
      tech: ["Python", "LLM", "NVIDIA"],
      github: "https://github.com/lavanya-4/ER-Monitron-AI-Agent-for-Emergency-Resource-Orchestration",
    },
    {
      title: "Smart PDF",
      category: "ML & AI",
      desc: "LLM-powered assistant for long PDFs using RAG.",
      impact: "Reduced token usage by 92%.",
      image: "/smart_pdf.png",
      tech: ["RAG", "FAISS", "LangChain"],
      github: "https://github.com/lavanya-4/context-aware-support-llm",
    },
    {
      title: "Smart Home Platform",
      category: "Full Stack",
      desc: "IoT monitoring system with real-time alerts.",
      impact: "Handled 10K+ daily events.",
      image: "/smart_home.png",
      tech: ["AWS", "FastAPI", "React"],
      github: "https://github.com/lavanya-4/smart_home",
    },
    {
      title: "Portfolio Website",
      category: "Frontend",
      desc: "Animated portfolio with React + Framer Motion.",
      impact: "Improved UX and engagement.",
      image: "/portfolio.png",
      tech: ["React", "Tailwind"],
      github: "https://github.com/lavanya-4/my-portfolio",
    },

    // 🔥 NEW PROJECTS ADDED

    {
      title: "TikTok Viral Analysis",
      category: "Data Analysis",
      desc: "Statistical analysis of TikTok videos to understand factors driving virality.",
      impact: "Identified key engagement patterns using data analysis.",
      image: "/tiktok.png",
      tech: ["Python", "Pandas", "Statistics"],
      github: "https://github.com/lavanya-4/Statistical-Analysis-of-Tiktok-Videos-Going-Viral",
    },
    {
      title: "Travel Trip Advisor",
      category: "ML & AI",
      desc: "Web application for discovering and planning travel trips.",
      impact: "Improved travel planning experience with curated recommendations.",
      image: "/travel.png",
      tech: ["Python", "NLP", "API", "Gradio UI"],
      github: "https://github.com/lavanya-4/Travel_Trip_Advisor",
    },
    {
      title: "Academic Copilot",
      category: "Full Stack",
      desc: "AI-powered assistant for academic support and content generation.",
      impact: "Enhanced productivity for research and learning workflows.",
      image: "/academic_copilot.png",
      tech: ["LLM", "FastAPI", "React"],
      github: "https://github.com/lavanya-4/academic-copilot",
    },
    {
      title: "Disease Prediction System",
      category: "Data Analysis",
      desc: "Machine learning model to predict diseases based on symptoms using decision trees.",
      impact: "Improved early diagnosis accuracy using predictive modeling.",
      image: "/disease.png",
      tech: ["Python", "Decision Tree", "ML"],
      github: "https://github.com/lavanya-4/Prediction-of-disease-symptoms-based-on-decision-tree",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="pt-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-semibold text-black"
          >
            Projects
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 h-[4px] bg-orange-500 rounded-full"
          />
        </div>

        {/* FILTERS */}
        <div className="mt-10 flex flex-wrap gap-6 items-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${
                  filter === f
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-600 hover:text-indigo-600"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-2 gap-12">

          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group bg-white/70 backdrop-blur-md rounded-xl p-5 shadow hover:shadow-xl transition"
            >

              <div className="overflow-hidden rounded-lg relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:bg-indigo-600 hover:text-white transition"
                >
                  <FiGithub size={16} />
                </a>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold text-black group-hover:text-indigo-600 transition">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-gray-700">
                  {p.desc}
                </p>

                <p className="mt-2 text-sm font-medium text-gray-900">
                  {p.impact}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-indigo-100 text-indigo-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
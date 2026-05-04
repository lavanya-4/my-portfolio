import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    "Languages",
    "Backend",
    "Data",
    "Cloud",
    "AI",
    "Tools",
    "Concepts",
  ];

  const skills = [
    // Languages
    { name: "Java", category: "Languages" },
    { name: "J2EE", category: "Languages" },
    { name: "Spring Boot", category: "Languages" },
    { name: "Python", category: "Languages" },
    { name: "C", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "JQuery", category: "Languages" },
    { name: "CSS", category: "Languages" },
    { name: "HTML", category: "Languages" },
    { name: "React", category: "Languages" },
    { name: "C++", category: "Languages" },

    // Backend & Testing

    { name: "Node.js", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "Hibernate", category: "Backend" },
    { name: "REST APIs", category: "Backend" },
    { name: "Microservices", category: "Backend" },
    { name: "JUnit", category: "Backend" },
    { name: "TestNG", category: "Backend" },
    { name: "Selenium", category: "Backend" },

    // Data Engineering
    { name: "Apache Airflow", category: "Data" },
    { name: "Spark", category: "Data" },
    { name: "Kafka", category: "Data" },
    { name: "Hadoop", category: "Data" },
    { name: "Hive", category: "Data" },
    { name: "ETL", category: "Data" },
    { name: "ELT", category: "Data" },
    { name: "Data Pipelines", category: "Data" },
    { name: "Pandas", category: "Data" },
    { name: "NumPy", category: "Data" },
    { name: "SQL", category: "Data" },
    { name: "PostgreSQL", category: "Data" },
    { name: "MySQL", category: "Data" },
    { name: "MongoDB", category: "Data" },
    { name: "Cassandra", category: "Data" },
    { name: "Oracle DB", category: "Data" },
    { name: "Statistics", category: "Data" },
    { name: "Big Data Analysis", category: "Data" },
    { name: "R", category: "Data" },

    // Cloud / DevOps
    { name: "AWS", category: "Cloud" },
    { name: "EC2", category: "Cloud" },
    { name: "S3", category: "Cloud" },
    { name: "GCP", category: "Cloud" },
    { name: "Compute Engine", category: "Cloud" },
    { name: "GCS", category: "Cloud" },
    { name: "Docker", category: "Cloud" },
    { name: "Kubernetes", category: "Cloud" },
    { name: "CI/CD", category: "Cloud" },
    { name: "Jenkins", category: "Cloud" },

    // AI / LLM
    { name: "OpenAI", category: "AI" },
    { name: "Claude", category: "AI" },
    { name: "Gemini", category: "AI" },
    { name: "Cursor", category: "AI" },
    { name: "LLaMA", category: "AI" },
    { name: "LangChain", category: "AI" },
    { name: "LlamaIndex", category: "AI" },
    { name: "RAG", category: "AI" },
    { name: "Vector DBs", category: "AI" },
    { name: "Prompt Engineering", category: "AI" },
    { name: "Agentic Workflow", category: "AI" },
    { name: "NLP", category: "AI" },
    { name: "Machine Learning", category: "AI" },

    // Tools
    { name: "Git", category: "Tools" },
    { name: "Jira", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "VS Code", category: "Tools" },
    { name: "Eclipse", category: "Tools" },
    { name: "PyCharm", category: "Tools" },


    // Concepts
    { name: "Data Structures", category: "Concepts" },
    { name: "Algorithms", category: "Concepts" },
    { name: "Problem Solving", category: "Concepts" },
    { name: "System Architecture", category: "Concepts" },
    { name: "Application Design", category: "Concepts" },
    { name: "Performance Optimization", category: "Concepts" },
    { name: "Security Practices", category: "Concepts" },
    { name: "Debugging", category: "Concepts" },
    { name: "Code Review", category: "Concepts" },
    { name: "Software Testing", category: "Concepts" },
    { name: "Agile", category: "Concepts" },
    { name: "Documentation", category: "Concepts" },
  ];

  const filteredSkills =
    filter === "All"
      ? skills
      : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="pt-10">
      <div className="max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-black"
        >
          Skills
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          className="mt-3 h-[4px] bg-orange-500 rounded-full"
        />

        {/* FILTERS */}
        <div className="mt-10 flex flex-wrap gap-4 text-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full ${
                filter === f
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {filteredSkills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.02 }}
              className="bg-white/60 backdrop-blur-md p-4 rounded-xl shadow text-center"
            >
              <p className="text-sm font-medium text-gray-800">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
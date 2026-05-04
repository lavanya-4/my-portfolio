import { motion } from "framer-motion";
import { FiCode, FiCpu, FiDatabase } from "react-icons/fi";

export default function Roles() {
  const roles = [
    {
      title: "Software Engineer",
      desc: "Building scalable backend systems, APIs, and microservices with a focus on performance and reliability.",
      icon: <FiCode />,
    },
    {
      title: "AI / ML Engineer",
      desc: "Designing intelligent systems using LLMs, RAG pipelines, and machine learning workflows.",
      icon: <FiCpu />,
    },
    {
      title: "Data Engineer",
      desc: "Developing data pipelines, real-time processing systems, and analytics platforms at scale.",
      icon: <FiDatabase />,
    },
  ];

  return (
    <section className="mt-28">
      <div className="max-w-6xl grid md:grid-cols-3 gap-10">

        {roles.map((role, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="group relative p-6 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-md hover:shadow-lg transition"
          >

            {/* TOP ACCENT LINE */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-t-xl opacity-0 group-hover:opacity-100 transition"></div>

            {/* ICON */}
            <div className="text-2xl text-indigo-600">
              {role.icon}
            </div>

            {/* TITLE */}
            <h3 className="mt-4 text-xl font-semibold text-black group-hover:text-indigo-600 transition">
              {role.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {role.desc}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
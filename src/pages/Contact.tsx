import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCopy } from "react-icons/fi";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "lavanyabandia8@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-20">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-10 text-center shadow-md"
        >

          {/* TITLE */}
          <h2 className="text-3xl font-semibold text-gray-900">
            Let’s build something together
          </h2>

          {/* SUBTEXT */}
          <p className="mt-3 text-gray-600 text-sm max-w-xl mx-auto">
            Open to Software Developer / Data / ML roles, freelancing, and collaborations.
            I usually reply within a day.
          </p>

          {/* EMAIL COPY BOX */}
          <div className="mt-6 flex items-center justify-center gap-2">

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm">
              <FiMail className="text-orange-500" />
              {email}
            </div>

            <button
              onClick={copyEmail}
              className="px-3 py-2 text-xs bg-gray-200 rounded-full hover:bg-gray-300 transition flex items-center gap-1"
            >
              <FiCopy />
              {copied ? "Copied!" : "Copy"}
            </button>

          </div>

          {/* CLICKABLE BUTTONS */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {/* EMAIL */}
            <a
              href={`mailto:${email}`}
              className="px-6 py-3 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <FiMail />
              Email Me
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/lavanya-4"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <FiGithub />
              GitHub
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/lavanya-bandla-95486a11a/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <FiLinkedin />
              LinkedIn
            </a>

          </div>

          {/* FOOTNOTE */}
          <p className="mt-6 text-xs text-gray-500">
            Prefer a quick call? Add a note and I’ll respond soon.
          </p>

        </motion.div>

      </div>
    </section>
  );
}
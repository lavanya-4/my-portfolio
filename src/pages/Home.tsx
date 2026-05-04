import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiZap,
  FiTarget,
  FiActivity,
} from "react-icons/fi";
import { useRef } from "react";

export default function Home() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-120, 120], [8, -8]);
  const rotateY = useTransform(x, [-120, 120], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-start pt-20 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#eef2ff]"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_40%)]"></div> 

      <div className="max-w-6xl mx-auto px-6 w-full">

        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >

            <h2 className="text-3xl font-semibold text-gray-900">
              About Me
            </h2>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.6 }}
              className="mt-2 h-[3px] bg-orange-500 rounded-full"
            />

            {/* ABOUT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="mt-5 bg-white rounded-xl shadow-sm p-8 border border-gray-100"
            >

              <p className="text-[15px] leading-[1.7] text-gray-700">
                Hi, I’m Lavanya.
              </p>

              <p className="mt-3 text-[15px] leading-[1.7] text-gray-700">
                I enjoy building full-stack web applications using React, JavaScript, and Python, with a focus on integrating AI and data-driven features into real-world products.
              </p>

              <p className="mt-4 text-[15px] font-medium text-gray-900">
                What I am into:
              </p>

              <ul className="mt-2 space-y-1 text-[15px] leading-[1.7] text-gray-700">
                <li>• Frontend development with React and modern JavaScript</li>
                <li>• Building REST APIs and full-stack applications</li>
                <li>• Integrating AI features into applications (LLMs, automation, intelligent workflows)</li>
                <li>• Developing data dashboards and working with real-world data</li>
                <li>• Writing clean, maintainable, and scalable code</li>
              </ul>

              <p className="mt-4 text-[15px] leading-[1.7] text-gray-700">
                I’ve built applications that combine user-friendly interfaces with backend systems and AI capabilities, including dashboards and intelligent assistants. I enjoy using AI to make applications smarter, more efficient, and more useful for end users.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python","Flask","React","GCP","Postgres","MongoDB","Metabase","Power BI"].map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

            </motion.div>

            {/* CARDS */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="mt-6 grid grid-cols-3 gap-4"
            >

              {[
                {
                  title: "What I do",
                  text: "Build full-stack web apps, APIs, and AI-powered agents, dashboards.",
                  icon: FiZap,
                  color: "text-orange-500",
                },
                {
                  title: "Focus",
                  text: "Frontend + backend integration with AI-driven features.",
                  icon: FiTarget,
                  color: "text-blue-500",
                },
                {
                  title: "Now",
                  text: "M.S. AI @ SJSU • Open to Software / Web / AI/ML / Data roles.",
                  icon: FiActivity,
                  color: "text-green-500",
                },
              ].map((card, i) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -8, scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-white rounded-xl shadow-sm p-5 border border-gray-100"
                  >
                    <Icon className={`${card.color} text-lg`} />

                    <h3 className="text-[15px] font-semibold text-gray-900 mt-2">
                      {card.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-2">
                      {card.text}
                    </p>
                  </motion.div>
                );
              })}

            </motion.div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
            className="flex justify-end"
          >

            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring" }}
              className="bg-white rounded-xl shadow-md p-5 text-center w-[320px] border border-gray-100"
            >

              <motion.img
                src="/me.png"
                whileHover={{ scale: 1.05 }}
                className="w-full h-56 object-cover rounded-lg"
              />

              <h2 className="mt-4 text-lg font-semibold text-gray-900">
                Lavanya Bandla
              </h2>

              <p className="text-sm text-gray-500">
                Software Engineer, San Jose, CA
              </p>

              <motion.a
                href="https://drive.google.com/file/d/17ms8ao52wD2GEK96Lua3EshfSoor1gp2/view?usp=sharing"
                target="_blank"
                whileTap={{ scale: 0.95 }}
                className="mt-4 inline-block px-4 py-2 text-sm bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
              >
                View Resume
              </motion.a>

              <div className="mt-4 flex justify-center gap-5">

                <motion.a href="https://github.com/lavanya-4" whileHover={{ scale: 1.3 }} className="text-gray-600 hover:text-black">
                  <FiGithub />
                </motion.a>

                <motion.a href="https://www.linkedin.com/in/lavanya-bandla-95486a11a/" whileHover={{ scale: 1.3 }} className="text-blue-600">
                  <FiLinkedin />
                </motion.a>

                <motion.a href="mailto:lavanyabandla8@gmail.com" whileHover={{ scale: 1.3 }} className="text-red-500">
                  <FiMail />
                </motion.a>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
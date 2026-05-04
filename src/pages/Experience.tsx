import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export default function Experience() {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[7fr_3fr] gap-16">

        {/* LEFT */}
        <div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold text-black"
          >
            Experience
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            transition={{ duration: 0.5 }}
            className="mt-3 h-[4px] bg-orange-500 rounded-full"
          />

          {/* STAGGER */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="mt-12 space-y-14"
          >

            {/* SJSU */}
            <motion.div variants={item} className="flex gap-4">
              <img src="/sjsu_logo.png" className="w-12 h-12 rounded-lg bg-white border shadow-sm" />

              <div className="flex-1">
                <div className="flex justify-between items-start">

                  <h3 className="text-lg font-medium text-black flex items-center gap-1">
                    Graduate Teaching Assistant
                    <span className="text-gray-400">|</span>
                    San Jose State University

                    <motion.a
                      href="https://www.sjsu.edu"
                      target="_blank"
                      whileHover={{ scale: 1.2 }}
                      className="ml-1 text-orange-500"
                    >
                      <FiArrowUpRight size={16} />
                    </motion.a>
                  </h3>

                  <span className="text-sm text-gray-500">
                    03/2026 – Present | San Jose, CA
                  </span>
                </div>

                <div className="mt-3 h-[1px] bg-gray-300" />

                {/* FULL TEXT (UNCHANGED) */}
                <div className="mt-4 space-y-4 text-sm text-gray-600">

                  <div>
                    <p className="font-medium text-indigo-600">
                      AI Threat Intelligence
                    </p>

                    <ul className="mt-2 list-disc pl-5 space-y-2">
                      <li>Analyzed vulnerabilities in machine learning systems (adversarial attacks, data poisoning, model extraction) as part of AI threat intelligence instruction</li>
                      <li>Developed <span className="font-semibold">hands-on code</span> examples and agentic AI workflows using <span className="font-semibold">Copilot, Cursor, Claude, Gemini</span> to demonstrate AI security concepts, generate code, debug issues, and assist students in building projects more efficiently</li>
                      <li>Mentored <span className="font-semibold">25+</span> graduate students on AI security, threat modeling, and risk mitigation through case studies and discussionsg</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-medium text-indigo-600">
                      Global Business
                    </p>

                    <ul className="mt-2 list-disc pl-5 space-y-2">
                      <li>Tutored 60+ students on global business concepts including international markets, strategy, and economic policy, supporting them through assignments, case studies, and analytical frameworks to understand real-world business environments</li>
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* SOFTWARE DEV */}
            <motion.div variants={item} className="flex gap-4">
              <img src="/karkinos_logo.png" className="w-12 h-12 rounded-lg bg-white border shadow-sm" />

              <div className="flex-1">

                <div className="flex justify-between items-start">

                  <h3 className="text-lg font-medium text-black flex items-center gap-1">
                    Software Developer
                    <span className="text-gray-400">|</span>
                    Karkinos Healthcare

                    <motion.a href="https://www.karkinos.in/" target="_blank" whileHover={{ scale: 1.2 }} className="ml-1 text-orange-500">
                      <FiArrowUpRight size={16} />
                    </motion.a>
                  </h3>

                  <span className="text-sm text-gray-500">
                    05/2021 – 12/2024 | Bangalore
                  </span>

                </div>

                <div className="mt-3 h-[1px] bg-gray-300" />

                <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-2">

                  <li>Developed and maintained <span className="font-semibold">scalable microservices using Java, Spring Boot, JPA on Google Cloud</span> for healthcare data processing</li>
                  <li>Spearheaded <span className="font-semibold">test automation initiative</span> using JUnit, TestNG, Selenium, improving test coverage and reducing testing time by <span className="font-semibold">~30%</span></li>
                  <li>Optimized <span className="font-semibold">PostgreSQL database performance</span> by implementing <span className="font-semibold">Redis caching</span>, reducing average response time from <span className="font-semibold">2 seconds to 500 milliseconds</span> and supporting <span className="font-semibold">3× user growth</span></li>
                  <li>Built and orchestrated <span className="font-semibold">15+ production data pipelines</span> using Python and Apache Airflow, integrating <span className="font-semibold">machine learning models</span> for automated analytics and workflows using Metabase, PowerBI, Tableau</li>
                  <li>Developed <span className="font-semibold">REST APIs</span> using Python (Flask, FastAPI) with PostgreSQL, MongoDB, and Oracle DB, improving <span className="font-semibold">latency by 40%</span> and maintaining <span className="font-semibold">99.9% availability</span></li>
                  <li>Led <span className="font-semibold">end-to-end production engineering</span>, including logging, monitoring, database optimization, and CI/CD pipelines using Jenkins and Docker, reducing <span className="font-semibold">release cycles by 45%</span> and <span className="font-semibold">incident resolution time by 20%</span>, while <span className="font-semibold">mentoring 3 new hires and 8 interns</span> and contributing to team growth from <span className="font-semibold">3 to 25 engineers</span></li>

                </ul>
              </div>
            </motion.div>

            {/* INTERN */}
            <motion.div variants={item} className="flex gap-4">
              <img src="/karkinos_logo.png" className="w-12 h-12 rounded-lg bg-white border shadow-sm" />

              <div className="flex-1">

                <div className="flex justify-between items-start">

                  <h3 className="text-lg font-medium text-black flex items-center gap-1">
                    AI Technology Intern
                    <span className="text-gray-400">|</span>
                    Karkinos Healthcare
                    <motion.a href="https://www.karkinos.in/" target="_blank" whileHover={{ scale: 1.2 }} className="ml-1 text-orange-500">
                      <FiArrowUpRight size={16} />
                    </motion.a>
                  </h3>

                  <span className="text-sm text-gray-500">
                    11/2020 – 04/2021 | Bangalore
                  </span>

                </div>

                <div className="mt-3 h-[1px] bg-gray-300" />

                <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-2">

                  <li>Developed <span className="font-semibold">openEHR-aligned healthcare data systems</span> and a <span className="font-semibold">full-stack SaaS platform (Spring + React)</span>, leveraging Firebase and EHRbase (MongoDB) for <span className="font-semibold">scalable storage and real-time data access</span>, supporting <span className="font-semibold">10,000+ daily API requests</span> with <span className="font-semibold">99.9% availability</span></li>

                  <li>Built <span className="font-semibold">RESTful APIs and data pipelines</span> using Python (Flask) for <span className="font-semibold">data processing, validation, and integration with machine learning workflows</span>, including <span className="font-semibold">data preprocessing and feature preparation</span></li>

                  <li>Collaborated with <span className="font-semibold">cross-functional teams</span> on debugging, testing, and improving <span className="font-semibold">system reliability in production environments</span></li>

                </ul>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }}>

          <h2 className="text-2xl font-semibold text-black">
            Achievements
          </h2>

          <motion.div variants={container} initial="hidden" whileInView="visible"
            className="mt-6 border-l-2 border-blue-500 pl-6 space-y-5 text-sm text-gray-700">

            <motion.p variants={item}><strong>2026</strong> | Selected for Qualcomm and Google LiteRT Hackathon</motion.p>
            <motion.p variants={item}><strong>2025</strong> | Awarded Star Project at NVIDIA Hackathon</motion.p>
            <motion.p variants={item}><strong>2023</strong> | Received Sprint Star award for successfully deploying 15+ production data pipelines using Python and Apache Airflow</motion.p>
            <motion.p variants={item}><strong>2022</strong> | 4+ LinkedIn badges Earned for proficiency </motion.p>
            <motion.p variants={item}><strong>2021</strong> | Placed in top 1% nationally(India) in TCS Digital Cadre coding challenge among over 150,000 participants.</motion.p>

            <motion.div variants={item}>
              <p>
                <strong>2020</strong> | Published research paper:{" "}
                <a
                  href="https://www.researchgate.net/publication/344026423_Twitter_Sentimental_Analysis_using_Hadoop_Ecosystem"
                  target="_blank"
                  className="text-indigo-600 font-medium hover:underline inline-flex items-center gap-1"
                >
                  “Twitter Sentiment Analysis using Hadoop Ecosystem”
                  <FiArrowUpRight size={14} />
                </a>
              </p>
              <span className="text-gray-500">
                Lavanya Bandla, Rajasekaran Rajkumar, Jolly Masih
              </span>
            </motion.div>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
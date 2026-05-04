import { motion } from "framer-motion";
import { useState } from "react";

export default function Certifications() {
  const [filter, setFilter] = useState("All");

  const filters = [
    "All",
    "Coursera",
    "LinkedIn",
    "IBM",
  ];

  const certs = [
    {
      title: "Big Data Modeling and Management Systems",
      category: "Coursera",
      image: "/big_data.png",
      link: "https://www.coursera.org/account/accomplishments/verify/SPDS6QL6DZYN",
    },
    {
      title: "Machine Learning with Python",
      category: "IBM",
      image: "/ibm.png",
      link: "https://www.credly.com/badges/2957afca-d041-4c98-a6d8-bc75c01724e5/linked_in",
    },
    {
      title: "Artificial Itelligence Fundations: Machine Learning",
      category: "LinkedIn",
      image: "/AI_Linkedin.png",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:6799388435569348608/",
    },
    {
      title: "Beginning SQL Server",
      category: "Coursera",
      image: "/sql.png",
      link: "https://www.coursera.org/account/accomplishments/verify/DYXLDZAZA947",
    },
    {
      title: "Power BI Desktop - Project",
      category: "Coursera",
      image: "/powerbi.png",
      link: "https://www.coursera.org/account/accomplishments/verify/8666H3J42P9P",
    },
    {
      title: "Cloud Computing",
      category: "Coursera",
      image: "/cloud.png",
      link: "https://www.coursera.org/account/accomplishments/verify/RTAR53VM56MB",
    },
  ];

  const filteredCerts =
    filter === "All"
      ? certs
      : certs.filter((c) => c.category === filter);

  return (
    <section id="certifications" className="pt-10">
      <div className="max-w-6xl">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-black"
        >
          Certifications
        </motion.h2>

        {/* UNDERLINE */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          className="mt-3 h-[4px] bg-orange-500 rounded-full"
        />

        {/* FILTERS */}
        <div className="mt-10 flex flex-wrap gap-6 text-sm">

          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-full transition ${
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
        <div className="mt-12 grid md:grid-cols-3 gap-10">

          {filteredCerts.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="group block"
            >

              <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">

                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition"
                />

              </div>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}
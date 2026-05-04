import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="pt-10">
      <div className="max-w-5xl">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-semibold text-black"
        >
          Education
        </motion.h2>

        {/* UNDERLINE */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "140px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 h-[4px] bg-orange-500 rounded-full"
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex items-center gap-10"
        >

          {/* LOGO (NO CIRCLE) */}
          <img
            src="/image.png"
            alt="SJSU"
            className="w-28 h-28 object-contain"
          />

          {/* TEXT */}
          <div className="flex-1">

            <h3 className="text-2xl font-semibold text-black">
              M.S. Artificial Intelligence
            </h3>

            <p className="mt-3 text-gray-700 text-lg">
              San Jose State University, San Jose, CA
            </p>

            <p className="mt-3 text-gray-600">
              Expected Graduation: <span className="font-medium">Dec 2026</span>
            </p>

            <p className="mt-2 text-gray-600">
              GPA: <span className="font-medium">3.6 / 4.0</span>
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";
import projects from "../data/projects.json";
import codeSamples from "../data/samples.json";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 50,
    },
  }),
};

export default function Home() {
  return (
    <section className="px-4 py-12 text-gray-100 max-w-6xl mx-auto space-y-20">
      {/* Projects Section */}
      <div>
        <h2 className="mb-12 text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, link }, i) => (
            <motion.a
              key={title}
              href={link}
              className="relative block rounded-xl border border-transparent bg-gray-800/80 backdrop-blur-sm p-6 shadow-md shadow-purple-700/20 transition-transform transform hover:scale-[1.05] hover:shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
              <p className="text-gray-300">{description}</p>
              <span className="absolute top-4 right-4 text-purple-400 text-xl">→</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Code Samples Section */}
      <div>
        <h2 className="mb-12 text-4xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Open Source Code Samples
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {codeSamples.map(({ title, description, link }, i) => (
            <motion.a
              key={title}
              href={link}
              className="relative block rounded-xl border border-transparent bg-gray-800/80 backdrop-blur-sm p-6 shadow-md shadow-purple-700/20 transition-transform transform hover:scale-[1.05] hover:shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <h3 className="mb-3 text-2xl font-semibold">{title}</h3>
              <p className="text-gray-300">{description}</p>
              <span className="absolute top-4 right-4 text-purple-400 text-xl">→</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
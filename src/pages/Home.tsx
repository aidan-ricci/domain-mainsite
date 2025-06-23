import { motion } from "framer-motion";
import projects from "../data/projects.json";
import codeSamples from "../data/samples.json";
import blogs from "../data/blogs.json";
import type { Variants, TargetAndTransition } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number): TargetAndTransition => ({
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
    <div className="min-h-screen bg-gray-900">
      
      {/* Main content */}
      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Projects Section */}
          <section className="mb-16 mt-16">
            <h2 className="mb-8 sm:mb-12 md:mb-16 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center sm:text-left">
              Live Projects
            </h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map(({ title, description, link }, i) => (
                <motion.a
                  key={title}
                  href={link}
                  className="group relative flex flex-col rounded-xl border border-gray-700/50 bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg shadow-purple-700/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  whileInView="visible"
                  initial="hidden"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200 pr-8">
                      {title}
                    </h3>
                    <span className="text-purple-400 text-xl sm:text-2xl opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                      →
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow">
                    {description}
                  </p>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Code Samples Section */}
          <section className="mb-16">
            <h2 className="mb-8 sm:mb-12 md:mb-16 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center sm:text-left">
              Open Source Code Samples
            </h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {codeSamples.map(({ title, description, link }, i) => (
                <motion.a
                  key={title}
                  href={link}
                  className="group relative flex flex-col rounded-xl border border-gray-700/50 bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg shadow-purple-700/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200 pr-8">
                      {title}
                    </h3>
                    <span className="text-purple-400 text-xl sm:text-2xl opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                      →
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow">
                    {description}
                  </p>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Code Samples Section */}
          <section className="mb-16">
            <h2 className="mb-8 sm:mb-12 md:mb-16 text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center sm:text-left">
              Blog Posts
            </h2>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {blogs.map(({ title, description, link }, i) => (
                <motion.a
                  key={title}
                  href={link}
                  className="group relative flex flex-col rounded-xl border border-gray-700/50 bg-gray-800/80 backdrop-blur-sm p-6 sm:p-8 shadow-lg shadow-purple-700/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 focus:outline-none focus:ring-4 focus:ring-purple-400/50"
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-200 pr-8">
                      {title}
                    </h3>
                    <span className="text-purple-400 text-xl sm:text-2xl opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0">
                      →
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow">
                    {description}
                  </p>
                </motion.a>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
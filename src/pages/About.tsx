import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      
      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <motion.section 
            className="text-center mb-16 sm:mb-20"
            variants={itemVariants}
          >
            <div className="relative inline-block mb-8">
              <img
                src="/profile_picture.jpg"
                alt="Aidan Ricci"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-purple-500 border-opacity-30 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-20"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate Solutions Architect focused on building scalable and efficient applications
            </p>
          </motion.section>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* About Content */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                My Story
              </h2>
              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Aidan is a solutions architect in the AWS Public Sector division working with U.S. federal government health agencies. With deep expertise in AWS artificial intelligence and machine learning (AI/ML) services, he helps organizations transform their operations through cloud-based innovation. Aidan focuses on developing technical architectures and proof-of-concept demonstrations that bridge traditional IT systems with cutting-edge AI capabilities so customers can enhance their service delivery and operational efficiency.
                </p>
                <p>
                  When I'm not working, you'll find me coding side projects, cooking, or lifting.
                </p>
              </div>
              
              {/* Skills */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Technologies I Work With
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'C++', 'MongoDB','PostgreSQL', 'Pinecone', 'AWS', 'Docker', 'Agentic AI', 'DevOps', 'ML Finetuning'].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gray-800 text-purple-300 rounded-full border border-purple-500 border-opacity-30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Contact & Info */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                Let's Connect
              </h2>
              
              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:aiqr25@gmail.com"
                  className="group flex items-center p-4 rounded-xl bg-gray-800 bg-opacity-80 backdrop-blur-sm border border-gray-700 border-opacity-50 hover:border-purple-500 hover:border-opacity-30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-5 h-5 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300 text-sm">aiqr25@gmail.com</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://github.com/aidan-ricci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 rounded-xl bg-gray-800 bg-opacity-80 backdrop-blur-sm border border-gray-700 border-opacity-50 hover:border-purple-500 hover:border-opacity-30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-5 h-5 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-gray-300 text-sm">https://github.com/aidan-ricci</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/aidan-ricci/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center p-4 rounded-xl bg-gray-800 bg-opacity-80 backdrop-blur-sm border border-gray-700 border-opacity-50 hover:border-purple-500 hover:border-opacity-30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-5 h-5 mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-gray-300 text-sm">https://www.linkedin.com/in/aidan-ricci/</p>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Washington, D.C.</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <svg className="w-5 h-5 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v1a1 1 0 01-.793.976l-1.596.319a1 1 0 00-.793.976v5.5a1 1 0 11-2 0v-5.5a1 1 0 00-.793-.976l-1.596-.319A1 1 0 0112 8V7a1 1 0 011-1z" />
                  </svg>
                  <span>Available for new opportunities</span>
                </div>
              </div>

              {/* Resume Download
              <div className="mt-8">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
               */}
            </motion.section>
          </div>

          {/* Fun Facts Section 
          <motion.section 
            className="mt-16 sm:mt-20"
            variants={itemVariants}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
              Quick Facts
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 rounded-xl bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 border-opacity-50">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 border-opacity-50">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-300">Projects Built</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 border-opacity-50">
                <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-gray-300">GitHub Commits</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-800 bg-opacity-60 backdrop-blur-sm border border-gray-700 border-opacity-50">
                <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300">Blog Posts</div>
              </div>
            </div>
          </motion.section>
          */}
        </motion.div>
      </main>
    </div>
  );
}
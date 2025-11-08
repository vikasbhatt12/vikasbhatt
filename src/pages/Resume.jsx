import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, MapPin, Calendar, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Resume = () => {
  const achievements = [
    'Achieved (1561) Contest rating on Leetcode',
    'Achieved 2-star rating (1457) on Codechef',
    'Solved 500+ coding problems on LeetCode and GeeksForGeeks'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-primary to-secondary -z-10"></div>
      
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-gradient-start transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="section-title gradient-text">
            Resume
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <a
              href="/VikasBhatt.pdf"
              download
              className="btn group"
            >
              <Download size={18} className="mr-2" />
              Download PDF
            </a>
            <a
              href="tel:+919610386158"
              className="btn-outline"
            >
              +91 9610386158
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Education */}
          <motion.div variants={itemVariants} className="card">
            <h2 className="text-3xl font-heading font-bold gradient-text mb-8">Education</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gradient-start pl-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Indian Institute of Information Technology Guwahati
                </h3>
                <p className="text-gray-300 mb-2">Bachelor of Technology in Electronics and Communication Engineering</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>Dec 2021 – June 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} />
                    <span>CPI: 7.7</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div variants={itemVariants} className="card">
            <h2 className="text-3xl font-heading font-bold gradient-text mb-8">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gradient-start pl-6">
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Web Developer Intern
                </h3>
                <p className="text-gray-300 mb-2">Tamizhan Skills</p>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>June 2025 – July 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Remote</span>
                  </div>
                </div>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-gradient-start mr-2 mt-1">•</span>
                    Designed and developed multiple responsive front-end websites, including a modern e-commerce product page and a startup landing page
                  </li>
                  <li className="flex items-start">
                    <span className="text-gradient-start mr-2 mt-1">•</span>
                    Built a comprehensive Student Management Dashboard from scratch with full CRUD functionality
                  </li>
                  <li className="flex items-start">
                    <span className="text-gradient-start mr-2 mt-1">•</span>
                    Contributed to the development of a complete college club website using React and Node.js
                  </li>
                  <li className="flex items-start">
                    <span className="text-gradient-start mr-2 mt-1">•</span>
                    Applied modern styling techniques using Tailwind CSS for professional-grade interfaces
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Technical Skills */}
          <motion.div variants={itemVariants} className="card">
            <h2 className="text-3xl font-heading font-bold gradient-text mb-8">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-heading font-semibold text-white mb-3">Languages</h4>
                <p className="text-gray-300">C++, Java, JavaScript, Python, SQL</p>
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-white mb-3">Frontend</h4>
                <p className="text-gray-300">React.js, Redux, HTML, CSS, Tailwind CSS, MUI</p>
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-white mb-3">Backend</h4>
                <p className="text-gray-300">Node.js, Express.js, Socket.io</p>
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-white mb-3">Databases</h4>
                <p className="text-gray-300">MongoDB, MySQL</p>
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-white mb-3">Developer Tools</h4>
                <p className="text-gray-300">Git, GitHub, VS Code, Postman</p>
              </div>
              <div>
                <h4 className="text-lg font-heading font-semibold text-white mb-3">Skill Set</h4>
                <p className="text-gray-300">Competitive Programming, Data Structures, Algorithms, OOPs, DBMS, MERN Stack</p>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="card">
            <h2 className="text-3xl font-heading font-bold gradient-text mb-8">Achievements</h2>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <span className="text-gradient-start mr-3 mt-1">▸</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Download Button Bottom */}
          <motion.div variants={itemVariants} className="text-center">
            <a
              href="/VikasBhatt.pdf"
              download
              className="btn group text-lg"
            >
              <Download size={20} className="mr-2" />
              Download Full Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
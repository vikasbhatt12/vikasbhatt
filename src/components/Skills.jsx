import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C++', 'Java', 'JavaScript', 'Python', 'SQL']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'Redux', 'HTML', 'CSS', 'Tailwind CSS', 'MUI']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Socket.io']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Github', 'VS Code', 'Postman']
    },
    {
      title: 'Concepts',
      skills: ['Data Structures', 'Algorithms', 'OOPs', 'DBMS', 'MERN Stack']
    }
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
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-secondary"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">
            Technical Skills
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card text-center group"
            >
              <h3 className="text-xl font-heading font-bold text-white mb-6 group-hover:gradient-text transition-all duration-300">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-dark-100 border border-dark-200 text-gray-300 rounded-lg text-sm font-medium hover:border-gradient-start/50 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
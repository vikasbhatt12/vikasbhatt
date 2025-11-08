import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FeaturedProjects = () => {
  const featuredProjects = [
    {
      title: 'WriteFlow',
      description: 'A full-stack MERN application designed as a Secure Markdown Blog Platform featuring user authentication and full CRUD functionality.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      liveDemo: 'https://write-flow-tawny.vercel.app/',
      github: 'https://github.com/vikasbhatt12/WriteFlow',
      image: '/project1.png'
    },
    {
      title: 'E-Commerce',
      description: 'Full-stack e-commerce website with user authentication, cart, and order management features including admin dashboard.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS'],
      liveDemo: 'https://mern-ecommerce-app-chi.vercel.app',
      github: 'https://github.com/vikasbhatt12/mern-ecommerce-app',
      image: '/project2.png'
    },
    {
      title: 'EliteChess',
      description: 'Real-time multiplayer chess platform with Chess AI using Min-Max Algorithm and Alpha-Beta Pruning.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MUI', 'Firebase'],
      liveDemo: 'https://elite-chess.vercel.app',
      github: 'https://github.com/vikasbhatt12/EliteChess',
      image: '/project3.png'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-primary"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="section-title gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work demonstrating skills in{' '}
            <span className="gradient-text font-semibold">full-stack development</span> and innovative problem-solving.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="card group"
            >
              {/* Project Image */}
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
              </div>

              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gradient-start group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-dark-100 text-gray-300 rounded-full text-sm font-medium border border-dark-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-dark-200">
                <a
                  href={project.liveDemo}
                  className="flex items-center gap-2 text-gray-300 hover:text-gradient-start transition-colors group/link"
                >
                  <ExternalLink size={18} />
                  <span className="group-hover/link:translate-x-0.5 transition-transform">Live Demo</span>
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-300 hover:text-gradient-start transition-colors group/link"
                >
                  <Github size={18} />
                  <span className="group-hover/link:translate-x-0.5 transition-transform">GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Link to="/projects" className="btn group">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedProjects
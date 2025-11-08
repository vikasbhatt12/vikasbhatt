import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const Projects = () => {
  const allProjects = [
    {
      title: 'WriteFlow',
      description: 'Engineered a full-stack MERN application, WriteFlow, designed as a Secure Markdown Blog Platform featuring user authentication and full CRUD functionality. Developed a responsive, real-time Markdown editor using react-markdown, supporting syntax highlighting and GitHub Flavored Markdown (GFM).',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'React Context API', 'Tailwind CSS'],
      liveDemo: 'https://write-flow-tawny.vercel.app/',
      github: 'https://github.com/vikasbhatt12/WriteFlow',
      image: '/project1.png',
      featured: true
    },
    {
      title: 'E-Commerce',
      description: 'Developed a full-stack e-commerce website with user authentication, cart, and order management features. Built RESTful APIs using Node.js and Express.js and integrated MongoDB for database operations. Implemented an admin dashboard for managing products, users, and orders.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux', 'Tailwind CSS'],
      liveDemo: 'https://mern-ecommerce-app-chi.vercel.app',
      github: 'https://github.com/vikasbhatt12/mern-ecommerce-app',
      image: '/project2.png',
      featured: true
    },
    {
      title: 'EliteChess',
      description: 'Engineered a real-time multiplayer chess platform using React and Node.js, implementing features such as player matchmaking, draw offers, resignations, and time controls. Designed a Chess AI with Min-Max Algorithm and Alpha-Beta Pruning, resulting in improved solo gameplay and a 40% reduction in move computation time.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MUI', 'Firebase'],
      liveDemo: 'https://elite-chess.vercel.app',
      github: 'https://github.com/vikasbhatt12/EliteChess',
      image: '/project3.png',
      featured: true
    },
    {
      title: 'MYJob Portal',
      description: 'Developed a full-stack job portal application with distinct functionalities for job seekers and employers. Built RESTful APIs using Node.js and Express.js, integrated MongoDB for data management, and implemented secure JWT authentication. Designed a responsive frontend with React.js, managed state with Redux, and styled the UI using Tailwind CSS. Included an admin panel for employers to post jobs, manage applicants, and track application statuses.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux', 'Tailwind CSS'],
      liveDemo: 'https://mern-job-portal-orcin.vercel.app/',
      github: 'https://github.com/vikasbhatt12/mern-job-portal',
      image: '/project4.png',
      featured: false
    },
    {
      title: 'FlickExplorer',
      description: 'Developed a feature-rich, responsive movie search app using React and Tailwind CSS, offering optimized performance across all devices. Integrated advanced search capabilities that allow users to find movies by title and explore detailed information with real-time filtering and sorting. Enhanced state management using Redux Toolkit, improving data-fetching efficiency and maintaining consistency through reusable UI components.',
      technologies: ['React.js', 'Redux Toolkit', 'Tailwind CSS'],
      liveDemo: 'https://movie-app-nu-amber.vercel.app/',
      github: 'https://github.com/vikasbhatt12/movieApp',
      image: '/project5.png',
      featured: false
    },
    {
      title: 'Google Gemini Clone',
      description: 'Engineered a conversational AI web app using React and Google Gemini API to simulate real-time, human-like chat interactions. Designed a responsive, modern interface compatible across all devices. Implemented efficient API handling for dynamic natural language responses with 95% accuracy and optimized state management to reduce response latency by 30%, significantly enhancing overall user experience.',
      technologies: ['React.js', 'Google Gemini API', 'CSS'],
      liveDemo: 'https://gemini-seven-zeta.vercel.app/',
      github: 'https://github.com/vikasbhatt12/Gemini',
      image: '/project6.png',
      featured: false
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-primary to-secondary -z-10"></div>
      
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-gradient-start transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="section-title gradient-text">
            All Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my complete portfolio of web development projects, 
            showcasing my journey in <span className="gradient-text font-semibold">full-stack development</span> and problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {allProjects.map((project, index) => (
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
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-gradient-start to-gradient-end text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-heading font-bold text-white group-hover:gradient-text transition-all duration-300 mb-4">
                {project.title}
              </h3>
              
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
      </div>
    </div>
  )
}

export default Projects
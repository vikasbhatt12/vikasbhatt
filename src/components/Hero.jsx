import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, MapPin } from 'lucide-react'

const Hero = () => {
  const techStack = ['C++', 'Java', 'JavaScript', 'Python', 'SQL', 'React', 'Node.js', 'MongoDB']

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
    <section id="home" className="min-h-screen relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gradient-start/10 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm border border-dark-200 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles size={16} className="text-gradient-start" />
              <span className="text-sm text-gray-300">MERN Full Stack Developer</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-heading font-bold mb-6"
            >
              <span className="gradient-text">Vikas</span>
              <br />
              <span className="text-white">Bhatt</span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 mb-6"
            >
              <MapPin size={20} />
              <span>Kota, Rajasthan</span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              B.Tech Student at <span className="gradient-text font-semibold">IIIT Guwahati</span>. 
              Passionate about full-stack development and building innovative web solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <p className="text-lg text-gray-400 mb-4">TECH STACK</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-secondary border border-dark-200 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects" className="btn">
                View My Projects
              </a>
              <a href="/resume" className="btn-outline">
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-gradient-start to-gradient-end rounded-full animate-float"></div>
              <img
                src="/profile.png"
                alt="Vikas Bhatt"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce w-8 h-8 text-gradient-start" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
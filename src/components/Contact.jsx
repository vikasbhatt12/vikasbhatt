import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9610386158',
      href: 'tel:+919610386158'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'vikasbhatt12082003@gmail.com',
      href: 'mailto:vikasbhatt12082003@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kota, Rajasthan',
      href: 'https://www.google.com/maps/place/Kota,+Rajasthan/@25.1735354,75.7645616,12z/data=!3m1!4b1!4m6!3m5!1s0x396f9b30c41bb44d:0x5f5c103200045588!8m2!3d25.2138156!4d75.8647527!16zL20vMDRzdzh6?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D'
    }
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vikasbhatt02'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vikasbhatt12'
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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-primary"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Interested in collaborating or have a project in mind? 
            Feel free to reach out - I'm always open to discussing new opportunities.
          </motion.p>

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={info.href}
                whileHover={{ y: -5 }}
                className="card text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-gradient-start to-gradient-end rounded-xl">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">
                  {info.label}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {info.value}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-4 bg-secondary border border-dark-200 rounded-xl text-gray-400 hover:text-gradient-start transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
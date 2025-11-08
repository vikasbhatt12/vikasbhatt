import React from 'react'
import Hero from '../components/Hero'
import FeaturedProjects from '../components/FeaturedProjects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
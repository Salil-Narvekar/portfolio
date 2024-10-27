import React from 'react'
import TopNav from '../NavigationBars/TopNav/TopNav'
import SectionNav from '../NavigationBars/SectionNav/SectionNav'
import Home from '../Sections/Home'
import About from '../Sections/About'
import FeaturedProjects from '../Sections/FeaturedProjects'
import Certifications from '../Sections/Certifications'
import Contact from '../Sections/Contact'
import Footer from '../Sections/Footer'

const landingPage = () => {
  return (
    <>
      <TopNav />
      <SectionNav />
      <Home />
      <About />
      <FeaturedProjects />
      <Certifications/>
      <Contact />
      <Footer/>
    </>
  )
}

export default landingPage
import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Skill from './components/Experience/Skills'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navigation/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Service from './components/Service/Service'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Skill />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App

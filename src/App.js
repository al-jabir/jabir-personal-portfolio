import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navigation/Navbar'
import Particle from './components/Particles/Particle'
import Portfolio from './components/Portfolio/Portfolio'
import Skill from './components/Skills/Skills'

const App = () => {
  return (
    <>
      <Particle />
      <Header />
      <Navbar />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App

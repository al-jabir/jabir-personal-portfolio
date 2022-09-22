import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navigation/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Service from './components/Service/Service'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div style={{ textAlign: 'center', fontSize: '20px' }}>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

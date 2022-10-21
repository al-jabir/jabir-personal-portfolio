import React from 'react'
import Me from '../../assets/aj-me2.jpeg'
import CTA from './CTA'
import './Header.css'
import Social from './Social'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Al Jabir</h1>
        <h5 className='text-light'>Frontend Develover</h5>
        <CTA />
        <Social />
        <div className='me'>
          <img src={Me} alt='me' />
        </div>
        <a href='#contact' className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header

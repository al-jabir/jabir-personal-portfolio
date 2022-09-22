import React from 'react'

import {
  BiBookmarkHeart,
  BiHomeHeart,
  BiMessageRoundedDetail,
  BiUser,
} from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
      <a href="#home">
        <BiHomeHeart />
      </a>
      <a href="#about">
        <BiUser />
      </a>
      <a href="#experience">
        <BiBookmarkHeart />
      </a>
      <a href="#service">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <BiMessageRoundedDetail />
      </a>
    </nav>
  )
}

export default Navbar

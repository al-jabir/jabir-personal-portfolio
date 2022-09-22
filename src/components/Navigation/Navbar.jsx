import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {
  BiBookmarkHeart,
  BiHomeHeart,
  BiMessageRoundedDetail,
  BiUser,
} from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { RiServiceLine } from 'react-icons/ri'

import styled from './navbar.module.css'
const Navbar = () => {
  const [bar, setBar] = useState(false)
  return (
    <header className={styled.header}>
      <span>Jabir</span>
      <nav>
        <ul
          className={
            bar ? [styled.menu, styled.active].join(' ') : [styled.menu]
          }
        >
          <li>
            <a href="#home">
              <BiHomeHeart />
            </a>
          </li>
          <li>
            <a href="#about">
              <BiUser />
            </a>
          </li>
          <li>
            <a href="#experience">
              <BiBookmarkHeart />
            </a>
          </li>
          <li>
            <a href="#service">
              <RiServiceLine />
            </a>
          </li>
          <li>
            <a href="#constact">
              <BiMessageRoundedDetail />
            </a>
          </li>
        </ul>
      </nav>
      <div className={styled.btn_mobile} onClick={() => setBar(!bar)}>
        {bar ? <AiOutlineClose size={30} /> : <FaBars size={30} />}
      </div>
    </header>
  )
}

export default Navbar

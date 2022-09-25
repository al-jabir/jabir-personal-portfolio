import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsMessenger } from 'react-icons/bs'
const Social = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/jabirdevs"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.facebook.com/aljabirceo"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook />
      </a>
      <a href="https://github.com/al-jabir" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://m.me/aljabirceo" target="_blank" rel="noreferrer">
        <BsMessenger />
      </a>
    </div>
  )
}

export default Social

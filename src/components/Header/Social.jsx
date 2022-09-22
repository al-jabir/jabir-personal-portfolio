import React from 'react'
import { BsFacebook, BsGithub, BsLinkedin, BsMessenger } from 'react-icons/bs'
const Social = () => {
  return (
    <div className="header_socials">
      <a href="#linkedin.com/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="facebook" target="_blank">
        <BsFacebook />
      </a>
      <a href="github" target="_blank">
        <BsGithub />
      </a>
      <a href="messenger">
        <BsMessenger />
      </a>
    </div>
  )
}

export default Social

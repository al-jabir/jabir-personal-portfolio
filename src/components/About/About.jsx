import React from 'react'
import { AiFillFolderOpen, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'
import Img from '../../assets/me-about.jpg'
import './About.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={Img} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2 Years Years working</small>
            </article>
            <article className="about_card">
              <AiOutlineUsergroupAdd className="about_icon" />
              <h5>Clients</h5>
              <small>150 worldwide</small>
            </article>
            <article className="about_card">
              <AiFillFolderOpen className="about_icon" />
              <h5>Project</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            I'm a MERN stack Developer. I can see myself in a top-ranking
            position in the web developing market. True that this market is
            growing higher day by day but my skills are also growing as I am a
            very keen learner and technology lover person. That's why I find
            this sector very interesting and always work with my full enthusiasm
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About

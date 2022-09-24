import React from 'react'
import { AiFillFolderOpen, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'
import Img from '../../assets/aj-me2.jpeg'
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
              <small>1.5+ Years working</small>
            </article>
            <article className="about_card">
              <AiOutlineUsergroupAdd className="about_icon" />
              <h5>Clients</h5>
              <small>150+ worldwide</small>
            </article>
            <article className="about_card">
              <AiFillFolderOpen className="about_icon" />
              <h5>Project</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hello !! My name is <span className="me-t">Al Jabir</span> . I want
            to gain confidence and fame using my potential in this position, and
            express my innovative creative skills for self and company growth. I
            am a hardworking and quick learner person. I believe hard work is
            the only way to success. Love to learn new technology and try to
            improve myself.
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

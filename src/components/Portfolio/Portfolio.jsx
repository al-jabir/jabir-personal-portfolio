import React from 'react'
import port1 from '../../assets/portfolio1.jpg'
import port2 from '../../assets/portfolio2.jpg'
import port3 from '../../assets/portfolio3.jpg'
import port4 from '../../assets/portfolio4.jpg'
import port5 from '../../assets/portfolio5.png'
import port6 from '../../assets/portfolio6.jpg'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={port1} alt="port1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="port_btn">
            <a
              href="https://github.com/al-jabir"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/al-jabir"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={port2} alt="port2" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="port_btn">
            <a
              href="https://github.com/al-jabir"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/al-jabir"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={port3} alt="port3" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="port_btn">
            <a
              href="https://github.com/al-jabir"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/al-jabir"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={port4} alt="port4" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="port_btn">
            <a
              href="https://github.com/al-jabir"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/al-jabir"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={port5} alt="port5" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="port_btn">
            <a
              href="https://github.com/al-jabir"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/al-jabir"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={port6} alt="port6" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="port_btn">
            <a
              href="https://github.com/al-jabir"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://github.com/al-jabir"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio

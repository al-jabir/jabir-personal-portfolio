import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id="container">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experienc_container ">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>Node</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>Mongodb</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>graphQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="details">
              <BsPatchCheckFill />
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

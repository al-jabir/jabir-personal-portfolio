import React from 'react'
import skillData from './SkillData'
import './skills.css'

const Skill = () => {
  return (
    <section id="Skills">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container skills-container">
        {skillData.map(({ id, icon, title }) => {
          return (
            <>
              <div key={id}>
                <img src={icon} alt="" />
                <span>{title}</span>
              </div>
            </>
          )
        })}
      </div>
    </section>
  )
}

export default Skill

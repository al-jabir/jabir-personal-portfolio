import Data from './Data'
import './Portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {Data.map((port) => {
          const { id, img, title, github, demo } = port
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item_img">
                <img src={img} alt={`port${id}`} />
              </div>
              <h3>{title}</h3>
              <div className="port_btn">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio

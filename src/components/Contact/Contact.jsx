import React from 'react'
import { RiMailLine, RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <RiMailLine className="icon" />
            <h4>Email</h4>
            <h5>aljabir098@gmail.com</h5>
            <a
              href="mailto:aljabir098@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="icon" />
            <h4>Messenger</h4>
            <h5>al jabir</h5>
            <a href="https://m.me/aljabirceo" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiWhatsappLine className="icon" />
            <h4>WhatsApp</h4>
            <h5>+8801725705908</h5>
            <a
              href="https://api.whatsapp.com/send?phone+8801725705908"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />

          <input type="email" name="email" placeholder="Your Email" required />

          <textarea name="message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

import { useRef } from 'react'
import Loader from 'react-loaders'
import './Contact.scss'
import emailjs from '@emailjs/browser'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_pde4s18',
        'template_oot6ggo',
        refForm.current,
        '875lYcs6Pu4Zt1dO8'
      )
      .then(
        () => {
          alert(
            'Thank you for reaching out! Your message has been successfully sent. I will get back to you as soon as possible.'
          )
        },
        () => {
          alert(
            'We apologize, but there was an issue sending your message. Please try again later or contact me directly using my contact information listed on this page'
          )
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <h1 className="page-header">Contact</h1>

        <div className="contact-body">
          <section className="contact-form-container">
            <div className="contact-text-container text-zone">
              <p className="contact-text text">
                Thank you for spending your time visting my portfolio website! I
                appreciate your interest in my work.
              </p>
              <p className="contact-text text">
                If you have any questions, opportunities, or simply wish to
                connect, please feel free to reach out using the form below or
                contact me through my provided contact.
              </p>
            </div>

            <form className="contact-form" ref={refForm} onSubmit={sendEmail}>
              <input
                className="form-input"
                type="text"
                name="name"
                id="form-name"
                placeholder="Name"
                autoComplete="name"
                required
              />

              <input
                className="form-input"
                type="email"
                name="email"
                id="form-email"
                placeholder="Email"
                autoComplete="email"
                required
              />

              <input
                className="form-input"
                type="text"
                name="subject"
                id="form-subject"
                placeholder="Subject"
                required
              />

              <textarea
                className="form-text-area"
                name="message"
                id="form-message"
                placeholder="Message"
                required
              ></textarea>

              <input
                className="form-button flat-button"
                type="submit"
                value="SEND"
              />
            </form>
          </section>

          <section className="contact-info-container">
            <h3 className="contact-info-header">Contact Information:</h3>
            <h4 className="contact-info">Email: seannoh1654@yahoo.ca</h4>
            <h4 className="contact-info">Phone: +1 604-441-6549</h4>
            {/* <h4 className="contact-info">Phone: (604)-441-6549</h4> */}
            <h4 className="contact-info">
              LinkedIn:
              <a
                className="contact-info-link"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sean-noh-310b3123a/"
              >
                <FontAwesomeIcon
                  className="contact-info-link-icon"
                  icon={faLinkedin}
                  color="#4d4d4e"
                ></FontAwesomeIcon>
              </a>
            </h4>
          </section>
        </div>
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Contact

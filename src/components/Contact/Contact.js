import { useRef } from 'react'
import Loader from 'react-loaders'
import './Contact.scss'
import emailjs from '@emailjs/browser'

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
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="contact-header-title">Contact Me</h1>
          <p className="contact-header-paragraph">
            Thank you for taking the time to view my portfolio website!
          </p>
          <p className="contact-header-paragraph">
            Feel free to reach out using either the form below or through my
            contacts on the right.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <section className="contact-info-container">
          <h2 className="contact-info-header">Contact Information:</h2>
          <h3 className="contact-info">Email: seannoh1654@yahoo.ca</h3>
          <h3 className="contact-info">Phone: (604)-441-6549</h3>
        </section>
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Contact

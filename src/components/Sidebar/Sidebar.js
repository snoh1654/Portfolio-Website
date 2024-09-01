import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeOpenText,
  faCode,
  faHouseChimneyWindow,
  faLaptopCode,
  faSheetPlastic,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src="s-logo.png" alt="logo-s" />
      </Link>

      <nav className="main-nav">
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          <FontAwesomeIcon
            icon={faHouseChimneyWindow}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon
            icon={faUserCircle}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faCode} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon
            icon={faLaptopCode}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>
      </nav>

      <ul className="socials-link">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sean-noh-310b3123a/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/snoh1654"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1n8Hi84E5lJLBmjwx-_yVYubevS714Q5I/view?usp=sharing"
          >
            <FontAwesomeIcon
              icon={faSheetPlastic}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

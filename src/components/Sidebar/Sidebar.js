import './Sidebar.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faEnvelope,
  faHome,
  faLaptopCode,
  faSheetPlastic,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle" />
      </Link>

      <nav className="main-nav">
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="skills-link"
          to="/skills"
        >
          <FontAwesomeIcon icon={faBook} color="#4d4d4e"></FontAwesomeIcon>
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
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
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
            href="https://drive.google.com/file/d/1iFbkluP_4WIDwTCi0hPhnEO-XJiCyh54/view?usp=sharing"
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

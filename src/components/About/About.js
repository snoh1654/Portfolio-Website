import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJs,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import { Loader } from 'react-loaders'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            repellendus exercitationem, dignissimos et perspiciatis officiis
            necessitatibus. Dignissimos temporibus ratione eaque cumque magnam,
            in eum, maxime tempore sit ad, placeat dolorem?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            repellendus exercitationem, dignissimos et perspiciatis officiis
            necessitatibus. Dignissimos temporibus ratione eaque cumque magnam,
            in eum, maxime tempore sit ad, placeat dolorem?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            repellendus exercitationem, dignissimos et perspiciatis officiis
            necessitatibus. Dignissimos temporibus ratione eaque cumque magnam,
            in eum, maxime tempore sit ad, placeat dolorem?
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#f04c41"></FontAwesomeIcon>
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJs} color="#EFD81D"></FontAwesomeIcon>
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="EC4V28"></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  )
}

export default About

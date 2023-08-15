import './Cube.scss'
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

const Cube = () => {
  return (
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
  )
}

export default Cube

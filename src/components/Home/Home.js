import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './Home.scss'
import Logo from '../Logo/Logo'
import Loader from 'react-loaders'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi,
            <br />
            I'm
            <img src={LogoTitle} alt="developer" />
            ean
            <br />A Software Developer
          </h1>

          <h2>Third Year Computer Science Major at UBC</h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        <Logo />
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Home

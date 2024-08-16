import { Link } from 'react-router-dom'
import './Home.scss'
import Loader from 'react-loaders'
import { useEffect, useCallback } from 'react'

const throttle = (func, limit) => {
  let inThrottle = false
  return function () {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

const Home = () => {
  const parallax = useCallback(
    throttle((e) => {
      const objects = document.querySelectorAll('.object')
      objects.forEach((move) => {
        const movingValue = move.getAttribute('data-value')
        const x = (e.clientX * movingValue) / 225
        const y = (e.clientY * movingValue) / 225

        move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'

        console.log('translateX(' + x + 'px) translateY(' + y + 'px);')
      })
    }, 20),
    []
  )

  useEffect(() => {
    const homeElement = document.getElementById('home')
    homeElement.addEventListener('mousemove', parallax)

    // Cleanup event listener on component unmount
    return () => {
      homeElement.removeEventListener('mousemove', parallax)
    }
  }, [parallax])

  return (
    <>
      <div className="container home-page" id="home">
        <div className="home-text-container text-zone">
          <div className="above-logo-container">
            <img
              src="home-images/monitor.svg"
              alt="monitor-with-code"
              className="home-vector-monitor object"
              data-value="3"
            />

            <div className="home-logo-row">
              <img
                src="home-images/keyboard.svg"
                alt="keyboard"
                className="home-vector-keyboard object"
                data-value="2"
              />
              <img
                src="home-images/mouse.svg"
                alt="mouse"
                className="home-vector-mouse object"
                data-value="2"
              />
            </div>
          </div>

          <div className="home-main-text-container">
            <h1 className="home-text-header object" data-value="-2">
              Hi, I'm Sean
              <br />A Software Developer
            </h1>
            <h2 className="home-text-sub-header object" data-value="-2">
              Third Year Computer Science Major at UBC
            </h2>

            <Link to="/contact" className="flat-button object" data-value="-2">
              CONTACT ME
            </Link>
          </div>

          <div className="below-logo-container">
            <img
              src="home-images/programmer.svg"
              alt="developer"
              className="home-vector object developer"
              data-value="3"
            />
          </div>
        </div>
        <div className="home-img-container object" data-value="5">
          <img
            className="home-img"
            src="home-images/capybara.png"
            alt="portrait"
          />
        </div>
      </div>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Home

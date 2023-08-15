import './About.scss'
import { Loader } from 'react-loaders'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>About Me</h1>
          <section className="about-me-text">
            <p>
              I am an aspiring full stack developer who loves programming
              because it offers me the opportunity to combine my critical
              thinking and creativity to create cool applications that can help
              the world. I strongly value writing readable and scalable code
              that is accessible and efficient for my clients to use.
            </p>
            <p>
              Outside of programming, I like to spend my time I have worked at
              various establishments in the past such as a Poll Clerk for
              Elections Canada and a Banquet Server for the Royal Vancouver
              Yacht Club. These experiences Outside of programming, I like to
              spend my time playing video games and watching anime.
            </p>
          </section>
        </div>
      </div>
      <Loader type="pacman"></Loader>
    </>
  )
}

export default About

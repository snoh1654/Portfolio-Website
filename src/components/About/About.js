import './About.scss'
import { Loader } from 'react-loaders'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <h1 className="page-header">About Me</h1>

        <div className="about-me-container">
          <div className="text-zone">
            <h2 className="text-header">About Me</h2>
            <p className="text">
              Hello! I'm Sean Noh, a third-year Computer Science major at the
              University of British Columbia with a passion for software
              development. I love the field because it allows me to combine my
              critical thinking and creativity to create applications that can
              make a positive impact on the world. I value solving new and
              unique problems, doing work that helps others, and continuously
              learning and applying new skills.
            </p>

            {/* <p className="text">
            Outside of programming, I like to spend my time I have worked at
            various establishments in the past such as a Poll Clerk for
            Elections Canada and a Banquet Server for the Royal Vancouver Yacht
            Club. These experiences Outside of programming, I like to spend my
            time playing video games and watching anime.
          </p> */}
          </div>
          <img
            className="about-me-img"
            src={'about-images/temp.jpg'}
            alt={' image'}
          />
        </div>

        <section className="about-grid">
          <div className="text-zone about-grid-item">
            <h2 className="text-header">Education</h2>

            <p className="text">I have taken</p>

            <p className="text">
              Outside of programming, I like to spend my time I have worked at
              various establishments in the past such as a Poll Clerk for
              Elections Canada and a Banquet Server for the Royal Vancouver
              Yacht Club. These experiences Outside of programming, I like to
              spend my time playing video games and watching anime.
            </p>
          </div>

          <div className="text-zone about-grid-item">
            <h2 className="text-header">Work Experience</h2>

            <div className="experience-container">
              <div className="experience-header">
                <span className="experience-title">
                  Teumo Health Technologies
                </span>
                <span className="experience-date">
                  August 2023 - August 2024
                </span>
              </div>

              <img
                className="experience-img"
                src={'about-images/work/ubc.png'}
                alt={' image'}
              />
            </div>

            <p className="text">
              Outside of programming, I like to spend my time I have worked at
              various establishments in the past such as a Poll Clerk for
              Elections Canada and a Banquet Server for the Royal Vancouver
              Yacht Club. These experiences Outside of programming, I like to
              spend my time playing video games and watching anime.
            </p>
          </div>

          <div className="text-zone about-grid-item">
            <h2 className="text-header">Goals and Values</h2>

            <p className="text">
              I am an aspiring full stack developer who loves programming
              because it offers me the opportunity to combine my critical
              thinking and creativity to create cool applications that can help
              the world. I strongly value writing readable and scalable code
              that is accessible and efficient for my clients to use.
            </p>

            <p className="text">
              Outside of programming, I like to spend my time I have worked at
              various establishments in the past such as a Poll Clerk for
              Elections Canada and a Banquet Server for the Royal Vancouver
              Yacht Club. These experiences Outside of programming, I like to
              spend my time playing video games and watching anime.
            </p>
          </div>

          <div className="text-zone about-grid-item">
            <h2 className="text-header">Interests and Hobbies</h2>

            <p className="text">
              I am an aspiring full stack developer who loves programming
              because it offers me the opportunity to combine my critical
              thinking and creativity to create cool applications that can help
              the world. I strongly value writing readable and scalable code
              that is accessible and efficient for my clients to use.
            </p>

            <p className="text">
              Outside of programming, I like to spend my time I have worked at
              various establishments in the past such as a Poll Clerk for
              Elections Canada and a Banquet Server for the Royal Vancouver
              Yacht Club. These experiences Outside of programming, I like to
              spend my time playing video games and watching anime.
            </p>
          </div>
        </section>
      </div>

      <Loader type="ball-grid-pulse"></Loader>
    </>
  )
}

export default About

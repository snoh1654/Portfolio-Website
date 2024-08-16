import './About.scss'
import { Loader } from 'react-loaders'
import UsedSkills from '../Projects/UsedSkills/UsedSkills'
import SkillCategory from '../Skills/SkillCategory/SkillCategory'

const About = () => {
  return (
    <>
      <div className="container about-page">
        <h1 className="page-header">About Me</h1>

        <div className="about-section">
          <div className="about-section-text-left text-zone">
            <h2 className="text-header">Education</h2>

            <p className="text">
              I am currently a third-year Computer Science major at UBC, with an
              expected graduation date in 2026.
            </p>

            <p className="text">
              I have a strong academic record with a 90.3 average and numerous
              academic recognitions such as the Science Scholar Award, Dean's
              List, and the Fred J. Muir Scholarship.
            </p>

            <p className="text">
              My coursework in Computer Science has equipped me with solid
              foundations in key areas such as:
            </p>

            <ul className="text-list">
              <li>Machine Learning</li>
              <li>Algorithms and Data Structures</li>
              <li>Relational Databases</li>
              <li>Computer Networking</li>
              <li>Operating Systems</li>
            </ul>
          </div>

          <div className="about-section-img">
            <img
              className="about-img"
              src={'about-images/work/ubc-logo.png'}
              alt={' image'}
            />
          </div>
        </div>

        <div className="about-section">
          <div className="about-section-img">
            <img
              className="about-img"
              src={'about-images/work/teumo.png'}
              alt={' image'}
            />
          </div>

          <div className="about-section-text-right text-zone">
            <h2 className="text-header">Work Experience</h2>

            <div className="experience-container">
              <div className="experience-header text">
                <span className="experience-title">
                  Teumo Health Technologies (Software Developer Intern)
                </span>
                <span className="experience-date">
                  August 2023 - August 2024
                </span>
              </div>

              <div className="text experience-paragraph">
                Teumo Health Technologies is a startup focused on redefining
                healthcare delivery for niche populations by building patient
                portals and electronic medical records. They aim to streamline
                efficiencies and deliver personalized medicine through the
                integration of AI tools.
              </div>

              <div className="text experience-paragraph">
                As a Software Developer intern at Teumo Health Technologies, I
                worked on every level of the stack and self-learned a variety of
                skills in a fast-paced environment, having a significant
                influence on our application's development.
              </div>

              <div className="text experience-paragraph">
                <span className="experience-skills">Skills Used:</span>
                <UsedSkills
                  skills={[
                    'Python',
                    'Django',
                    'Selenium',
                    'React',
                    'Bootstrap',
                    'SCSS',
                    'JQuery',
                  ]}
                ></UsedSkills>
              </div>

              <ul className="text-list">
                <li>
                  Developed the backend logic for the contacts section of the
                  patient profile page, enabling users to input home, shipping,
                  and billing addresses and phone numbers. Leveraged Django
                  forms and views, and integrated the Google Maps API for data
                  validation and cleaning before storage.
                </li>

                <li>
                  Collaborated with frontend developers to implement an
                  accessible, mobile-first design for the main patient app,
                  following the UX team's Figma design and utilizing React,
                  Bootstrap, SCSS, and jQuery.
                </li>

                <li>
                  Integrated data from the patient's activity on the app to
                  provide personalized notifications, to-dos, recommendations,
                  and system-required actions on the patient dashboard based on
                  user preferences. Utilized Django views for backend
                  processing.
                </li>

                <li>
                  Engineered an automated parser in Python to convert the latest
                  provincial medication data into JSON files for database entry.
                  Corrected 95% of poorly formatted columns using regular
                  expressions and flagged the remaining rows for manual
                  conversion.
                </li>

                <li>
                  Implemented comprehensive functional tests for five patient
                  portal pages using Selenium by simulating patient actions to
                  verify every component's rendered content and functionality.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="skills-section">
          <div className="text-zone">
            <h2 className="text-header">Technical Skills</h2>

            <p className="text">
              From my work experience, personal projects, and academic courses,
              I learned a variety of technical skills and more importantly, the
              ability to quickly learn new technologies.
            </p>

            <p className="text">
              I am committed to continuous learning and staying updated with
              industry advancements to ensure that my technical skills remain
              modern and relevant. Below are the languages and technologies that
              I am most proficient at:
            </p>
          </div>

          <section className="listed-skills">
            <SkillCategory
              categoryName="Coding Languages"
              skills={[
                { name: 'Python', imgLocation: 'python-icon.svg' },
                { name: 'Java', imgLocation: 'java-icon.svg' },
                { name: 'JavaScript', imgLocation: 'js-logo.svg' },
                { name: 'TypeScript', imgLocation: 'typescriptlang-icon.svg' },
              ]}
            ></SkillCategory>
            <SkillCategory
              categoryName="Web Development"
              skills={[
                { name: 'HTML', imgLocation: 'w3_html5-icon.svg' },
                { name: 'CSS', imgLocation: 'w3_css-icon.svg' },
                { name: 'JQuery', imgLocation: 'jquery.svg' },
                { name: 'Bootstrap', imgLocation: 'bootstrap-logo.svg' },
                { name: 'SASS', imgLocation: 'sass-lang-icon.svg' },
              ]}
            ></SkillCategory>
            <SkillCategory
              categoryName="Libraries/Frameworks"
              skills={[
                { name: 'Django', imgLocation: 'djangoproject-icon.svg' },
                { name: 'Selenium', imgLocation: 'selenium.svg' },
                { name: 'React', imgLocation: 'reactjs-icon.svg' },
                { name: 'Node', imgLocation: 'nodejs-icon.svg' },
              ]}
            ></SkillCategory>
            <SkillCategory
              categoryName="Technologies"
              skills={[
                { name: 'Git', imgLocation: 'git-scm-icon.svg' },
                { name: 'Unix Shell', imgLocation: 'bash.svg' },
                { name: 'Jira', imgLocation: 'atlassian_jira-icon.svg' },
              ]}
            ></SkillCategory>
          </section>
        </div> */}

        <div className="about-section last">
          <div className="about-section-text-left text-zone">
            <h2 className="text-header">Goals and Values</h2>

            <p className="text">
              As an aspiring software engineer, I am driven to leverage
              technology to create solutions for new and unique problems that
              can positively impact the world. I value doing work that helps
              others and I am committed to continuously learning and applying
              new skills to contribute to meaningful projects.
            </p>

            <p className="text">
              I love working in collaborative teams where I can learn from my
              peers and share my ideas, fostering a culture of innovation and
              creativity. My goal is to be part of a dynamic team where I can
              contribute to impactful projects and grow both personally and
              professionally.
            </p>

            <div className="text">
              Outside of programming, my hobbies include exercising, watching
              anime, and playing the guitar. These hobbies help me strike a
              balance in my life and recharge, invigorating my interest and
              motivations to develop amazing applications.
            </div>
          </div>
        </div>

        {/* <div className="about-section last">
          <div className="about-section-text-left text-zone">
            <h2 className="text-header">Interests and Hobbies</h2>
            <p className="text">
              Outside of programming, I like to spend my time exercising,
              playing guitar, and watching anime. My favorite shows are Frieren,
              Kaguya Sama, and Chainsaw Man.
            </p>
          </div>
        </div> */}

        {/* <div className="text-zone">
          <p className="text">
            As a third-year Computer Science major at the University of British
            Columbia with one year of professional experience, I have a solid
            foundation in a diverse range of programming languages and
            technologies.
          </p>
          <p className="text">
            From my personal projects, academic courses, and hands-on work
            experience I learned a variety of technical skills and more
            importantly, the ability to quickly learn new technologies.
          </p>
          <p className="text">
            I am committed to continuous learning and staying updated with
            industry advancements to ensure that my technical skills remain
            modern and relevant. Below are the languages and technologies that I
            am most proficient at:
          </p>
        </div>
        <section className="listed-skills">
          <SkillCategory
            categoryName="Coding Languages"
            skills={[
              { name: 'Python', imgLocation: 'python-icon.svg' },
              { name: 'Java', imgLocation: 'java-icon.svg' },
              { name: 'JavaScript', imgLocation: 'js-logo.svg' },
              { name: 'TypeScript', imgLocation: 'typescriptlang-icon.svg' },
              // { name: 'C++', imgLocation: 'c++.svg' },
              // { name: 'C', imgLocation: 'c-1.svg' },
              // !!! different logo sizes are causing resizing issues. Resizing issue also occurs in mobile, find issue of this bug
            ]}
          ></SkillCategory>
          <SkillCategory
            categoryName="Web Development"
            skills={[
              { name: 'HTML', imgLocation: 'w3_html5-icon.svg' },
              { name: 'CSS', imgLocation: 'w3_css-icon.svg' },
              { name: 'JQuery', imgLocation: 'jquery.svg' },
              { name: 'Bootstrap', imgLocation: 'bootstrap-logo.svg' },
              { name: 'SASS', imgLocation: 'sass-lang-icon.svg' },
            ]}
          ></SkillCategory>
          <SkillCategory
            categoryName="Libraries/Frameworks"
            skills={[
              { name: 'Django', imgLocation: 'djangoproject-icon.svg' },
              { name: 'Selenium', imgLocation: 'selenium.svg' },
              { name: 'React', imgLocation: 'reactjs-icon.svg' },
              { name: 'Node', imgLocation: 'nodejs-icon.svg' },
            ]}
          ></SkillCategory>
          <SkillCategory
            categoryName="Technologies"
            skills={[
              { name: 'Git', imgLocation: 'git-scm-icon.svg' },
              // { name: 'JSON', imgLocation: 'json-icon.svg' },
              { name: 'Unix Shell', imgLocation: 'bash.svg' },
              { name: 'Jira', imgLocation: 'atlassian_jira-icon.svg' },
            ]}
          ></SkillCategory>
        </section> */}
      </div>

      <Loader type="ball-grid-pulse"></Loader>
    </>
  )
}

export default About

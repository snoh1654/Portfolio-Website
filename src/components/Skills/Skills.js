import './Skills.scss'
import SkillCategory from './SkillCategory/SkillCategory'
import Cube from './Cube/Cube'
import Loader from 'react-loaders'

// rotating cube + category image list OR combine with about

const Skills = () => {
  return (
    <>
      <h1 className="skills-title">Skills</h1>
      <main className="container skills-page">
        <h3 className="skills-paragraph">
          I am confident in using a variety of different technical skills and
          langauges. These are some of the technical skills that I am most
          proficient in!
        </h3>

        <section className="listed-skills">
          <div className="languages">
            <SkillCategory
              categoryName="Coding Languages"
              skills={[
                { name: 'Java', imgLocation: 'java-icon.svg' },
                { name: 'Python', imgLocation: 'python-icon.svg' },
                { name: 'TypeScript', imgLocation: 'typescriptlang-icon.svg' },
                // { name: 'C', imgLocation: 'c-1.svg' },
                { name: 'C++', imgLocation: 'c++.svg' },
              ]}
            ></SkillCategory>
          </div>
          <div className="web">
            <SkillCategory
              categoryName="Web Development"
              skills={[
                { name: 'HTML', imgLocation: 'w3_html5-icon.svg' },
                { name: 'CSS', imgLocation: 'w3_css-icon.svg' },
                { name: 'JavaScript', imgLocation: 'js-logo.svg' },
                { name: 'SASS', imgLocation: 'sass-lang-icon.svg' },
              ]}
            ></SkillCategory>
          </div>
          <div className="libframe">
            <SkillCategory
              categoryName="Libraries/Frameworks"
              skills={[
                { name: 'React', imgLocation: 'reactjs-icon.svg' },
                { name: 'Node', imgLocation: 'nodejs-icon.svg' },
                { name: 'Socket.IO', imgLocation: 'socketio-icon.svg' },
                { name: 'Django', imgLocation: 'djangoproject-icon.svg' },
              ]}
            ></SkillCategory>
          </div>
          <div className="technologies">
            <SkillCategory
              categoryName="Technologies"
              skills={[
                { name: 'Git', imgLocation: 'git-scm-icon.svg' },
                { name: 'JSON', imgLocation: 'json-icon.svg' },
                { name: 'Figma', imgLocation: 'figma-icon.svg' },
                { name: 'Jira', imgLocation: 'atlassian_jira-icon.svg' },
              ]}
            ></SkillCategory>
          </div>
        </section>

        <Cube></Cube>
      </main>

      <Loader type="pacman" />
    </>
  )
}

export default Skills

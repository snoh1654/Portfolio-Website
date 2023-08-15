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
        <div className="skills-paragraph-container">
          <h3 className="skills-paragraph">
            I am proficient in a variety of languages and technologies from
            building personal projects and taking Computer Science courses at
            UBC.
          </h3>
          <h3 className="skills-paragraph">
            As a lifelong learner, I am continuously learning new technical
            skills and adopting better practices as I develop more ambituous
            projects and take new academic courses.
          </h3>
          <h3 className="skills-paragraph">
            Below are the languages and technologies that I am most confident
            in!
          </h3>
        </div>
        <Cube></Cube>

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
      </main>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Skills

import './Skills.scss'
import SkillCategory from './SkillCategory/SkillCategory'
import Cube from './Cube/Cube'
import Loader from 'react-loaders'

// rotating cube + category image list OR combine with about

const Skills = () => {
  return (
    <>
      <main className="container skills-page">
        <h1 className="page-header">Skills</h1>

        <div className="text-zone">
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

        {/* TODO: Decide what to do with the cube */}
        {/* <Cube></Cube> */}

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
        </section>
      </main>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Skills

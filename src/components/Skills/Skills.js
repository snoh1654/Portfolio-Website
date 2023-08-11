import './Skills.scss'
import SkillCategory from './SkillCategory/SkillCategory'
import Loader from 'react-loaders'

// rotating cube + category image list OR combine with about

const Skills = () => {
  return (
    <>
      <div className="container skills-page">
        <SkillCategory
          categoryName="Coding"
          skills={['Java', 'Python', 'JavaScript']}
        ></SkillCategory>
        <SkillCategory
          categoryName="Web"
          skills={['HTML', 'CSS', 'React']}
        ></SkillCategory>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills

import './UsedSkills.scss'

const UsedSkills = ({ skills }) => {
  function skillMapFunction(skill) {
    return (
      <>
        <h4 className="skill-name">{skill}</h4>
      </>
    )
  }

  return (
    <div className="project-skills-container">
      {skills.map(skillMapFunction)}
    </div>
  )
}

export default UsedSkills

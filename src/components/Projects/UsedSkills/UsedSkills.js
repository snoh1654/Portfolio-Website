import './UsedSkills.scss'

const UsedSkills = ({ skills }) => {
  function skillMapFunction(skill, index) {
    return (
      <h4 key={skill + index} className="used-skill">
        {skill}
      </h4>
    )
  }

  return (
    <div className="used-skills-container">{skills.map(skillMapFunction)}</div>
  )
}

export default UsedSkills

import './SkillCategory.scss'

const SkillCategory = ({ categoryName, skills }) => {
  function createCategoryItems(skill, index) {
    return (
      <li className="category-item" key={index}>
        <section className="category-img-container">
          <img
            className="category-img"
            src={'skills-logos/' + skill.imgLocation}
            alt={skill.name + ' image'}
          />
          <h3 className="category-img-name">{skill.name}</h3>
        </section>
      </li>
    )
  }

  return (
    <>
      <div className="category-container">
        <h2 className="category-name">{categoryName}</h2>

        <ul className="category-list">{skills.map(createCategoryItems)}</ul>
      </div>
    </>
  )
}

export default SkillCategory

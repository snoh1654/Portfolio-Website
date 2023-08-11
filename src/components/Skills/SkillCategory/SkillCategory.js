import './SkillCategory.scss'

const SkillCategory = ({ categoryName, skills }) => {
  function createCategoryItems(skill) {
    return <li className="category-item">{skill}</li>
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

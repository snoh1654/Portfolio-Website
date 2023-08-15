import './Application.scss'
import UsedSkills from '../UsedSkills/UsedSkills'

const Application = ({
  name,
  description,
  img1,
  imgDescription,
  link,
  skills,
}) => {
  return (
    <div className="application-container">
      <section className="application-header">
        <h2 className="project-name">{name}</h2>

        <a href={link} className="github-link">
          <img
            src="github-mark-white.png"
            alt={'Link to ' + { name } + "'s github"}
            className="github-link-img"
          />
        </a>

        <section className="application-skills">
          <UsedSkills skills={skills}></UsedSkills>
        </section>
      </section>

      <p className="project-description">{description}</p>

      <section className="application-images">
        <div className="project-image-container">
          <img
            className="project-image"
            src={img1}
            alt={'Image of ' + name + ' project'}
          />
          <h3 className="project-image-title">{imgDescription}</h3>
        </div>
      </section>
    </div>
  )
}

export default Application

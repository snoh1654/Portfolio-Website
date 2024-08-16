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
      <section className="application-description">
        <div className="application-header-container">
          <div className="application-header">
            <span className="application-name">{name}</span>

            <a
              href={link}
              className="github-link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="github.svg"
                alt={'Link to ' + { name } + "'s github"}
                className="github-link-img"
              />
            </a>
          </div>

          <UsedSkills skills={skills}></UsedSkills>
        </div>

        <div className="text-zone">
          <p className="application-paragraph text">{description}</p>
        </div>
      </section>

      <section className="application-image-container">
        <img
          className="application-image"
          src={img1}
          alt={'Image of ' + name + ' application'}
        />
        <h3 className="application-image-title">{imgDescription}</h3>
      </section>
    </div>
  )
}

export default Application

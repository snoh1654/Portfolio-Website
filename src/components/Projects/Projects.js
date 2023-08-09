import './Projects.scss'
import Loader from 'react-loaders'
import Application from './Application/Application'

// import { useReducer } from 'react'

// Make like netflix wheel?

// const ACTIONS = {
//   NEXT: 'next',
//   PREVIOUS: 'previous',
// }

// function reducer(state, action) {
//   let projectsArray = state.projects

//   switch (action.type) {
//     case ACTIONS.NEXT:
//       if (isInBound(1, state.index, projectsArray.length)) {
//       }
//     case ACTIONS.PREVIOUS:
//       if (isInBound(-1, state.index, projectsArray.length)) {
//       }
//     default:
//       return state
//   }
// }

// function isInBound(direction, index, length) {
//   if (index + direction == length || index - direction < 0) {
//     return true
//   } else {
//     return false
//   }
// }

const Projects = () => {
  // const [state, dispatch] = useReducer(reducer, { projects: [], index: 0 })

  return (
    <>
      <h1 className="projects-header">Projects</h1>
      <div className="container projects-page">
        <Application
          name="Library Search System"
          description="Created a full stack application using Django that allows users to perform CRUD operations on a library’s book collection and search books by their title and author. Utilized Django Models and SQLite to store the book data utilizing a Many-To-Many relationship between Books and Authors.	Displayed the book information utilizing Django Template Language to create a dynamic website that updated the latest book information."
          img1="website.png"
          imgDescription="Search Website"
          link="https://github.com/snoh1654/Library-Search-System"
          skills={['Python', 'Django', 'SQLite']}
        ></Application>

        <Application
          name="Library Search System"
          description="Created a full stack application using Django that allows users to perform CRUD operations on a library’s book collection and search books by their title and author. Utilized Django Models and SQLite to store the book data utilizing a Many-To-Many relationship between Books and Authors.	Displayed the book information utilizing Django Template Language to create a dynamic website that updated the latest book information."
          img1="website.png"
          imgDescription="Search Website"
          link="https://github.com/snoh1654/Library-Search-System"
          skills={['Python', 'Django', 'SQLite']}
        ></Application>

        <Application
          name="Library Search System"
          description="Created a full stack application using Django that allows users to perform CRUD operations on a library’s book collection and search books by their title and author. Utilized Django Models and SQLite to store the book data utilizing a Many-To-Many relationship between Books and Authors.	Displayed the book information utilizing Django Template Language to create a dynamic website that updated the latest book information."
          img1="website.png"
          imgDescription="Search Website"
          link="https://github.com/snoh1654/Library-Search-System"
          skills={['Python', 'Django', 'SQLite']}
        ></Application>

        <Application
          name="example"
          description="example description"
          img="logo192.png"
          link="https://github.com/"
          skills={['JavaScript']}
        ></Application>

        <Application
          name="example"
          description="example description"
          img="logo192.png"
          link="https://github.com/"
          skills={['JavaScript']}
        ></Application>

        <Application
          name="example"
          description="example description"
          img="logo192.png"
          link="https://github.com/"
          skills={['JavaScript']}
        ></Application>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects

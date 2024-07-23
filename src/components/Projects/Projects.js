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
      <main className="container projects-page">
        <h1 className="page-header">Projects</h1>

        {/* ubc course finder, 210, 310, connect four, hackathon, personal project */}

        <section className="projects-list">
          <Application
            name="Multiplayer Connect4"
            description="As part of a three-member team, I developed a real-time Multiplayer Connect Four application. We utilized Socket.IO to establish bi-directional communication between the client and server, enabling users to play simultaneously. The Connect Four game logic was implemented in JavaScript, and we used React to create a responsive website featuring stateful components that effectively managed user moves and turn swaps."
            img1="project-images/connect-four.png"
            imgDescription="The user is waiting for an opponent to join their room. Once another player joins, the game begins."
            link="https://github.com/CedricPulmano/Connect-Four-Online"
            skills={['JavaScript', 'React', 'CSS', 'SocketIO']}
          ></Application>

          <Application
            name="UBC Course Finder"
            description="I implemented a full-stack application that enables users to query zip files containing historical UBC course data using TypeScript and JSZip. I set up REST API endpoints with Express to integrate this functionality with the frontend. Following Test Driven Development, I implemented black box unit and integration tests with Mocha and Chai prior to implementation."
            img1="project-images/310.png"
            imgDescription="Users can upload UBC course datasets and perform detailed queries to find courses that meet specific criterias."
            link="https://github.com/snoh1654/Course-Finder"
            skills={['TypeScript', 'Express', 'Mocha', 'Chai', 'JSZip']}
          ></Application>

          <Application
            name="Library Management System"
            description="I built a library management system using Django that allows users to perform CRUD operations on books and search by title and author. I leveraged Django's models to handle a Many-to-Many relationship between books and authors and utilized Django's Template Language to dynamically display updated book information."
            img1="/project-images/library.png"
            imgDescription="The frontend for the library system. Easily search and display book information by title or author name."
            link="https://github.com/snoh1654/Library-Search-System"
            skills={['Python', 'Django']}
          ></Application>

          <Application
            name="LoL Champ Recorder"
            description="I created a Java application that allows users to record champion information in League of Legends. The application features both a console-based interface and a GUI designed with Swing, supporting CRUD operations along with saving and loading mechanics using JSON files to persist inputted information. To ensure robustness and identify program vulnerabilities, I structured modular unit tests using JUnit."
            img1="project-images/210.png"
            imgDescription="The GUI of the application. You can perform CRUD operations and the program supports data persistence."
            link="https://github.com/snoh1654/Character-Interaction-Recorder"
            skills={['Java', 'Java Swing', 'JUnit']}
          ></Application>
        </section>
      </main>

      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Projects

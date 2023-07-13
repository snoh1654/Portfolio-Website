import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="skills" element={<Skills></Skills>}></Route>
          <Route path="projects" element={<Projects></Projects>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

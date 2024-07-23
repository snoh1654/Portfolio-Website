import './Layout.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="nav-bar-container">
        <Sidebar />
      </div>

      <div className="main-content">
        <Outlet />
      </div>
    </>
  )
}

export default Layout

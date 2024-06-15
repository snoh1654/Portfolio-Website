import './Layout.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className="nav-bar">
        <Sidebar />
      </div>

      <div className="main-content">
        {/* <span className="tags top-tags">&lt; body &gt;</span> */}
        <Outlet />

        {/* <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span> */}
      </div>
    </>
  )
}

export default Layout

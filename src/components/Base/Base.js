import './Base.scss'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Base = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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

export default Base

import "./SidebarPanel.css"

import { FiHome } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa6"
import { GoProjectRoadmap } from "react-icons/go"
import { SlCalender } from "react-icons/sl"
import { FaRegFile } from "react-icons/fa"
import {
  MdOutlineLogout,
  MdHelpOutline,
  MdOutlineSettings,
} from "react-icons/md"
import { Link } from "react-router-dom"

function SidebarPanel() {
  return (
    <div className="sidebar-panel">
      <div className="list-of-links">
        <div className="sidebar-title">
          <h1>OMS</h1>
          <hr />
        </div>
        <div className="sidebar-main">
          <p>Main</p>
          <ul>
            <Link to="/dashboard" className="list-of-links">
              <FiHome />
              <span className="sidebar-links">Dashboard</span>
            </Link>
            <Link to="/user-management" className="list-of-links">
              <FaRegUser />
              <span className="sidebar-links">User Management</span>
            </Link>
            <Link to="/project-management" className="list-of-links">
              <GoProjectRoadmap />
              <span className="sidebar-links">Project Management</span>
            </Link>
            <Link to="/leave-management" className="list-of-links">
              <FaRegFile />
              <span className="sidebar-links">Leave Management</span>
            </Link>
            <Link to="/attendance" className="list-of-links">
              <SlCalender />
              <span className="sidebar-links">Attendance</span>
            </Link>
            <Link to="/salary-management" className="list-of-links">
              <FaRegFile />
              <span className="sidebar-links">Salary Management</span>
            </Link>
          </ul>
        </div>
        <div className="sidebar-settings">
          <p>Settings</p>
          <ul>
            <Link to="/settings" className="list-of-links">
              <MdOutlineSettings />
              <span className="sidebar-links">Settings</span>
            </Link>
          </ul>
        </div>
        <div className="sidebar-bottom">
          <ul>
            <Link to="/help" className="list-of-links">
              <MdHelpOutline />
              <span className="sidebar-links">Help</span>
            </Link>
            <Link to="/logout" className="list-of-links-logout">
              <MdOutlineLogout />
              <span className="sidebar-links-logout">Logout Account</span>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidebarPanel

import "./SidebarPanel.css"

import { FiHome } from "react-icons/fi"
import { FaRegUser } from "react-icons/fa6"

function SidebarPanel() {
  return (
    <div className="sidebar-panel">
      <div>
        <ul>
          <li>
            <FiHome />
            <span>Dashboard</span>
          </li>
          <li>
            <FaRegUser />
            <span>User Management</span>
          </li>
          <li>
            <FiHome />
            <span>Project Management</span>
          </li>
          <li>
            <FiHome />
            <span>Leave Management</span>
          </li>
          <li>
            <FiHome />
            <span>Attendance</span>
          </li>
          <li>
            <FiHome />
            <span>Salary Management</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SidebarPanel

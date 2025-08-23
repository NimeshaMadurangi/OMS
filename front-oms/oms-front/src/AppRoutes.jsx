import { Routes, Route } from "react-router-dom"

import SidebarPanel from "./components/SidebarPanel/SidebarPanel"
import Header from "./components/HeaderComponent/Header"

import DashboardPage from "./pages/DashboardPage/DashboardPage"
import User from "./pages/UserPage/User"
import Project from "./pages/ProjectPage/Project"

function AppRoutes() {
  return (
    <div className="bg-container">
      <div className="screen-layout">
        <SidebarPanel />
        <div className="body-wrapper">
          <Header />
          <Routes>
            <Route>
              <Route path="/dashboard" exact element={<DashboardPage />} />
              <Route path="/user-management" exact element={<User />} />
              <Route path="/project-management" exact element={<Project />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default AppRoutes

import { Routes, Route } from "react-router-dom"

import SidebarPanel from "./components/SidebarPanel/SidebarPanel"
import DashboardPage from "./pages/DashboardPage/DashboardPage"
import Header from "./components/HeaderComponent/Header"

function AppRoutes() {
  return (
    <div className="bg-container">
      <div className="screen-layout">
        <SidebarPanel />
        <Header />
        <Routes>
          <Route>
            <Route path="/dashboard" exact element={<DashboardPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default AppRoutes

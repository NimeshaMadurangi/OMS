import { Routes, Route } from "react-router-dom"

import SidebarPanel from "./components/SidebarPanel/SidebarPanel"
import DashboardPage from "./pages/DashboardPage/DashboardPage"

function AppRoutes() {
  return (
    <div>
      <SidebarPanel />
      <Routes>
        <Route>
          <Route path="/dashboard" exact element={<DashboardPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes

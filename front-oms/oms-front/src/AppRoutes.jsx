import { Routes, Route } from "react-router-dom"

import Dashboard from "./components/DashboardComponent/Dashboard"

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes

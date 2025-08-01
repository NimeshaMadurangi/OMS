import "./App.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/LoginComponent/Login"
import AppRoutes from "./AppRoutes"

function App() {
  return (
    <div className="bg-container">
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="*" exact element={<AppRoutes />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

import { useNavigate } from "react-router-dom"
import "./Login.css"

import Waiting from "../WaitingHelix/Waiting"

function Login() {
  const navigate = useNavigate()

  return (
    <div className="login-page">
      <div className="left-section">
        <h1 className="brand-title">OFM</h1>
        <Waiting />
      </div>
      <div className="login-container">
        <form className="form">
          <p className="form-title">Sign in to your account</p>
          <div className="input-container">
            <input type="email" placeholder="Enter email" />
            <span></span>
          </div>
          <div className="input-container">
            <input type="password" placeholder="Enter password" />
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            type="submit"
            className="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login

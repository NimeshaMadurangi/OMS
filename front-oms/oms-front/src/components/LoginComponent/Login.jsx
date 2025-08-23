import "./Login.css"
import Logo from "../../images/logo.png"

import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  return (
    <div className="login-page">
      <div className="left-section">
        <img src={Logo} alt="OFM Logo" />
        <h4 className="brand-title">
          Empower growth – Driving innovation and success together
        </h4>
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

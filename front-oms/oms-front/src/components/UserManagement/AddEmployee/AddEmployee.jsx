import "./AddEmployee.css"

import { CiImageOn } from "react-icons/ci"

function AddEmployee() {
  return (
    <div className="common-form-component">
      <form className="employee-form">
        <div className="column image-column">
          <label htmlFor="file-input" className="image-placeholder">
            <span role="img" aria-label="upload">
              <CiImageOn />
            </span>
          </label>
          <input id="file-input" type="file" hidden />
        </div>

        {/* Column 2 - Left Side Fields */}
        <div className="column form-column">
          <div className="form-group">
            <label>Full Name*</label>
            <input type="text" placeholder="Enter Name" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>National ID</label>
              <input type="text" placeholder="National ID" />
            </div>
            <div className="form-group">
              <label>Employee role</label>
              <select>
                <option value="">Select</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Date of join</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>Mobile number</label>
              <input type="tel" placeholder="+94 *********" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <div className="form-group gender-group">
            <label>Gender</label>
            <div className="gender-options">
              <label>
                <input type="radio" name="gender" /> Male
              </label>
              <label>
                <input type="radio" name="gender" /> Female
              </label>
            </div>
          </div>
        </div>

        {/* Column 3 - Right Side Fields */}
        <div className="column form-column">
          <div className="form-group">
            <label>Home Address</label>
            <input type="text" placeholder="Home address" />
          </div>

          <div className="form-group">
            <label>Education</label>
            <select>
              <option value="">Select</option>
            </select>
          </div>

          <div className="form-group">
            <label>Working Experience</label>
            <select>
              <option value="">Select</option>
            </select>
          </div>

          <div className="form-group">
            <label>Technologies</label>
            <select>
              <option value="">Select</option>
            </select>
          </div>
        </div>
      </form>

      {/* Buttons Row */}
      <div className="form-actions">
        <button type="reset" className="reset-btn">
          ⟳ Reset
        </button>
        <button type="submit" className="submit-btn">
          ✔ Submit
        </button>
      </div>
    </div>
  )
}

export default AddEmployee

import "./User.css"

import AddEmployee from "../../components/UserManagement/AddEmployee/AddEmployee"
import ManageUsersTable from "../../components/UserManagement/ManageUsers/ManageUsersTable"

function User() {
  return (
    <div className="user-page-content">
      <div className="employee-form">
        <AddEmployee />
      </div>
      <div>
        <ManageUsersTable />
      </div>
    </div>
  )
}

export default User

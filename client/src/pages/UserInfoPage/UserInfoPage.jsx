import './UserInfoPage.css'
import { Link } from 'react-router-dom'
const UserInfoPage = ({ user }) => {
  return (
    <div className="userinfopagesection">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <Link to="/userinfo/edit">
        <button className="editbutton">Edit Your Account Info</button>
      </Link>
      <Link to="/userinfo/delete">
        <button className="deletebutton">Delete Your Account</button>
      </Link>
    </div>
  )
}

export default UserInfoPage

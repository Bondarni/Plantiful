import './UserInfoPage.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
const UserInfoPage = ({ user, getUser }) => {
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className="userinfopagesection">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <Link to="/userinfo/edit">
        <button className="editbutton">Edit Your Account Info</button>
      </Link>
    </div>
  )
}

export default UserInfoPage

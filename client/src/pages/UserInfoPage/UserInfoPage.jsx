import './UserInfoPage.css'
const UserInfoPage = ({ user }) => {
  return (
    <div className="userinfopagesection">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <button className="editbutton">Edit Your Account Info</button>
    </div>
  )
}

export default UserInfoPage

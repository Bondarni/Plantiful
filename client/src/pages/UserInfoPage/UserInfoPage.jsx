import './UserInfoPage.css'
const UserInfoPage = ({ user }) => {
  return (
    <div className="userinfopagesection">
      <h1>
        {user.firstName} {user.lastName}
      </h1>
    </div>
  )
}

export default UserInfoPage

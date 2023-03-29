import './EditUserInfoPage.css'
import { Link } from 'react-router-dom'
const EditUserInfoPage = () => {
  return (
    <div className="edituserinfopagesection">
      <h1>Edit your info below;</h1>
      <form action="" className="editform">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <Link to={'/userinfo'}>
        <button>Done!</button>
      </Link>
    </div>
  )
}

export default EditUserInfoPage

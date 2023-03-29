import './EditPlantPage.css'
import { Link } from 'react-router-dom'
const EditPlantPage = () => {
  return (
    <div className="editplantpagesection">
      <h1>Edit your plant's details below;</h1>
      <form className="editform">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </form>
      <Link to={'/plants'}>
        <button>Done!</button>
      </Link>
    </div>
  )
}

export default EditPlantPage

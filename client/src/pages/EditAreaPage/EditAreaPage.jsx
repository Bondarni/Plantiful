import './EditAreaPage.css'
import { Link } from 'react-router-dom'
const EditAreaPage = () => {
  return (
    <div className="editareapagesection">
      <h1>Edit your space details below;</h1>
      <form className="editform">
        <input type="text" />
        <input type="text" />
      </form>
      <Link to={'/areas'}>
        <button>Done!</button>
      </Link>
    </div>
  )
}

export default EditAreaPage

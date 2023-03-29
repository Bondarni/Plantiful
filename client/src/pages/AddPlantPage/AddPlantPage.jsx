import './AddPlantPage.css'
import { Link } from 'react-router-dom'

const AddPlantPage = () => {
  return (
    <div className="addplantsection">
      <h1>New Plant</h1>
      <form action="">
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

export default AddPlantPage

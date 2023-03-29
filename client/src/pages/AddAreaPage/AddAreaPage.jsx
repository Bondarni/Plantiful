import './AddAreaPage.css'
import { Link } from 'react-router-dom'
const AddAreaPage = () => {
  return (
    <div className="addareasection">
      <h1>New Space</h1>
      <form action="">
        <input type="text" />
        <input type="text" />
      </form>
      <Link to={'/areas'}>
        <button>Done!</button>
      </Link>
    </div>
  )
}

export default AddAreaPage

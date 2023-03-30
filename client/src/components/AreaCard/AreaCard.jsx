import './AreaCard.css'
import { Link } from 'react-router-dom'

const AreaCard = ({ area }) => {
  let areaId = area.id
  return (
    <div className="areacardcontainer">
      <h1>{area.name}</h1>
      <Link to={`/areas/${areaId}`}>
        <button className="editbutton">Edit Space Details</button>
      </Link>
      <Link to={`/areas/delete/${areaId}`}>
        <button className="deletebutton">Remove Space</button>
      </Link>
    </div>
  )
}

export default AreaCard

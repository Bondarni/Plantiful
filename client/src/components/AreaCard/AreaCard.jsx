import './AreaCard.css'
import { Link } from 'react-router-dom'

const AreaCard = ({ area }) => {
  return (
    <div className="areacardcontainer">
      <h1>{area.name}</h1>
      <Link to={'/areas/edit'}>
        <button className="editbutton">Edit Space Details</button>
      </Link>
    </div>
  )
}

export default AreaCard

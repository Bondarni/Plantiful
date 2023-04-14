import './AreaCard.css'
import { Link } from 'react-router-dom'

const AreaCard = ({ area }) => {
  console.log(area)
  let area_id = area.id
  let areaplants = area.plants
  return (
    <div className="areacardcontainer">
      <h1>{area.name}</h1>
      {/* <div>
        {areaplants.map((areaplant) => {
          ;<h3>{areaplant.name}</h3>
        })}
      </div> */}
      <Link to={`/areas/${area_id}`}>
        <button className="editbutton">Edit Space Details</button>
      </Link>
      <Link to={`/areas/delete/${area_id}`}>
        <button className="deletebutton">Remove Space</button>
      </Link>
    </div>
  )
}

export default AreaCard

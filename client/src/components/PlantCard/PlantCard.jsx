import './PlantCard.css'
import { Link } from 'react-router-dom'
const PlantCard = ({ plant }) => {
  let plantId = plant.id

  return (
    <div className="plantcardsection">
      <h1>{plant.nickName}</h1>
      <Link to={`/plants/${plantId}`}>
        <button className="editbutton">Edit Plant Details</button>
      </Link>
      <Link to={`/plants/delete/${plantId}`} plantId={plantId}>
        <button className="deletebutton">Remove Plant</button>
      </Link>
    </div>
  )
}

export default PlantCard

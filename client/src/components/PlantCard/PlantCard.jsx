import './PlantCard.css'
import { Link } from 'react-router-dom'
const PlantCard = ({ plant }) => {
  return (
    <div className="plantcardsection">
      <h1>{plant.nickName}</h1>
      <Link to={'/plants/edit'}>
        <button className="editbutton">Edit Plant Details</button>
      </Link>
    </div>
  )
}

export default PlantCard

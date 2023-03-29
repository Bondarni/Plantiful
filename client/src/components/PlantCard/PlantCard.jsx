import './PlantCard.css'
const PlantCard = ({ plant }) => {
  console.log(plant)
  return (
    <div className="plantcardsection">
      <h1>{plant.nickName}</h1>
      <button className="editbutton">Edit Plant Details</button>
    </div>
  )
}

export default PlantCard

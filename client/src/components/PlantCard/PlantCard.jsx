import './PlantCard.css'
const PlantCard = ({ plant }) => {
  console.log(plant)
  return (
    <div className="plantcardsection">
      <h1>{plant.nickName}</h1>
    </div>
  )
}

export default PlantCard
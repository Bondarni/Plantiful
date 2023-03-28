import PlantCard from '../../components/PlantCard/PlantCard'
import './PlantPage.css'
const PlantPage = ({ plants }) => {
  console.log(plants)
  return (
    <div className="plantpagesection">
      {plants.map((plant) => (
        <PlantCard plant={plant} />
      ))}
    </div>
  )
}

export default PlantPage

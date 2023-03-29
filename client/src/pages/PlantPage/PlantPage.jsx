import PlantCard from '../../components/PlantCard/PlantCard'
import './PlantPage.css'
const PlantPage = ({ plants }) => {
  console.log(plants)
  return (
    <div className="plantpagesection">
      <button className="addbutton">Click here to create a new plant!</button>
      {plants.map((plant) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </div>
  )
}

export default PlantPage

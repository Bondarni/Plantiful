import './PlantPage.css'
import { Link } from 'react-router-dom'
import PlantCard from '../../components/PlantCard/PlantCard'
const PlantPage = ({ user }) => {
  const plants = user.plants
  console.log(plants)
  let yesPlants
  if (plants) {
    yesPlants = (
      <div>
        {plants.map((plant) => (
          <PlantCard plant={plant} key={plant.id} />
        ))}
      </div>
    )
  }

  const noPlants = (
    <div>
      <h1>Your account doesn't have any plants yet.</h1>
    </div>
  )
  return (
    <div className="plantpagesection">
      <Link to={'/plants/new'}>
        <button className="addbutton">Click here to create a new plant!</button>
      </Link>
      {plants ? yesPlants : noPlants}
    </div>
  )
}
export default PlantPage

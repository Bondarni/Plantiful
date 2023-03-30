import './PlantPage.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PlantCard from '../../components/PlantCard/PlantCard'
const PlantPage = ({ user, getUser }) => {
  useEffect(() => {
    getUser()
  }, [])
  const plants = user.plants
  console.log(plants)
  return (
    <div className="plantpagesection">
      <Link to={'/plants/new'}>
        <button className="addbutton">Click here to create a new plant!</button>
      </Link>
      {plants.map((plant) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </div>
  )
}
export default PlantPage

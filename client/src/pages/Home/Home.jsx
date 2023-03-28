import './Home.css'
import PlantCard from '../../components/PlantCard/PlantCard'
import UserCard from '../../components/UserCard/UserCard'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
const Home = () => {
  return (
    <div className="homesection">
      <h1>Tip: Do you talk to your plants? Give it a go!</h1>
      <PlantCard />
      <UserCard />
      <WeatherCard />
    </div>
  )
}

export default Home

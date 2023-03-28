import './Home.css'
import PlantCard from '../../components/PlantCard/PlantCard'
import UserCard from '../../components/UserCard/UserCard'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import AreaCard from '../../components/AreaCard/AreaCard'
const Home = ({ plants, areas, user }) => {
  return (
    <div className="homesection">
      <h1>Home Sweet Home!</h1>
      <PlantCard plants={plants} />
      <UserCard user={user} />
      <AreaCard areas={areas} />
      <WeatherCard />
    </div>
  )
}

export default Home

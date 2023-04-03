import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import PlantCard from '../../components/PlantCard/PlantCard'
// import UserCard from '../../components/UserCard/UserCard'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
// import AreaCard from '../../components/AreaCard/AreaCard'
const Home = ({ user }) => {
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${user.zipCode},US&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    let coords = response.data
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    console.log(res.data)
    setWeather(res.data)
  }

  useEffect(() => {
    getWeather()
  }, [])

  return (
    <div className="homesection">
      <h1>Home Sweet Home!</h1>
      {/* <PlantCard /> */}
      {/* <UserCard /> */}
      {/* <AreaCard /> */}
      <WeatherCard weather={weather} temps={weather.main} />
    </div>
  )
}

export default Home

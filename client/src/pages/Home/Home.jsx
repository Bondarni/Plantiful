import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import PlantCard from '../../components/PlantCard/PlantCard'
// import UserCard from '../../components/UserCard/UserCard'
// import WeatherCard from '../../components/WeatherCard/WeatherCard'
// import AreaCard from '../../components/AreaCard/AreaCard'
const Home = ({ user }) => {
  const [weather, setWeather] = useState(null)
  const [temps, setTemps] = useState(null)
  const getWeather = async () => {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${user.zipCode},US&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    let coords = response.data
    console.log(coords)
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    setWeather(res.data.weather)
    console.log(weather)
    setTemps(res.data.main)
    console.log(temps)
  }

  useEffect(() => {
    // getWeather()
  }, [])

  return (
    <div className="homesection">
      <h1>Home Sweet Home!</h1>
      {/* <PlantCard /> */}
      {/* <UserCard /> */}
      {/* <AreaCard /> */}
      <div className="weathercardsection">
        <h2>Here's the weather for Dekalb County;</h2>
        <h3>Cloudy</h3>
        <p>Temperature: 60 degrees Farenheit</p>
        <p>Feels Like: 57</p>
      </div>
    </div>
  )
}

export default Home

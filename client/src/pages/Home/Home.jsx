import './Home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
// import PlantCard from '../../components/PlantCard/PlantCard'
// import UserCard from '../../components/UserCard/UserCard'
// import WeatherCard from '../../components/WeatherCard/WeatherCard'
// import AreaCard from '../../components/AreaCard/AreaCard'
const Home = ({ user }) => {
  console.log(user)
  const [weather, setWeather] = useState([])
  const [temps, setTemps] = useState([])
  const getWeather = async () => {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/zip?zip=${user.zipCode},US&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    let coords = response.data
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
    console.log(res.data)
    setWeather(res.data.weather)
    setTemps(res.data.main)
  }

  let yesUser = (
    <div>
      <h2>Here's the weather for your area;</h2>
      {weather.map((precip) => (
        <div key={precip.id}>
          <h3>{precip.main}</h3>
          <p>{precip.description}</p>
        </div>
      ))}

      <p>{temps}</p>
      <p>{temps.feels_like}</p>
    </div>
  )

  const noUser = (
    <div>
      <h1>No Weather Data Available Yet.</h1>
    </div>
  )

  useEffect(() => {
    if (user) {
      getWeather()
    }
  }, [])

  return (
    <div className="homesection">
      <h1>Home Sweet Home!</h1>
      <div className="weathercardsection">{user ? yesUser : noUser}</div>
    </div>
  )
}

export default Home

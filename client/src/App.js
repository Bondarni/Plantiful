import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './globals'
import NavBar from './components/NavBar/NavBar'
import Entry from './pages/Entry/Entry'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import UserInfoPage from './pages/UserInfoPage/UserInfoPage'
import PlantPage from './pages/PlantPage/PlantPage'
import EditUserInfoPage from './pages/EditUserInfoPage/EditUserInfoPage'
import EditPlantPage from './pages/EditPlantPage/EditPlantPage'
import AreaPage from './pages/AreaPage/AreaPage'

function App() {
  const [plants, setPlants] = useState(null)
  const [areas, setAreas] = useState(null)
  const [user, setUser] = useState(null)
  const [weather, setWeather] = useState(null)

  const getPlants = async () => {
    const res = await axios.get(`${BASE_URL}/plants`)
    setPlants(res.data)
    console.log(res.data)
  }

  const getAreas = async () => {
    const res = await axios.get(`${BASE_URL}/areas`)
    setAreas(res.data)
    console.log(res.data)
  }

  const getUser = async () => {
    const res = await axios.get(`${BASE_URL}/users/1`)
    setUser(...res.data)
    console.log(...res.data)
  }

  const getWeather = async () => {
    const res = await axios.get(`${BASE_URL}`)
    setWeather(res.data)
  }

  useEffect(() => {
    getPlants()
    getUser()
    getAreas()
    getWeather()
  }, [])
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route
            path="/home"
            element={
              <Home
                user={user}
                plants={plants}
                areas={areas}
                weather={weather}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/userinfo" element={<UserInfoPage user={user} />} />
          <Route path="/plants" element={<PlantPage plants={plants} />} />
          <Route path="/useredit" element={<EditUserInfoPage />} />
          <Route path="/plantedit" element={<EditPlantPage />} />
          <Route path="/areas" element={<AreaPage areas={areas} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

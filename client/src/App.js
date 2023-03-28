import './App.css'
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from './globals'
import NavBar from './components/NavBar/NavBar'
// import PlantCard from './components/PlantCard/PlantCard'
// import UserCard from './components/UserCard/UserCard'
// import WeatherCard from './components/WeatherCard/WeatherCard'
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

  const getPlants = async () => {
    const res = await axios.get(`${BASE_URL}/plants`)
    setPlants(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getPlants()
  }, [])
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/userinfo" element={<UserInfoPage />} />
          <Route path="/plant" element={<PlantPage plants={plants} />} />
          <Route path="/useredit" element={<EditUserInfoPage />} />
          <Route path="/plantedit" element={<EditPlantPage />} />
          <Route path="/area" element={<AreaPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

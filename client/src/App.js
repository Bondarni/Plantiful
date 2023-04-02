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
import EditUserInfoPage from './pages/EditUserInfoPage/EditUserInfoPage'
import DeleteUserPage from './pages/DeleteUserPage/DeleteUserPage'
import PlantPage from './pages/PlantPage/PlantPage'
import AddPlantPage from './pages/AddPlantPage/AddPlantPage'
import EditPlantPage from './pages/EditPlantPage/EditPlantPage'
import DeletePlantPage from './pages/DeletePlantPage/DeletePlantPage'
import AreaPage from './pages/AreaPage/AreaPage'
import AddAreaPage from './pages/AddAreaPage/AddAreaPage'
import EditAreaPage from './pages/EditAreaPage/EditAreaPage'
import DeleteAreaPage from './pages/DeleteAreaPage/DeleteAreaPage'

function App() {
  const [user, setUser] = useState(null)

  const getUser = async () => {
    const res = await axios.get(`${BASE_URL}/users/1`)
    setUser(...res.data)
    console.log(...res.data)
  }

  // const getWeather = async () => {
  //   const res = await axios.get(`${BASE_URL}`)
  //   setWeather(res.data)
  // }

  useEffect(() => {
    getUser()
    // getWeather()
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
                // plants={plants}
                // areas={areas}
                // weather={weather}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/userinfo"
            element={<UserInfoPage user={user} getUser={getUser} />}
          />
          <Route
            path="/userinfo/edit"
            element={<EditUserInfoPage user={user} />}
          />
          <Route
            path="/userinfo/delete"
            element={<DeleteUserPage user={user} />}
          />
          <Route
            path="/plants"
            element={<PlantPage user={user} getUser={getUser} />}
          />
          <Route path="/plants/new" element={<AddPlantPage user={user} />} />
          <Route
            path="/plants/:plant_id"
            element={<EditPlantPage user={user} />}
          />
          <Route
            path="/plants/delete/:plant_id"
            element={<DeletePlantPage user={user} />}
          />
          <Route
            path="/areas"
            element={<AreaPage user={user} getUser={getUser} />}
          />
          <Route path="/areas/new" element={<AddAreaPage user={user} />} />
          <Route
            path="/areas/:area_id"
            element={<EditAreaPage user={user} />}
          />
          <Route
            path="/areas/delete/:area_id"
            element={<DeleteAreaPage user={user} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App

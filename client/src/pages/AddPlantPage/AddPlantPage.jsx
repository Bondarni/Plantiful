import './AddPlantPage.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../globals'
const AddPlantPage = () => {
  let navigate = useNavigate()

  let initialState = {
    kind: '',
    nickName: '',
    waterNeed: null,
    sunNeed: null,
    userId: 1,
    areaId: 1
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = async (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`${BASE_URL}/plants`, formState)
    console.log(formState)
    setFormState(initialState)
    navigate('/plants')
  }

  return (
    <div className="addplantsection">
      <h1>New Plant</h1>
      <form onSubmit={handleSubmit}>
        <label for="kind">What Kind of Plant is it?</label>
        <input
          type="text"
          kind="kind"
          id="kind"
          onChange={handleChange}
          value={formState.kind}
        />
        <label for="nickName">
          What Nickname would you like to give your plant?
        </label>
        <input
          type="text"
          nickName="nickName"
          id="nickName"
          onChange={handleChange}
          value={formState.nickName}
        />
        <button>Done!</button>
      </form>
    </div>
  )
}

export default AddPlantPage

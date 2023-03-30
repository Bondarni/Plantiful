import './EditPlantPage.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

const EditPlantPage = () => {
  let navigate = useNavigate()

  let plant_id = useParams()

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
    await axios.put(`${BASE_URL}/plants/${plant_id}`, formState)
    console.log(formState)
    setFormState(initialState)
    navigate('/plants')
  }

  return (
    <div className="editplantpagesection">
      <h1>Edit your plant's details below;</h1>
      <form className="editform" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="text" onChange={handleChange} />
        <input type="text" onChange={handleChange} />
        <input type="text" onChange={handleChange} />
        <input type="text" onChange={handleChange} />
      </form>
      <Link to={'/plants'}>
        <button>Done!</button>
      </Link>
    </div>
  )
}

export default EditPlantPage

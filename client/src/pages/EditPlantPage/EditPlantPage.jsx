import './EditPlantPage.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

const EditPlantPage = ({ user }) => {
  let navigate = useNavigate()
  let areaArray = user.areas
  let { plant_id } = useParams()

  let initialState = {
    kind: '',
    nickName: '',
    areaId: ''
  }

  console.log(initialState)
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
        <label htmlFor="kind">Kind:</label>
        <input
          type="text"
          id="kind"
          onChange={handleChange}
          value={formState.kind}
        />
        <label htmlFor="nickName">Nickname:</label>
        <input
          type="text"
          id="nickName"
          onChange={handleChange}
          value={formState.nickName}
        />
        <label htmlFor="area">Room:</label>
        <select>
          {areaArray.map((area) => (
            <option value={area.id} key={area.id}>
              {area.name}
            </option>
          ))}
        </select>
        <button>Done!</button>
      </form>
    </div>
  )
}

export default EditPlantPage

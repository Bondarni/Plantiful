import './EditAreaPage.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../globals'

const EditAreaPage = () => {
  let navigate = useNavigate()

  let area_id = useParams()

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
    await axios.put(`${BASE_URL}/areas/${area_id}`, formState)
    console.log(formState)
    setFormState(initialState)
    navigate('/areas')
  }

  return (
    <div className="editareapagesection">
      <h1>Edit your space details below;</h1>
      <form className="editform">
        <input type="text" />
        <input type="text" />
      </form>
      <Link to={'/areas'}>
        <button>Done!</button>
      </Link>
    </div>
  )
}

export default EditAreaPage

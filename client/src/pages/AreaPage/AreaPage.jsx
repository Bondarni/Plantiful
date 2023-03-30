import AreaCard from '../../components/AreaCard/AreaCard'
import './AreaPage.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Area = ({ user, getUser }) => {
  useEffect(() => {
    getUser()
  }, [])
  const areas = user.areas
  console.log(areas)
  return (
    <div className="areasection">
      <Link to={'/areas/new'}>
        <button className="addbutton">Click here to create a new space!</button>
      </Link>
      {areas.map((area) => (
        <AreaCard area={area} key={area.id} />
      ))}
    </div>
  )
}

export default Area

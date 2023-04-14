import './AreaPage.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AreaCard from '../../components/AreaCard/AreaCard'
import { CheckSession } from '../../services/Auth'
const Area = ({ user }) => {
  const areas = user.areas
  let yesAreas
  if (areas) {
    yesAreas = (
      <div>
        {areas.map((area) => (
          <AreaCard area={area} key={area.id} />
        ))}
      </div>
    )
  }

  const noAreas = (
    <div>
      <h1>Your account doesn't have any spaces yet.</h1>
    </div>
  )

  useEffect(() => {
    CheckSession()
  }, [])
  return (
    <div className="areasection">
      <Link to={'/areas/new'}>
        <button className="addbutton">Click here to create a new space!</button>
      </Link>
      {areas ? yesAreas : noAreas}
    </div>
  )
}

export default Area

import AreaCard from '../../components/AreaCard/AreaCard'
import './AreaPage.css'
import { Link } from 'react-router-dom'
const Area = ({ user }) => {
  const areas = user.areas
  console.log(areas)
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

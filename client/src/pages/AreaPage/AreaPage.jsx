import AreaCard from '../../components/AreaCard/AreaCard'
import './AreaPage.css'
import { Link } from 'react-router-dom'
const Area = ({ areas }) => {
  return (
    <div className="areasection">
      <Link className="addbutton">Click here to create a new space!</Link>
      {areas.map((area) => (
        <AreaCard area={area} key={area.id} />
      ))}
    </div>
  )
}

export default Area

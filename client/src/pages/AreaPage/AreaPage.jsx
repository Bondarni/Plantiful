import AreaCard from '../../components/AreaCard/AreaCard'
import './AreaPage.css'
const Area = ({ areas }) => {
  return (
    <div className="areasection">
      <button className="addbutton">Click here to create a new space!</button>
      {areas.map((area) => (
        <AreaCard area={area} key={area.id} />
      ))}
    </div>
  )
}

export default Area

import AreaCard from '../../components/AreaCard/AreaCard'
import './AreaPage.css'
const Area = ({ areas }) => {
  return (
    <div className="areasection">
      {areas.map((area) => (
        <AreaCard area={area} />
      ))}
    </div>
  )
}

export default Area

import AreaCard from '../../components/AreaCard/AreaCard'
import './AreaPage.css'
const Area = ({ areas }) => {
  return (
    <div className="areasection">
      <AreaCard areas={areas} />
    </div>
  )
}

export default Area

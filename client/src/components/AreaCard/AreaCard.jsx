import './AreaCard.css'

const AreaCard = ({ area }) => {
  return (
    <div className="areacardcontainer">
      <h1>{area.name}</h1>
    </div>
  )
}

export default AreaCard

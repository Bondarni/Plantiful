import './AreaCard.css'

const AreaCard = ({ area }) => {
  return (
    <div className="areacardcontainer">
      <h1>{area.name}</h1>
      <button className="editbutton">Edit Space Details</button>
    </div>
  )
}

export default AreaCard

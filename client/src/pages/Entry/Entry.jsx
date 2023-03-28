import './Entry.css'
import LoginCard from '../../components/LoginCard/LoginCard'
import RegisterCard from '../../components/RegisterCard/RegisterCard'
const Entry = () => {
  return (
    <div className="entrysection">
      <div className="ifreturning">
        <LoginCard />
      </div>
      <div className="ifnew">
        <RegisterCard />
      </div>
    </div>
  )
}

export default Entry

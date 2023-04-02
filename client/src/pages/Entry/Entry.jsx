import './Entry.css'
import LoginCard from '../../components/LoginCard/LoginCard'
import RegisterCard from '../../components/RegisterCard/RegisterCard'
import { useState } from 'react'
const Entry = () => {
  const [returning, setReturning] = useState(true)

  const switcheroo = () => {
    if (returning === true) {
      setReturning(false)
    } else {
      setReturning(true)
    }
  }
  return (
    <div className="entrysection">
      {returning ? (
        <div className="ifreturning">
          <LoginCard />
          <button className="returnswitch" onClick={switcheroo}>
            New to the app? Click here to create an account!
          </button>
        </div>
      ) : (
        <div className="ifnew">
          <RegisterCard />
          <button className="returnswitch" onClick={switcheroo}>
            Already have an account? Sign in here!
          </button>
        </div>
      )}
    </div>
  )
}

export default Entry

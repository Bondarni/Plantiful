import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navsection">
      <NavLink to="/home">Home</NavLink>
    </div>
  )
}

export default NavBar

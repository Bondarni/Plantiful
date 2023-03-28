import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navsection">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/areas">Your Spaces</NavLink>
      <NavLink to="/plants">Your Plants</NavLink>
      <NavLink to="/userinfo">Your Info</NavLink>
      <NavLink to="/">Logout</NavLink>
    </div>
  )
}

export default NavBar

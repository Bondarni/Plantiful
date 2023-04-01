import './NavBar.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navsection">
      <NavLink to="/home">
        {({ isActive, isPending }) => (
          <span className={isActive ? 'active' : ''}>Home</span>
        )}
      </NavLink>
      <NavLink to="/about">
        {({ isActive, isPending }) => (
          <span className={isActive ? 'active' : ''}>About</span>
        )}
      </NavLink>
      <NavLink to="/areas">
        {({ isActive, isPending }) => (
          <span className={isActive ? 'active' : ''}>Your Spaces</span>
        )}
      </NavLink>
      <NavLink to="/plants">
        {({ isActive, isPending }) => (
          <span className={isActive ? 'active' : ''}>Your Plants</span>
        )}
      </NavLink>
      <NavLink to="/userinfo">
        {({ isActive, isPending }) => (
          <span className={isActive ? 'active' : ''}>Your Info</span>
        )}
      </NavLink>
      <NavLink to="/">
        {({ isActive, isPending }) => (
          <span className={isActive ? 'active' : ''}>Logout</span>
        )}
      </NavLink>
    </div>
  )
}

export default NavBar

import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { SignInUser } from '../../services/Auth'

const Login = ({ setUser }) => {
  let navigate = useNavigate()

  const initialState = { email: '', password: '' }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (e) => {
    e.preventDefault()
    setFormState({ ...formState, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formState)
    setUser(payload)
    setFormState(initialState)
    navigate('/home')
  }

  return (
    <div className="logincardsection">
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={formState.email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          onChange={handleChange}
          value={formState.password}
        />
        <button className="loginbutton">
          Click here to enter your garden!
        </button>
      </form>
      <Link to="/register">
        <button>No account? Sign up for one here!</button>
      </Link>
    </div>
  )
}

export default Login

import User from './api'

export const SignInUser = async (data) => {
  try {
    const res = await User.post(`/`, data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await User.post(`/`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await User.get('/api/patients/session')
    return res.data
  } catch (error) {
    throw error
  }
}

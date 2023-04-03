import User from './api'

export const SignInUser = async (data) => {
  try {
    const res = await User.post('/auth/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await User.post('/auth/register', data)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await User.get(`/auth/session`)
    return res.data
  } catch (error) {
    throw error
  }
}

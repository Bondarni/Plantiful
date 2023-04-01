import Axios from 'axios'

import { BASE_URL } from '../globals'

const User = Axios.create(`${BASE_URL}/users`)

User.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default User

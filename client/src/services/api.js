import axios from 'axios'

import { BASE_URL } from '../globals'

const User = axios.create({ baseURL: BASE_URL })

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

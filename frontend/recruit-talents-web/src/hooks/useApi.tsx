import { AxiosError } from 'axios'
import api from '../api/api'

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/validate', { token })
    return response.data
  },
  signin: async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login ', { email, password })
      return response.data
    } catch (err) {
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) return null
      }

      throw err
    }
  },
  logout: async () => {
    const response = await api.post('/logout')
    return response.data
  },
})

import axios from 'axios'
import { ACCESS_TOKEN } from './constants'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) => {
        // Skip adding token for register and login routes
        if (
            config.url?.includes('/core/user/register/') || 
            config.url?.includes('/api-token/')
        ) {
            // Just return config without adding Authorization header
            return config
        }

        // For other requests, add Authorization header if token exists
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api

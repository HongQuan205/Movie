import axios from 'axios'
import { BASE_URL } from '../constant/config'

const axiosClient = axios.create({
    baseURL: BASE_URL
})
axiosClient.interceptors.request.use((config) =>{
    const user = localStorage.getItem('user')
    if(user) {
        const {accessToken} = JSON.parse(user)
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

export default axiosClient
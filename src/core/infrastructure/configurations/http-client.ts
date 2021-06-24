import axios from 'axios'

const token = localStorage.getItem('token')
const bearer = 'Bearer'        
const header = { 'Authorization': `${bearer} ${token}` }

const axiosInstance = axios.create({
    baseURL: 'http://localhost:25025/api',
    timeout: 5000,
    headers: (token ? header : {})
});

export { axiosInstance }
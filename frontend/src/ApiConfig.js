import axios from 'axios';

const api = axios.create({
    URL: 'http://localhost:5000/api/v1'
})

api.interceptors.request.use((req) => {
    const token = localStorage.getItem("token")
    if(token){
        req.headers.Authorization = `${token}`
    }
    return req;
})

export default api;
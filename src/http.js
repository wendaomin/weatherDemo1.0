import axios from 'axios'
const http = axios.create({
  baseURL: 'http://localhost:3003/weather/api',
  timeout: 20 * 1000, // Timeout
})
http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// axios响应拦截器
http.interceptors.response.use(
  response => {
    return response.status === 200 ? Promise.resolve(response) : Promise.reject(response);
  },
  error => {
    return Promise.reject(error)
  },
)
export default http
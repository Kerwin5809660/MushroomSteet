import axios from 'axios'

export function request(config) {
    const axios1 = axios.create({
      // baseURL:"static/data/homeData",
      timeout:5000
    })

//响应式拦截
  axios.interceptors.response.use(res => {
    return res.data
  })
  return axios(config)
}






import axios from 'axios'
import qs from 'qs'
import Router from '../router'

let _axios = axios.create({
  // baseURL: '/api',
  withCredentials: true,
  timeout: 10000,
  transformRequest: [function (data) {
    return qs.stringify(data)
  }],

  paramsSerializer: function (params) {
    return qs.stringify(params)
  }
})

// 请求拦截器
_axios.interceptors.request.use(config => {
  config.headers.Accept = 'application/json'
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
_axios.interceptors.response.use(res => {
  if (res.data.msg === '尚未登录') Router.replace({name: 'login'})
  if (res.data.status == 1) return res.data
  else return Promise.reject(res.data)
}, err => {
  return Promise.reject(err.data)
})

export default _axios

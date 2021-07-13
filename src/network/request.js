import axios from "axios";

export function request(config){
  //1. 创建axios实例
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  //2.axios的拦截器
  //2.1 请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
    },error => {

      })

  // 2.2 响应拦截
  instance.interceptors.request.use(res => {
    return res
  },error => {

  })

  //3发送真正的网络请求
  return instance(config)
}
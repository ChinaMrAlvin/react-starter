import axios from 'axios'

const request = axios.create({
  // baseURL: ,  // api的base_url
  timeout: 5000  // 请求超时时间
});

request.interceptors.request.use(config => {
  // TODO 做加密验证处理
  return config;
}, error => {
  return Promise.reject(error);
});

request.interceptors.response.use(resp => {
  const { data, statusCode, message } = resp.data;
  if (statusCode !== 0) {
    console.log('状态码错误: 状态码===>', statusCode, ', 参考信息===>', message);
  }
  return data;
}, error => {
  return Promise.reject(error);
});

export default request;

import axios, { AxiosRequestConfig, ResponseData } from 'axios'

const baseURL: string = process.env.NEXT_PUBLIC_API_URL || ''

const http = axios.create({
  baseURL,
  timeout: 60000,
  withCredentials: true,
})

http.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

http.interceptors.response.use((response) => {
  if (response.status !== 200) return Promise.reject(response.data)

  return response.data
})
/** get & post */
interface Get {
  <T>(url: string, params?: object, config?: AxiosRequestConfig): Promise<
    ResponseData<T>
  >
}

interface Post {
  <T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<
    ResponseData<T>
  >
}

export const get: Get = async (url, params, config) =>
  http.get(url, { params, ...config })

export const post: Post = async (url, data, config) =>
  http.post(url, data, config)

export default http

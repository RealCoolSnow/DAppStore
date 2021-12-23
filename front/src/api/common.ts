import { AppInfo } from '@/types'
import http, { get } from './http'

export const helloGet = (params?: any, config?: any) =>
  http.get('hello', { params, ...config })

export const helloGet2 = (params?: any, config?: any) =>
  get<string>('hello', { params, ...config })

export const helloPost = (params?: any, config?: any) =>
  http.post('hello', params, config)

export const getDappsByCategory = (category_id: number) =>
  get<AppInfo[]>(`dapp_by_category/${category_id}`)

export const getDappByKey = (hash_key: string) =>
  get<AppInfo[]>(`dapp_by_key/${hash_key}`)

export type AppBaseInfo = {
  name: string // app name
  description: string //app description
  icon: string //icon
  hash_key: string // hash key
  banner?: string // banner image
  url?: string // url
  category_id?: number
  category_color?: string
  category_name?: string
}

export type CategoryInfo = {
  id: number
  name: string
  color?: string //color for background|text
  tag?: string
}

export type RankInfo = {
  up: number //up vote
  down: number //down vote
}

export type AppInfo = AppBaseInfo & RankInfo

export type HomeData = {
  feature_dapps: AppBaseInfo[]
  category_list: CategoryInfo[]
  rank_list: AppInfo[]
  recent_add_list: AppInfo[]
}

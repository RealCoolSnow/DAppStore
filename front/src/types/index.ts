export type AppBaseInfo = {
  name: string // app name
  desc: string //app description
  icon: string //icon
  package_name: string //package name
  banner?: string // banner image
  url?: string // url
}

export type CategoryInfo = {
  id: number
  name: string
  icon: string
  color?: string //color for background|text
  tag?: string
}

export type RankInfo = {
  up: number //up vote
  down: number //down vote
}

export type AppInfo = AppBaseInfo & RankInfo

export type HomeData = {
  feature_list: AppBaseInfo[]
  category_list: CategoryInfo[]
  rank_list: AppInfo[]
  recent_add_list: AppInfo[]
}

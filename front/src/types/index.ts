export type AppBaseInfo = {
  name: string // app name
  desc: string //app description
  icon: string //icon
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

export type HomeData = {
  feature_list: AppBaseInfo[]
  category_list: CategoryInfo[]
}

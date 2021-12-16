export type AppBaseInfo = {
  name: string // app name
  desc: string //app description
  icon: string //icon
  banner?: string // banner image
  url?: string // url
}

export type HomeData = {
  feature_list: AppBaseInfo[]
}

import { AppBaseInfo } from '@/types'
import FeatureAppItem from './item'

type Props = {
  appList: AppBaseInfo[]
}

const FeatureAppList = ({ appList }: Props) => {
  const list = (appList || []).map((item) => {
    return <FeatureAppItem appInfo={item} key={item.name} />
  })
  return (
    <div className="grid gap-8 grid-cols-3 overflow-x-auto snap-x">{list}</div>
  )
}
export default FeatureAppList

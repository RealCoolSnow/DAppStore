import { AppInfo } from '@/types'
import { useTranslation } from 'next-i18next'
import AppItem from './AppItem'

type Props = {
  appList: AppInfo[]
}

const RankList = ({ appList }: Props) => {
  const { t } = useTranslation('common')
  let i = 1
  const list = appList.map((item) => {
    return <AppItem appInfo={item} rankIndex={i++} key={item.name} />
  })
  return (
    <>
      <h1 className="title-normal">{t('highest_ranked')}</h1>
      <div className="mt-6 grid gap-6 grid-flow-col grid-rows-3 overflow-x-auto snap-x pb-4">
        {list}
      </div>
    </>
  )
}
export default RankList

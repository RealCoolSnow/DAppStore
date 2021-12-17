import { AppInfo } from '@/types'
import { useTranslation } from 'next-i18next'
import AppItem from './AppItem'

type Props = {
  appList: AppInfo[]
}

const RecentAddList = ({ appList }: Props) => {
  const { t } = useTranslation('common')
  const list = appList.map((item) => {
    return <AppItem appInfo={item} key={item.name} />
  })
  return (
    <>
      <h1 className="title-normal">{t('recent_add')}</h1>
      <div className="mt-6 grid gap-8 grid-cols-3 overflow-x-auto snap-x pb-4">
        {list}
      </div>
    </>
  )
}
export default RecentAddList

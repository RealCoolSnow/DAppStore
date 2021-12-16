import { useTranslation } from 'next-i18next'

const RecentAddList = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <h1 className="title-normal">{t('recently_added')}</h1>
    </>
  )
}
export default RecentAddList

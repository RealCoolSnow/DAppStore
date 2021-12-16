import { useTranslation } from 'next-i18next'

const RankList = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <h1 className="title-normal">{t('highest_ranked')}</h1>
    </>
  )
}
export default RankList

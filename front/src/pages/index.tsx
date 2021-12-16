import type { InferGetStaticPropsType, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageTitle from '@/components/common/PageTitle'
import SearchBar from '@/components/SearchBar'
import FeatureAppList from '@/components/ui/FeatureApp/list'
import { baseUrl } from '@/config'
import { AppBaseInfo, HomeData } from '@/types'

type Props = {
  data: HomeData
}
const Home: NextPage<Props> = ({ data }: Props) => {
  const { t } = useTranslation('common')
  const onSearch = (words: string) => {
    alert(words)
  }
  return (
    <>
      <PageTitle title={t('home')} />
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{t('discover')}</h1>
        {/* search */}
        <div className="mt-4">
          <SearchBar onSearch={onSearch} />
        </div>
        {/* feature list */}
        <div className="mt-4">
          <FeatureAppList appList={data.feature_list} />
        </div>
      </div>
    </>
  )
}

type StaticProps = {
  locale: string
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  // console.log(locale)
  const res = await fetch(`${baseUrl}/api/home`)
  const data = await res.json()
  // console.log(data)
  return {
    props: {
      data,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home

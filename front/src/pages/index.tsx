import type { InferGetStaticPropsType, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageTitle from '@/components/common/PageTitle'
import SearchBar from '@/components/SearchBar'
import FeatureAppList from '@/components/ui/FeatureApp/list'
import { baseUrl } from '@/config'
import { AppBaseInfo, HomeData } from '@/types'
import CategoryList from '@/components/ui/category/list'
import RankList from '@/components/ui/RankList'
import RecentAddList from '@/components/ui/RecentAddList'

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
      <div>
        <h1 className="title-normal">{t('discover')}</h1>
        {/* search */}
        <div className="mt-4">
          <SearchBar onSearch={onSearch} />
        </div>
        {/* feature list */}
        <div className="mt-4">
          <FeatureAppList appList={data.feature_list} />
        </div>
        {/* category */}
        <div className="mt-4">
          <CategoryList categoryList={data.category_list} />
        </div>
        {/* rank */}
        <div className="mt-4">
          <RankList />
        </div>
        {/* recent add */}
        <div className="mt-4">
          <RecentAddList />
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

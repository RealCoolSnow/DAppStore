/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageTitle from '@/components/common/PageTitle'
import SearchBar from '@/components/SearchBar'
import FeatureAppList from '@/components/ui/FeatureApp/list'
import { baseUrl } from '@/config'
import { HomeData } from '@/types'
import CategoryList from '@/components/ui/category/list'
import RankList from '@/components/ui/RankList'
import RecentAddList from '@/components/ui/RecentAddList'

const Footer = () => {
  const { t } = useTranslation('common')
  const onSubmit = () => {}
  return (
    <div className="mt-6 bg-gray-100 p-6">
      <div className="flex items-start btn" onClick={onSubmit}>
        <img src="/svg/add.svg" alt="submit" className="w-10 h-10" />
        <div className="ml-4">
          <div className="text-sm font-semibold">
            {t('footer.submit_title')}
          </div>
          <div className="text-sm text-gray-400">{t('footer.submit_desc')}</div>
        </div>
      </div>
    </div>
  )
}
type Props = {
  data: HomeData
}
const HomePage: NextPage<Props> = ({ data }: Props) => {
  const { t } = useTranslation('common')
  const onSearch = (words: string) => {
    alert(words)
  }
  return (
    <>
      <PageTitle title={t('home')} />
      <div className="p-2">
        <h1 className="title-normal">{t('discover')}</h1>
        {/* search */}
        <div className="mt-4">
          <SearchBar onSearch={onSearch} />
        </div>
        {/* feature list */}
        <div className="mt-4">
          <FeatureAppList appList={data.feature_dapps} />
        </div>
        {/* category */}
        <div className="mt-4">
          <CategoryList categoryList={data.category_list} />
        </div>
        {/* rank */}
        <div className="mt-4">
          <RankList appList={data.rank_list} />
        </div>
        {/* recent add */}
        <div className="mt-4">
          <RecentAddList appList={data.recent_add_list} />
        </div>
      </div>
      <Footer />
    </>
  )
}

type StaticProps = {
  locale: string
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  // console.log(locale)
  const res = await fetch(`${baseUrl}/home`)
  const data = await res.json()
  return {
    props: {
      data: data['data'],
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default HomePage

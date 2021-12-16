import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageTitle from '@/components/common/PageTitle'
import SearchBar from '@/components/SearchBar'

const Home: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const onSearch = (words: string) => {
    //console.log('onSearch', words)
    alert(words)
  }
  return (
    <>
      <PageTitle title={t('home')} />
      <div className="flex flex-col">
        <h1 className="text-lg font-bold">{t('discover')}</h1>
        <div className="mt-2">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </>
  )
}

type StaticProps = {
  locale: string
}
export const getStaticProps = async ({ locale }: StaticProps) => {
  console.log(locale)

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home

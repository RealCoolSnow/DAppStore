/* eslint-disable @next/next/no-img-element */
import { getDappByKey } from '@/api/common'
import Loading from '@/components/Loading'
import { AppInfo } from '@/types'
import { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const AppDetailPage: NextPage = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const [appInfo, setAppInfo] = useState<AppInfo>()
  const { key } = router.query
  useEffect(() => {
    getDappByKey(key as string).then((res) => {
      console.log(res)
      if (res && res.data && res.data.length > 0) {
        setAppInfo(res.data[0])
      }
    })
  }, [key])
  return (
    <>
      {appInfo && (
        <div className="px-2">
          <div className="flex flex-col items-center">
            <img
              src={`/icons/${appInfo.hash_key}`}
              className="rounded-full shadow-gray-300 w-24 h-24 mt-16 bg-white shadow-xl"
              alt={appInfo.name}
            />
            <div className="text-xl font-semibold mt-2">{appInfo.name}</div>
            <div className="text-gray-400">{appInfo.category_name}</div>
            <a
              className="bg-primary text-white px-6 py-2 rounded-full mt-4 btn"
              href={appInfo.url}
              target="_blank"
              rel="noreferrer"
            >
              {t('open')}
            </a>
          </div>
          <div className="bg-gray-100 h-px w-full mt-4"></div>
          <div className="mt-2 text-sm text-gray-400">{t('description')}</div>
          <div>{appInfo.description}</div>
          <div className="bg-gray-100 h-px w-full mt-4"></div>
          <div className="mt-2 text-sm text-gray-400">{t('url')}</div>
          <a
            href={appInfo.url}
            className="text-primary"
            target="_blank"
            rel="noreferrer"
          >
            {appInfo.url}
          </a>
          <div className="bg-gray-100 h-px w-full mt-4"></div>
        </div>
      )}
      {!appInfo && (
        <div className="w-full h-screen flex justify-center items-center">
          <Loading />
        </div>
      )}
    </>
  )
}

type StaticProps = {
  locale: string
}

export const getStaticProps = async ({ locale }: StaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default AppDetailPage

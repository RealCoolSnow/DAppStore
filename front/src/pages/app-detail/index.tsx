/* eslint-disable @next/next/no-img-element */
import { AppInfo } from '@/types'
import { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  appInfo: AppInfo
}
const AppDetailPage: NextPage<Props> = ({ appInfo }: Props) => {
  const dapp = {
    name: 'Gitcoin Grants',
    description: 'Gitcoin Grants helps creators grow and sustain their open source projects.',
    icon: 'https://dap.ps/metadata/image/QmbpwFyCSGhJe7WMU5ttmAcJJLzcoa4WiZ7CMFncTgwfcT', //'https://dap.ps/static/media/matcha_logo.66bd4fb1.png',
    banner: 'https://dap.ps/static/media/matcha_banner.59887a66.png',
    url: 'https://gitcoin.co/grants',
    package_name: 'gitcoin_grants',
    up: 100,
    down: 10,
  }
  appInfo = dapp
  const { t } = useTranslation('common')
  return (
    <div className="px-2">
      <div className="flex flex-col items-center">
        <img
          src={appInfo.icon}
          className="rounded-full shadow-gray-300 w-24 h-24 mt-16 bg-white shadow-xl"
          alt={appInfo.name}
        />
        <div className="text-xl font-semibold mt-2">{appInfo.name}</div>
        <div className="text-gray-400">Exchanges</div>
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

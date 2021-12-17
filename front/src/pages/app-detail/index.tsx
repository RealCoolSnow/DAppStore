import { AppInfo } from '@/types'
import { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  appInfo: AppInfo
}
const AppDetail: NextPage<Props> = (props: Props) => {
  return <></>
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
export default AppDetail

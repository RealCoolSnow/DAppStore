import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { ReactElement } from 'react'
import LocaleSwitch from '../LocaleSwitch'
import NavBar from './NavBar'

// Header
const Header = () => {
  return (
    <Head>
      <meta name="description" content="DAppStore" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>DAppStore</title>
    </Head>
  )
}
// Footer
const Footer = () => {
  const { t } = useTranslation('common')
  return (
    <footer className="w-full text-center absolute bottom-1">
      {/* <a
        className="text-sm text-gray-500"
        href="https://twitter.com/CoolSnow0927"
        target="_blank"
        rel="noreferrer"
      >
        {t('footer.description')}
      </a> */}
    </footer>
  )
}
// Layout
type Props = {
  children: ReactElement
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout

export { Header, Footer }

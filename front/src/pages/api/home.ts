import { AppBaseInfo, AppInfo, CategoryInfo, HomeData } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeData>
) {
  const dapp = {
    name: 'Gitcoin Grants',
    desc: 'Gitcoin Grants helps creators grow and sustain their open source projects.',
    icon: 'https://dap.ps/metadata/image/QmbpwFyCSGhJe7WMU5ttmAcJJLzcoa4WiZ7CMFncTgwfcT', //'https://dap.ps/static/media/matcha_logo.66bd4fb1.png',
    banner: 'https://dap.ps/static/media/matcha_banner.59887a66.png',
    url: 'https://gitcoin.co/grants',
    package_name: 'gitcoin_grants',
  }
  const feature_list: AppBaseInfo[] = [
    dapp,
    { ...dapp, name: `${dapp.name}-2` },
    {
      ...dapp,
      name: `${dapp.name}-3`,
      desc: 'The most efficient DeFi / DEX aggregator with the best exchange rates accross Ethereum and Binance Smart Chain.',
    },
  ]
  const category_list: CategoryInfo[] = [
    {
      id: 0,
      name: 'Exchanges',
      icon: 'https://dap.ps/static/media/exchanges.59b13742.svg',
      color: 'rgba(136,122,249,.15)',
    },
    {
      id: 1,
      name: 'Defi',
      icon: 'https://dap.ps/static/media/defi.93df8252.svg',
      color: 'rgba(38,166,154,.15)',
    },
    {
      id: 2,
      name: 'Marketplaces',
      icon: 'https://dap.ps/static/media/marketplaces.964ef8e9.svg',
      color: 'rgba(254,143,89,.15)',
    },
    {
      id: 3,
      name: 'Collectibles',
      icon: 'https://dap.ps/static/media/collectibles.48f1d6ea.svg',
      color: 'rgba(81,208,240,.15)',
    },
    {
      id: 4,
      name: 'Games',
      icon: 'https://dap.ps/static/media/games.5f2fc3ba.svg',
      color: 'rgba(211,126,244,.15)',
    },
    {
      id: 5,
      name: 'Social Networks',
      icon: 'https://dap.ps/static/media/social-networks.f0cf5795.svg',
      color: 'rgba(124,218,0,.15)',
    },
    {
      id: 6,
      name: 'Utilities',
      icon: 'https://dap.ps/static/media/utilities.624c69f9.svg',
      color: 'rgba(124,218,0,.15)',
    },
    {
      id: 7,
      name: 'Crypto Onramps',
      icon: 'https://dap.ps/static/media/onramp.c90abf02.svg',
      color: 'rgba(39,39,249,.15)',
    },
    {
      id: 8,
      name: 'Other',
      icon: 'https://dap.ps/static/media/other.9170c622.svg',
      color: 'rgba(255,202,15,.15)',
    },
  ]
  const dapp2: AppInfo = { up: 100, down: 10, ...dapp }
  const rank_list = [dapp2, dapp2, dapp2, dapp2, dapp2, dapp2]
  const recent_add_list = [...rank_list, dapp2, dapp2, dapp2]
  res
    .status(200)
    .json({ feature_list, category_list, rank_list, recent_add_list })
}

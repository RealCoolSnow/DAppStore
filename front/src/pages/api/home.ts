import { CATEGORY_LIST } from '@/constants/categories'
import { AppBaseInfo, AppInfo, CategoryInfo, HomeData } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeData>
) {
  const dapp = {
    name: 'Gitcoin Grants',
    description: 'Gitcoin Grants helps creators grow and sustain their open source projects.',
    icon: 'https://dap.ps/metadata/image/QmbpwFyCSGhJe7WMU5ttmAcJJLzcoa4WiZ7CMFncTgwfcT', //'https://dap.ps/static/media/matcha_logo.66bd4fb1.png',
    banner: 'https://dap.ps/static/media/matcha_banner.59887a66.png',
    url: 'https://gitcoin.co/grants',
    package_name: 'gitcoin_grants',
  }
  const feature_dapps: AppBaseInfo[] = [
    dapp,
    { ...dapp, name: `${dapp.name}-2` },
    {
      ...dapp,
      name: `${dapp.name}-3`,
      description: 'The most efficient DeFi / DEX aggregator with the best exchange rates accross Ethereum and Binance Smart Chain.',
    },
  ]
  const category_list: CategoryInfo[] = CATEGORY_LIST

  const dapp2: AppInfo = { up: 100, down: 10, ...dapp }
  const rank_list = [dapp2, dapp2, dapp2, dapp2, dapp2, dapp2]
  const recent_add_list = [...rank_list, dapp2, dapp2, dapp2]
  res
    .status(200)
    .json({ feature_dapps, category_list, rank_list, recent_add_list })
}

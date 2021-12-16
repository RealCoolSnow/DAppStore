import { AppBaseInfo, HomeData } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HomeData>
) {
  const dapp = {
    name: 'Gitcoin Grants',
    desc: 'Gitcoin Grants helps creators grow and sustain their open source projects.',
    icon: 'https://dap.ps/static/media/matcha_logo.66bd4fb1.png',
    banner: 'https://dap.ps/static/media/matcha_banner.59887a66.png',
    url: 'https://gitcoin.co/grants',
  }
  const feature_list: AppBaseInfo[] = [
    dapp,
    { ...dapp, name: `${dapp.name}-2` },
    { ...dapp, name: `${dapp.name}-3` },
  ]
  res.status(200).json({ feature_list })
}

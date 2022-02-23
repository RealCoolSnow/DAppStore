import { CATEGORY_LIST } from '@/constants/categories'
import { CategoryInfo } from '@/types'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CategoryInfo[]>
) {
  res.status(200).json(CATEGORY_LIST)
}

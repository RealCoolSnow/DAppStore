/* eslint-disable @next/next/no-img-element */
import { CategoryInfo } from '@/types'
import { rgb2rgba } from '@/utils/util'
import Link from 'next/link'
import React from 'react'

type Props = {
  category: CategoryInfo
}
const CategoryItem = ({ category }: Props) => {
  const mainStyle = {
    background: rgb2rgba(category.color || '', 0.15),
  }
  return (
    <Link href={`/category/${category.id}`} passHref>
      <div
        className="w-full bg-gray-200 flex flex-col items-center py-4 rounded-2xl btn"
        style={mainStyle}
      >
        <img
          src={`/svg/category/${category.tag?.toLowerCase()}.svg`}
          className="w-12 h-12"
          alt={category.name}
        />
        <span className="text-sm mt-1 text-center">{category.name}</span>
      </div>
    </Link>
  )
}

export default React.memo(CategoryItem)

/* eslint-disable @next/next/no-img-element */
import { CategoryInfo } from '@/types'
import React from 'react'

type Props = {
  category: CategoryInfo
}
const CategoryItem = ({ category }: Props) => {
  const mainStyle = {
    background: category.color,
  }
  return (
    <a className="w-full bg-gray-200 flex flex-col items-center py-4 rounded-2xl btn" style={mainStyle}>
      <img
        src={category.icon || ''}
        className="w-12 h-12"
        alt={category.name}
      />
      <span className="text-sm mt-1">{category.name}</span>
    </a>
  )
}

export default React.memo(CategoryItem)

/* eslint-disable @next/next/no-img-element */
import { baseUrl } from '@/config'
import { CategoryInfo } from '@/types'
import { GetStaticPaths, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

type Props = {
  id: string
  category_list: CategoryInfo[]
}

const CategoryPage: NextPage<Props> = ({ id, category_list }: Props) => {
  const [currentId, setCurrentId] = useState(parseInt(id))
  const [expand, setExpand] = useState(false)
  const current: CategoryInfo = category_list[currentId]
  console.log(current)
  const currentStyle = {
    background: current.color,
  }
  return (
    <div>
      {/* CategoryPicker */}
      <div className="fixed top-0 left-0 w-full p-4">
        <div
          className={`flex items-center btn shadow-xl shadow-gray-200 ${
            expand ? 'rounded-t-md' : 'rounded-md'
          }`}
          style={currentStyle}
          onClick={() => setExpand(!expand)}
        >
          <img src={current.icon} alt={current.name} className="w-12 h-12" />
          <div className="text-white font-semibold ml-2 text-lg">
            {current.name}
          </div>
          <img
            src="/svg/dropdown-arrows.svg"
            alt={current.name}
            className="ml-auto mr-4"
          />
        </div>
        {expand && (
          <div className="flex flex-col justify-center shadow-xl shadow-gray-200 bg-white rounded-b-md pt-2">
            {category_list.map((category, index) => {
              return (
                <div
                  key={category.id}
                  className="flex my-1 items-center btn"
                  onClick={() => {
                    setCurrentId(category.id)
                    setExpand(false)
                  }}
                >
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="w-8 h-8"
                  />
                  <div
                    className={`font-semibold ml-2 opacity-80 ${
                      index == currentId ? 'text-primary' : 'text-gray-600'
                    }`}
                  >
                    {category.name}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

type StaticParams = {
  id: string
}

type StaticProps = {
  locale: string
  params: StaticParams
}

export const getStaticProps = async ({ locale, params }: StaticProps) => {
  console.log(locale, params)
  const res = await fetch(`${baseUrl}/api/category`)
  const category_list = await res.json()
  return {
    props: {
      category_list,
      id: params.id,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/api/category`)
  const category_list = await res.json()
  const paths = category_list.map((category: CategoryInfo) => ({
    params: { id: `${category.id}` },
  }))
  return { paths, fallback: false }
}

export default CategoryPage

/* eslint-disable @next/next/no-img-element */
import { getDappsByCategory } from '@/api/common'
import Loading from '@/components/Loading'
import AppItem from '@/components/ui/AppItem'
import { baseUrl } from '@/config'
import { AppInfo, CategoryInfo } from '@/types'
import { GetStaticPaths, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type Props = {
  id: string
  category_list: CategoryInfo[]
}

const CategoryPage: NextPage<Props> = ({ id, category_list }: Props) => {
  const router = useRouter()
  const currentId = parseInt(id)
  const [expand, setExpand] = useState(false)
  const [loading, setLoading] = useState(true)
  const [dapps, setDapps] = useState<AppInfo[]>([])
  const current: CategoryInfo = category_list[currentId - 1]
  const currentStyle = {
    background: current.color,
  }
  useEffect(() => {
    setLoading(true)
    getDappsByCategory(currentId)
      .then((res) => {
        setLoading(false)
        setDapps(res.data || [])
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [currentId])
  useEffect(() => {
    return () => {
      setDapps([])
    }
  }, [])
  const AppListView = () => {
    if (loading) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <Loading />
        </div>
      )
    } else {
      const list = (dapps || []).map((item, index) => {
        return (
          <div key={index} className="mt-2 border-b-gray-200 border-b pb-2">
            <AppItem appInfo={item} singleLine={true} />
          </div>
        )
      })
      return <div className="mt-20">{list}</div>
    }
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
          <img
            src={`/svg/category/${current.tag?.toLowerCase()}.svg`}
            alt={current.name}
            className="w-12 h-12"
          />
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
                    setExpand(false)
                    router.replace({ pathname: `/category/${category.id}` })
                  }}
                >
                  <img
                    src={`/svg/category/${category.tag?.toLowerCase()}.svg`}
                    alt={category.name}
                    className="w-8 h-8"
                  />
                  <div
                    className={`font-semibold ml-2 opacity-80 ${
                      index == currentId - 1 ? 'text-primary' : 'text-gray-600'
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
      <AppListView />
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
  const res = await fetch(`${baseUrl}/categories`)
  const data = await res.json()
  return {
    props: {
      category_list: data['data'],
      id: params.id,
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${baseUrl}/categories`)
  const data = await res.json()
  const category_list = data['data']
  const paths = category_list.map((category: CategoryInfo) => ({
    params: { id: `${category.id}` },
  }))
  return { paths, fallback: false }
}

export default CategoryPage

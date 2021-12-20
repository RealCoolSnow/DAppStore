import { baseUrl } from '@/config'
import { CategoryInfo } from '@/types'
import { GetStaticPaths, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

type Props = {
  id: string
  category_list: CategoryInfo[]
}

const CategoryPage: NextPage<Props> = ({ id, category_list }: Props) => {
  const cid = parseInt(id)
  const current: CategoryInfo = category_list[cid]
  console.log(current)
  return (
    <div>
      {/* CategoryPicker */}
      <div className="fixed top-4 left-0 px-6">
        <div className="bg-primary">
          <div className="text-white">CategoryPicker</div>
        </div>
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

import { CategoryInfo } from '@/types'
import { useTranslation } from 'next-i18next'
import CategoryItem from './item'

type Props = {
  categoryList: CategoryInfo[]
}
const CategoryList = ({ categoryList }: Props) => {
  const { t } = useTranslation('common')
  const list = categoryList.map((item) => {
    return <CategoryItem key={item.id} category={item} />
  })
  return (
    <>
      <div>
        <h1 className="text-lg font-bold">{t('categories')}</h1>
      </div>
      <div className="grid gap-4 grid-cols-3 mt-2 md:grid-cols-7">{list}</div>
    </>
  )
}

export default CategoryList

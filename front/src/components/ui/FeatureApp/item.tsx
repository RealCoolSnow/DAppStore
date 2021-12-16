/* eslint-disable @next/next/no-img-element */
import { AppBaseInfo } from '@/types'

type Props = {
  appInfo: AppBaseInfo
}

const FeatureAppItem = ({ appInfo }: Props) => {
  return (
    <a
      className="btn snap-center flex flex-col min-w-[16rem]"
      href={appInfo.url}
      target="_blank"
      rel="noreferrer"
    >
      <img
        src={appInfo.banner || ''}
        className="w-full h-auto rounded-2xl object-cover"
        alt={appInfo.name}
      />
      <div className="mt-2 flex">
        <img
          src={appInfo.icon || ''}
          className="w-10 h-10 rounded-full"
          alt={appInfo.name}
        />
        <div className="flex-1 p-2">
          <p className="text-lg font-medium">{appInfo.name}</p>
          <p className="text-sm text-gray-400 leading-5">{appInfo.desc}</p>
        </div>
      </div>
    </a>
  )
}
export default FeatureAppItem

/* eslint-disable @next/next/no-img-element */
import { AppRankInfo } from '@/types'

type Props = {
  appInfo: AppRankInfo
  rankIndex?: number
}
const AppItem = ({ appInfo, rankIndex }: Props) => {
  const showApp = () => {
    alert(appInfo.url)
  }
  return (
    <div className="snap-center flex">
      {rankIndex && rankIndex > 0 && (
        <div className="mt-2 text-sm text-gray-500">{rankIndex}</div>
      )}
      <div className="px-6 flex w-72">
        <img
          src={appInfo.icon}
          alt={appInfo.name}
          className="w-10 h-10 rounded-full"
          onClick={showApp}
        />
        <div className="flex flex-col ml-4">
          <span className="font-semibold" onClick={showApp}>
            {appInfo.name}
          </span>
          <span className="text-sm text-gray-400" onClick={showApp}>
            {appInfo.desc}
          </span>
          <div className="mt-2 flex items-center justify-content">
            <img
              src="/svg/like.svg"
              alt="like"
              className="w-6 h-6 rounded-full"
            />
            <span className="text-sm text-gray-500 ml-1">{appInfo.up}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AppItem

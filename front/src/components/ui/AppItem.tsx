/* eslint-disable @next/next/no-img-element */
import { AppInfo } from '@/types'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  appInfo: AppInfo
  rankIndex?: number
  singleLine?: boolean
}
const AppItem = ({ appInfo, rankIndex, singleLine }: Props) => {
  const router = useRouter()

  const showApp = () => {
    // alert(appInfo.url)
    router.push({ pathname: '/app-detail' })
  }
  return (
    <div className="snap-center flex">
      {rankIndex && rankIndex > 0 && (
        <div className="mt-2 text-sm text-gray-500">{rankIndex}</div>
      )}
      <div className={`px-6 flex ${singleLine ? 'w-full' : 'w-72'}`}>
        <img
          src={`/icons/${appInfo.hash_key}`}
          alt={appInfo.name}
          className="w-10 h-10 rounded-full"
          onClick={showApp}
        />
        <div className="flex flex-col ml-4">
          <span className="font-semibold" onClick={showApp}>
            {appInfo.name}
          </span>
          <span className="text-sm text-gray-400" onClick={showApp}>
            {appInfo.description}
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
export default React.memo(AppItem)

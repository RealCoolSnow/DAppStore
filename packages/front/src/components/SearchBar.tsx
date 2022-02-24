import { searchDapp } from '@/api/common'
import { AppInfo } from '@/types'
import Image from 'next/image'
import { ChangeEvent, useState } from 'react'
import { useDebouncedCallback } from 'react-hooks'

type Props = {
  onSearch: (words: string) => void
  onChange?: (words: string) => void
  placeholder?: string
}
const SearchBar = ({ onSearch, onChange, placeholder }: Props) => {
  const [words, setWords] = useState('')
  const [focus, setFocus] = useState(false)
  const [suggestList, setSuggestList] = useState<AppInfo[]>()
  const onSuggest = async () => {
    if (words && words.length > 0) {
      const res = await searchDapp(words)
      console.log(words, res)
      setSuggestList(res.data || [])
    }
  }
  const updateSuggest = useDebouncedCallback(onSuggest, 150)
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const words = e.target.value
    setWords(words)
    if (onChange) {
      onChange(words)
    }
    updateSuggest()
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    // if (e.key === 'Enter') {
    //   onSearch(words)
    //   setWords('')
    // }
  }
  const suggestView = (suggestList || []).map((item) => {
    return (
      <a
        href={`/app-detail?key=${item.hash_key}`}
        key={item.hash_key}
        className="py-1"
      >
        {item.name}
      </a>
    )
  })
  return (
    <div className="flex flex-col relative">
      <div
        className={`rounded border py-1 px-2 flex items-center ${
          focus ? 'border-indigo-300' : 'border-gray-200'
        }`}
      >
        <Image src="/svg/search.svg" alt="search" width="24" height="24" />
        <input
          className="flex-1 border-0 outline-0 pl-2 text-gray-500"
          value={words}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          maxLength={50}
        />
      </div>
      <div className="flex flex-col absolute left-0 top-10 bg-white w-full px-2">
        {suggestView}
      </div>
    </div>
  )
}

export default SearchBar

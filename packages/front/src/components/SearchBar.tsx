import { searchDapp } from '@/api/common'
import Image from 'next/image'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'react-hooks'

type Props = {
  onSearch: (words: string) => void
  onChange?: (words: string) => void
  placeholder?: string
}
const SearchBar = ({ onSearch, onChange, placeholder }: Props) => {
  const [words, setWords] = useState('')
  const [focus, setFocus] = useState(false)
  const onSuggest = async () => {
    if (words && words.length > 0) {
      const list = await searchDapp(words)
      console.log(words, list)
    }
  }
  const suggest = useDebouncedCallback(onSuggest, 100)
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const words = e.target.value
    setWords(words)
    if (onChange) {
      onChange(words)
    }
    suggest()
  }
  const onKeyDown = (e: React.KeyboardEvent) => {
    // if (e.key === 'Enter') {
    //   onSearch(words)
    //   setWords('')
    // }
  }
  return (
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
  )
}

export default SearchBar

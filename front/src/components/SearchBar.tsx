import Image from 'next/image'
import { useState } from 'react'

type Props = {
  onSearch: (words: string) => void
  placeholder?: string
}
const SearchBar = ({ onSearch, placeholder }: Props) => {
  const [words, setWords] = useState('')
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch(words)
      setWords('')
    }
  }
  return (
    <div className="rounded border border-gray-200 py-1 px-2 flex items-center">
      <Image src="/svg/search.svg" alt="search" width="24" height="24" />
      <input
        className="flex-1 border-0 outline-0 pl-2"
        value={words}
        onChange={(e) => setWords(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
      />
    </div>
  )
}

export default SearchBar

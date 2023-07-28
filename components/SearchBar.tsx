'use client'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import SearchManufacturer from './SearchManufacturer'

interface SearchBtnProps {
  otherClasses?: string
}
const SearchButton = ({ otherClasses }: SearchBtnProps) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses} p-1 bg-zinc-800 rounded-full border border-zinc-700 hover:scale-105 duration-300 ease-in`} aria-label='button for search'>
      <Image
        src='/magnifying-glass.svg'
        width={35}
        height={35}
        className="object-contain"
        alt='search icon'
      />
    </button>
  )
}

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const route = useRouter()

  const handleManufacturer = useCallback((manufacturer: string) => {
    setManufacturer(manufacturer)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setModel(value)
  }

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if ([model, manufacturer].includes('')) return alert('Todos los campos son obligatorios')


    return updateUrlSearch(model.toLocaleLowerCase(), manufacturer.toLocaleLowerCase())
  }

  const updateUrlSearch = (model: string, manufacturer: string) => {

    if (!model && !manufacturer) return

    const searchUrl = new URLSearchParams()

    if (model) searchUrl.append('model', model)

    if (manufacturer) searchUrl.append('manufacturer', manufacturer)

    const newPathName = `${window.location.pathname}?${searchUrl.toString()}`

    route.push(`${newPathName}`)
  }

  return (
    <form className='searchbar' onSubmit={handleSubmitSearch} id="searchbar">
      <div className='searchbar__item'>
        <SearchManufacturer manufacturer={manufacturer} handleManufacturer={handleManufacturer} />
        <SearchButton otherClasses='sm:hidden' />
      </div>

      <div className='searchbar__item'>
        <Image
          src='/model-icon.svg'
          width={25}
          height={25}
          alt='model icon'
          className='absolute ml-4 w-5 h-5'
        />
        <input
          type='text'
          name='model'
          value={model}
          onChange={handleChange}
          className='searchbar__input sm:ml-1'
          placeholder='Ford 404...'

        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />

    </form>
  )
}

export default SearchBar
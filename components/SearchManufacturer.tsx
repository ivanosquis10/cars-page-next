'use client'

import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/constants'

interface SearchManufacturerProps {
  manufacturer: string
  handleManufacturer: (manufacturer: string) => void
}

const SearchManufacturer = ({ manufacturer, handleManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('')

  const filteredManufacturers = query === ''
    ? manufacturers
    : manufacturers.filter(item => (
      item.toLocaleLowerCase()
        .replace(/\s+/g, '') //  se encarga de reemplazar todos los campos vacios
        .includes(query.toLocaleLowerCase().replace(/\s+/g, ''))
    ))

  return (
    <div className='search-manufacturer'>
      <Combobox
        value={manufacturer} onChange={handleManufacturer}
      >
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              alt='Car logo'
              className='ml-4'
            />
          </Combobox.Button>
          <Combobox.Input
            className="searchbar__input"
            placeholder='Ferrari...'
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options>

              {
                filteredManufacturers.map(item => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) => `
                        relative search-manufacturer__option
                        ${active ? 'bg-primary-blue' : 'text-white'}

                      `}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                            }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                              }`}
                          >
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))

              }
            </Combobox.Options>
          </Transition>

        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer
'use client'

import { Fragment, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import type { CustomFiltersProps, OptionsProps } from '@/types'


const CustomFilter = ({ title, options }: CustomFiltersProps) => {
  const [selected, setSelected] = useState(options[0])
  const route = useRouter()

  const handleChange = (value: OptionsProps) => {
    setSelected(value)
  }

  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={handleChange} >
        <div className='relative z-10 w-fit'>
          <Listbox.Button className='border custom-filter__btn'>
            <span className='capitalize font-medium'>{selected.title}</span>
            <Image
              src='/chevron-up-down.svg'
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='open list of options icon'
            />
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className='custom-filter__options'>

              {
                options.map((option) => (
                  <Listbox.Option
                    key={option.value}
                    value={option}
                  >
                    {option.title}
                  </Listbox.Option>
                ))
              }


            </Listbox.Options>
          </Transition>

        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
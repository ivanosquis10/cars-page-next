'use client'

import { useState } from 'react'
import Image from 'next/image'

import { CustomButton, CarDetailsModal } from './'
import { calculateCarRent, generateImageCarUrl } from '@/utils'
import { CarsDetails } from '@/types'

interface CarCardProps {
  car: CarsDetails
}
const CarCard = ({ car }: CarCardProps) => {
  const { make, model, city_mpg, year, transmission, drive } = car
  const [modalOpen, setModalOpen] = useState(false)

  const handleCloseModal = () => setModalOpen(false)

  const carRent = calculateCarRent(city_mpg, year)
  return (
    <div className='car-card group'>
      <div className="card-card__content">
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
      <p className='flex items-center text-3xl mt-6 font-extrabold'>
        <span className='self-start text-sm font-medium'>
          $
        </span>
        {carRent}
        <span className='self-end text-sm font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 object-contain my-3'>
        <Image src={generateImageCarUrl(car)} alt='image of a model car' fill priority className='object-contain' />
      </div>

      <div className='relative w-full mt-2'>
        <div className='flex w-full justify-between group-hover:invisible'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering whel icon' />
            <p className='text-sm'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>

          <div className='flex flex-col flex-1 justify-center items-center gap-2'>
            <Image src='/tire.svg' width={20} height={20} alt='tires icon' />
            <p className='text-sm'>
              {drive.toUpperCase()}
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' width={20} height={20} alt='gas icon' />
            <p className='text-sm'>
              {city_mpg} MPG
            </p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton
            title='view more'
            containerStyles='w-full bg-primary-blue rounded-md py-[16px]'
            textStyles='font-bold capitalize'
            icon='right-arrow'
            handleClick={() => setModalOpen(true)} // abrirá el modal de los detalles
          />
        </div>
      </div>

      {
        modalOpen && (
          <CarDetailsModal car={car} handleCloseModal={handleCloseModal} modalOpen={modalOpen} />
        )
      }

    </div>
  )
}

export default CarCard
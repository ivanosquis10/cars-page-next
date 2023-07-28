'use client'
import { Fragment } from 'react'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'

import type { CarDetailsProps } from '@/types'
import { generateImageCarUrl } from '@/utils'

const CarDetailsModal = ({ car, handleCloseModal, modalOpen }: CarDetailsProps) => {
  const { make, model } = car

  const valores = Object.entries(car)
  console.log(valores)
  return (
    <>
      <Transition appear show={modalOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={handleCloseModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black backdrop-blur bg-opacity-20' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-300'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-xl bg-zinc-800 text-left shadow-xl transition-all flex flex-col gap-5 p-6'>
                  <button
                    type='button'
                    onClick={handleCloseModal}
                    className='absolute top-2 right-2 z-10 w-fit bg-zinc-800 border  rounded-full p-2'
                  >
                    <Image
                      src='/close.svg'
                      width={20} height={20}
                      alt='close modal icon'
                      className='object-contain'
                    />
                  </button>

                  <div className='flex flex-1 flex-col gap-3'>
                    <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                      {/* <Image src='/hero.png' alt='image of a model car' fill priority className='object-contain' /> */}
                      <Image src={generateImageCarUrl(car)} alt='image of a model car' fill priority className='object-contain' />
                    </div>

                    <div className='flex gap-3'>
                      <div className='flex-1 h-24 w-full relative bg-primary-blue-100 rounded'>
                        {/* <Image src='/hero.png' alt='image of a model car' fill priority className='object-contain' /> */}
                        <Image src={generateImageCarUrl(car, '33')} alt='image of a model car' fill priority className='object-contain' />
                      </div>

                      <div className='flex-1 h-24 w-full relative bg-primary-blue-100'>
                        {/* <Image src='/hero.png' alt='image of a model car' fill priority className='object-contain' /> */}
                        <Image src={generateImageCarUrl(car, '13')} alt='image of a model car' fill priority className='object-contain' />
                      </div>

                      <div className='flex-1 h-24 w-full relative bg-primary-blue-100'>
                        <Image src='/hero.png' alt='image of a model car' fill priority className='object-contain' />
                      </div>

                    </div>

                  </div>

                  <div className='flex flex-col flex-1 gap-2'>
                    <h2 className="text-xl font-bold capitalize">{make} {model}</h2>

                    <div className='flex mt-3 flex-wrap gap-4'>
                      {
                        Object.entries(car).map(([key, value]) => (
                          <div key={key} className='flex justify-between gap-5 items-center w-full'>
                            <h4 className='font-medium capitalize text-slate-300'>
                              {key.replace('_', ' ')}
                            </h4>
                            <p className='font-bold capitalize'>
                              {value}
                            </p>
                          </div>
                        ))
                      }

                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>

        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetailsModal
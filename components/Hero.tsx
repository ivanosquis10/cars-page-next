'use client'

import Image from 'next/image'
import { CustomButton } from './'

const Hero = () => {
  const handleScroll = () => { }
  return (
    <div className='hero'>
      <div className='flex-1 pt-28 padding-x'>
        <h1 className='hero__title'>
          Find, Book, or rent a car - quickly and easily!
        </h1>
        <p className='hero__subtitle'>
          Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton
          title='Explore Cars'
          containerStyles='bg-primary-blue rounded-md mt-10'
          handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image
            src='/hero.png'
            alt='image of a car'
            className='object-contain object-center'
            fill
          />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero
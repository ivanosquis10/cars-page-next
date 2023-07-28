'use client'

import { useEffect, useState } from 'react'
import { getCars } from '@/services'
import { CarsDetails } from '@/types'

export const useCars = () => {
  const [allCars, setAllCars] = useState<CarsDetails>()
  const isCarsEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  useEffect(() => {
    getCars().then(data => {
      setAllCars(data)
    })
  }, []);

  return {
    allCars,
    isCarsEmpty
  }
}
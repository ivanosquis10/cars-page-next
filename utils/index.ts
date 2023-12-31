import { CarsDetails } from '@/types'

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars

  const mileageFactor = 0.1 // Additional rate per mile driven
  
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const generateImageCarUrl = (car: CarsDetails, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage")
  // const url = new URL('https://cdn.imagin.studio/car-image-api')
  const { make, model, year } = car;


  // url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('customer', '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}
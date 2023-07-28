import type { CarsDetails } from '@/types'
import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1',
  headers: {
    'X-RapidAPI-Key': 'ec497e0b93mshbea1a62f8d19f1fp1f2b91jsn232c0b3fb6d5',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
})

interface FiltersProps {
  manufacturer: string
  year: number
  fuel: string
  limit: number
  model: string
}
export const getCars = async ({ manufacturer, year, fuel, limit, model }: FiltersProps) => {
  try {
    const response = await api.get<CarsDetails>(`cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
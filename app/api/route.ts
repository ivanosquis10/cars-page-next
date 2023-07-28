import { NextResponse } from 'next/server'
import { api } from '@/services'
 
export async function GET() {
//   const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model'
//   const headers = {
// 		'X-RapidAPI-Key': 'ec497e0b93mshbea1a62f8d19f1fp1f2b91jsn232c0b3fb6d5',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// }

try {
	const response = await api.get('cars?model=corolla')
	return NextResponse.json(response.data)
} catch (error) {
	console.error(error)
}
 
  return NextResponse.json({ msg: 'hola' })
}
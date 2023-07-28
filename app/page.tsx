
import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'
import { getCars } from '@/services'

export default async function Home({ searchParams }) {
  const allCars = await getCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  })

  // validamos que haya informacion y que sea un array
  const isCarsEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className='overflow-hidden'>
      <Hero />
      <section className='mt-12 padding-y padding-x max-w-[1440px] mx-auto' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl capitalize font-extrabold'>
            car catalogue
          </h1>
          <p>
            Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
          </div>
        </div>

        {
          !isCarsEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allCars.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </div>
            </section>
          ) : (
            <div className="home__error-container">
              <h2>Oooops, no results :( </h2>
            </div>
          )
        }
      </section>
    </main>
  )
}

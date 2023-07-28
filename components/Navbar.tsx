import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full top-0 z-10 backdrop-blur sticky border-b border-zinc-700'>
      <nav className='max-w-[1440px] mx-auto flex items-center justify-between px-6 sm:px-16 py-4'>
        <Link href='/' passHref className='flex items-center justify-center'>
          <Image
            src='/logo.svg'
            width={188}
            height={20}
            alt='logo'
            className='object-contain'
          />
        </Link>

        <CustomButton
          title='Sign In'
          containerStyles='bg-zinc-700 hover:bg-zinc-600 font-bold tracking-wider rounded-md'
        />
      </nav>
    </header>
  )
}

export default Navbar
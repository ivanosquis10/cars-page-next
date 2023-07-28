import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Rentals App',
  description: 'Discover the best deals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative bg-zinc-800 text-white'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

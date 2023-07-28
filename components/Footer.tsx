import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer'>



      <div className='footer__links-container'>
        <div className='flex flex-col justify-start items-start gap-6'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={188}
            height={20}
            className='object-contain'
          />
          <p className='texy-base'>Carhub 2023 <br /> All Rights Reserved ©</p>
        </div>
        <nav>
          <ul className='footer__links'>
            {
              footerLinks.map(link => (
                <li className='footer__link' key={link.title}>
                  <h3 className='font-bold'>{link.title}</h3>
                  {
                    link.links.map(item => (
                      <Link href={item.url} key={item.title} className='text-slate-300'>
                        {item.title}
                      </Link>
                    ))
                  }
                </li>
              ))
            }
          </ul>
        </nav>
      </div>





      <div className='footer__copyrights'>
        <p className='texy-base'>
          @2023 CarHub. All rights reserved
        </p>
        <div className='footer__copyrights-link'>
          <Link href='/'>Privacy & Policy</Link>
          <Link href='/'>Terms & Condition</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
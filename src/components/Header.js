import React, { useState } from 'react';
import { BiUser, BiMenu } from 'react-icons/bi';
import { NavLink, Outlet } from 'react-router-dom';
import Hero from './Hero';
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className='bg-white h-16 lg:h-24'>
      <div className='flex justify-between items-center container mx-auto h-full'>
        <div className='w-20 lg:w-28'>
          <img src="https://www.macfit.com/assets/images/macfitlogo.svg" alt="MacFit Logo" />
        </div>
        <nav className={`lg:flex lg:items-center ${showMenu ? 'absolute top-16 z-50 h-screen bg-red-500 h-full w-full  left-0 right-0 grid place-content-center' : 'hidden'} lg:block`}>
          <ul className='lg:flex lg:gap-5 text-gray-600 text-lg font-medium'>
            <li>
              <NavLink to='kulupler' className='hover:text-red-500 text-black font-bold text-xl hover:underline'>Kulüpler</NavLink>
            </li>
            <li>
              <a href="/" className=' hover:text-red-500 text-black font-bold text-xl hover:underline'>Mac+Mobil</a>
            </li>
            <li>
              <a href="/" className='hover:text-red-500 text-black font-bold text-xl hover:underline'>Topluluk</a>
            </li>
            <li>
              <a href="/" className='hover:text-red-500 text-black font-bold text-xl hover:underline'>Grup Dersleri</a>
            </li>
            <li>
              <a href="/" className='hover:text-red-500 text-black font-bold text-xl hover:underline'>Spa</a>
            </li>
            <li>
              <a href="/" className='hover:text-red-500 hover:underline  text-black font-bold text-xl'>Blog</a>
            </li>
          </ul>
        </nav>
        <div className='flex items-center gap-5'>
          <button className='flex items-center text-gray-600 text-lg hover:text-red-500 focus:outline-none'>
            <span className='text-2xl'><BiUser/></span>
            <span className='ml-2'>Kullanıcı Girişi</span>
          </button>
          <button className='w-24 lg:w-32 h-10 lg:h-12 text-white text-sm lg:text-base font-semibold bg-red-500 rounded-full focus:outline-none'>Bize Katıl</button>
          <button onClick={toggleMenu} className='lg:hidden focus:outline-none'>
            <span className='text-2xl'><BiMenu /></span>
          </button>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

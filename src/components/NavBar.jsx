import { useState } from 'react'
import CartWidget from './CartWidget';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <div className="relative bg-neutral-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to={'/'}>
                <span className="sr-only">The Box Can</span>
                <img src={logo} className="App-logo" alt="logo" />
              </Link>
            </div>

            <nav className="hidden md:flex space-x-10">
              <ul className="flex">
                <li className="mr-8 md:border-none text-lg font-medium text-gray-500 hover:text-gray-900"><Link to='/'>Home</Link></li>
                <li className="mr-8 text-lg font-medium text-gray-500 hover:text-gray-900"><Link to='/categoria/collares'>Collares</Link></li>
                <li className="mr-8 text-lg font-medium text-gray-500 hover:text-gray-900"><Link to='/categoria/pretales'>Pretales</Link></li>
                <li className="mr-8 text-lg font-medium text-gray-500 hover:text-gray-900"><Link to='/categoria/correas'>Correas</Link></li>
              </ul>
            </nav>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <CartWidget />
            </div>

          </div>
        </div>
      </div>
    </>
    
  )
}

export default NavBar

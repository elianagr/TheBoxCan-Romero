import CartWidget from './Cart/CartWidget';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const NavBar = () => {
  return (
    <>
    <Disclosure as="nav" className="bg-gray-200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                <Link to={'/'}>
                  <span className="sr-only">The Box Can</span>
                  <img src={logo} className="block lg:hidden h-12 w-auto" alt="logo" />
                  </Link>
                  <Link to={'/'}>
                  <span className="sr-only">The Box Can</span>
                  <img src={logo} className="hidden lg:block h-14 w-auto" alt="logo" />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <ul className="flex">
                      <li className="text-black-500 hover:text-blue-600 px-3 py-5 rounded-md text-sm font-medium"><Link to='/'>Home</Link></li>
                      <li className="text-black-500 hover:text-blue-600 px-3 py-5 rounded-md text-sm font-medium"><Link to='/categoria/collares'>Collares</Link></li>
                      <li className="text-black-500 hover:text-blue-600 px-3 py-5 rounded-md text-sm font-medium"><Link to='/categoria/pretales'>Pretales</Link></li>
                      <li className="text-black-500 hover:text-blue-600 px-3 py-5 rounded-md text-sm font-medium"><Link to='/categoria/correas'>Correas</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 mt-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <CartWidget />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <ul>
                <li className="text-black-500 block px-3 py-2 rounded-md text-base font-medium"><Link to='/'>Home</Link></li>
                <li className="text-black-500 block px-3 py-2 rounded-md text-base font-medium"><Link to='/categoria/collares'>Collares</Link></li>
                <li className="text-black-500 block px-3 py-2 rounded-md text-base font-medium"><Link to='/categoria/pretales'>Pretales</Link></li>
                <li className="text-black-500 block px-3 py-2 rounded-md text-base font-medium"><Link to='/categoria/correas'>Correas</Link></li>
              </ul>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
    
  )
}

export default NavBar

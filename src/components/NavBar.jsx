import React from 'react'
import CartWidget from './CartWidget';
import logo from '../img/logo.svg';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  /*const styles = {
    border: 'solid red 1px',
    color: 'blue'
  }*/
  return (
    <div class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
        
          <a href="#">
            <span class="sr-only">The Box Can</span>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
      
        <nav class="hidden md:flex space-x-10">
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Home </a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Collares </a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Pretales </a>
          <a href="#" class="text-base font-medium text-gray-500 hover:text-gray-900"> Correas </a>
        </nav>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <CartWidget />
        </div>
      </div>
    </div>

    <div class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-12 w-auto" src={logo} alt="The Box Can Logo" />
            </div>
            <div class="-mr-2">
              <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <svg class="flex-shrink-0 h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
                  <span class="ml-3 text-base font-medium text-gray-900"> Home </span>
              </a>

              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <span class="ml-3 text-base font-medium text-gray-900"> Collares </span>
              </a>

              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <span class="ml-3 text-base font-medium text-gray-900"> Pretales </span>
              </a>

              <a href="#" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                <span class="ml-3 text-base font-medium text-gray-900"> Correas </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    </div>



  )
}

export default NavBar
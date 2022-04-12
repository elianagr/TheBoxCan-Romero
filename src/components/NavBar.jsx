import React from 'react'

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const styles = {
    border: 'solid red 1px',
    color: 'blue'
  }
  return (
    /* PROBANDO EJEMPLOS DE LA CLASE
    <div>
      <li style={styles}>Home</li>
      <li className='w-full'>Collares</li>
      <li>Pretales</li>
      <li>Correas</li>

    </div>*/
    <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 mb-3'>
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="#theboxcan">The Box Can
          </a>
          <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}
            id="example-navbar-danger">
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#collares">
                    Collares
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pretales">
                    Pretales
                  </a>
                </li>
                <li className="nav-item">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#correas">
                    Correas
                  </a>
                </li>
              </ul>

        </div>
      </div>
    </nav>
  )
}

export default NavBar
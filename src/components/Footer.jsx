import React from 'react'

const Footer = () => {
    let style = {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }
  return (
    <>
        <footer className="bg-gray-200 text-center lg:text-left">
  <div className="text-gray-700 text-center p-4" style= {style}>
    © 2022
    <a className="text-gray-800" href="https://coderhouse.com/"> Página armada con React Js por Eliana Romero.</a>
  </div>
</footer>
    </>
  )
}

export default Footer
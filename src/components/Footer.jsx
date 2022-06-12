import React from 'react'

const Footer = () => {
    let style = {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }
  return (
    <>
        <footer className="fixed bottom-0 bg-sky-400 text-center w-full">
            <div className="text-white text-center p-4" style= {style}>
              © 2022
              <a className="text-white" href="https://coderhouse.com/"> Página armada con React Js por Eliana Romero.</a>
            </div>
          </footer>
    </>
  )
}

export default Footer
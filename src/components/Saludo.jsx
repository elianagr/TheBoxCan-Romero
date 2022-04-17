/*const Saludo = (props) => {
  return (
    <div className='font-bold text-green-800'>
        Holi {props.name}.
        Edad: {props.edad}
    </div>
  )
}*/

const Saludo = ( {name, edad}) => {
    return (
      <div className='font-bold text-green-800'>
          Holi {name}.
          Edad: {edad}
      </div>
    )
  }

export default Saludo
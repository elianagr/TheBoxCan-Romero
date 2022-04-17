const Card = ({children}) => {
  return (
      <div style={{border:'solid 3px green'}}>
        <div>Empieza una card</div>
        {children}
        <div>Termina una card</div>
      </div>
  )
}

export default Card
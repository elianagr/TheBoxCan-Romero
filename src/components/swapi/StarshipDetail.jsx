import React from 'react'

const StarshipDetail = ( {starship} ) => {
  return (
    <div>
        <strong>{starship.name}</strong>
        <div>{starship.model}</div>
        <div>{starship.crew}</div>
    </div>
  )
}

export default StarshipDetail
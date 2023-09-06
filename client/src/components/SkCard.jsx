import React from 'react'

function SkCard({ sk }) {
  return (
    <div>
      <img src={sk.image} alt={`${sk.maker} ${sk.name}`}></img>
      <h2>{sk.name}</h2>
    </div>
  )
}

export default SkCard
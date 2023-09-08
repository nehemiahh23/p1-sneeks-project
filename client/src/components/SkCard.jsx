import React from 'react'

function SkCard({ sk, setSk }) {

  function handleClick() {
    setSk(sk)
  }

  return (
    <div className='sk-card' onClick={handleClick}>
      <img src={sk.image} className='sk-img' alt={`${sk.maker} ${sk.name}`}></img>
      <h2>{sk.name}</h2>
    </div>
  )
}

export default SkCard
import { useEffect, useState } from 'react'
import SkCard from './SkCard'

function SkContainer({ setSk, sks, setSks }) {

  useEffect(() => {
    fetch('http://localhost:3000/sneakers')
    .then(r => r.json())
    .then(data => setSks(data))
  }, [])

  return (
    <div id='sk-cont'>
      { sks.map(sk => <SkCard key={sk.id} sk={sk} setSk={setSk}/>)}
    </div>
  )
}

export default SkContainer
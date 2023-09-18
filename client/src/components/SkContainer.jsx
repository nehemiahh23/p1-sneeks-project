import { useEffect, useState } from 'react'
import SkCard from './SkCard'

function SkContainer({ setSk, sks, setSks }) {

  useEffect(() => {
    fetch('https://sneeks-backend.azurewebsites.net/sneakers')
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
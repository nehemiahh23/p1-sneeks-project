import { useEffect, useState } from 'react'
import SkCard from './SkCard'

function SkContainer() {

  const [sks, setSks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/sneakers')
    .then(r => r.json())
    .then(data => setSks(data))
  }, [])

  return (
    <div id='sk-cont'>
      { sks.map(sk => <SkCard key={sk.id} sk={sk}/>)}
    </div>
  )
}

export default SkContainer
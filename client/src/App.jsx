import { useState } from 'react'
import Navbar from './components/Navbar'
import SkContainer from './components/SkContainer'
import Cart from './components/Cart'
import DetailBg from './components/DetailBg'

function App() {

  const [sks, setSks] = useState([])
  const [sk, setSk] = useState(null)

  return (
    <>
      <Navbar />
      <SkContainer sks={sks} setSks={setSks} setSk={setSk}/>
      <Cart />
      { sk ? <DetailBg sk={sk} setSk={setSk}/> : null}
    </>
  )
}

export default App

// add quantity option at add to cart
// only allow review posting if item was purchased
// use routing for detail div
// create a makers table rather than having maker be an attr of each shoe
import { useState } from 'react'
import Navbar from './components/Navbar'
import SkContainer from './components/SkContainer'
import Cart from './components/Cart'
import Detail from './components/Detail'

function App() {

  const [sks, setSks] = useState([])
  const [sk, setSk] = useState(null)

  return (
    <>
      <Navbar />
      <SkContainer sks={sks} setSks={setSks} setSk={setSk}/>
      <Cart />
      { sk ? <Detail sk={sk}/> : null}
    </>
  )
}

export default App

// change size/price to a dict in db
// add quantity option at add to cart
// only allow review posting if item was purchased
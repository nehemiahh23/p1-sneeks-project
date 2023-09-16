import React from 'react'
import Navbar from './Navbar'
import SkContainer from './SkContainer'
import Cart from './Cart'
import DetailBg from './DetailBg'

function Home({ sk, setSk, sks, setSks, navigate }) {
  return (
    <>
        <Navbar />
        <SkContainer sks={sks} setSks={setSks} setSk={setSk}/>
        <Cart />
        { sk ? <DetailBg sk={sk} setSk={setSk}/> : null}
    </>
  )
}

export default Home
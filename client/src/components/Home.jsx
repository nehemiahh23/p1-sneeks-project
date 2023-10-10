import React from 'react'
import Navbar from './Navbar'
import SkContainer from './SkContainer'
import Cart from './Cart'
import DetailBg from './DetailBg'

function Home({ sk, setSk, sks, setSks, navigate, user }) {

  function handleClick() {
    fetch('http://127.0.0.1:5555/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accepts': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(r => {
      if (r.ok) {
        r.json()
        .then(data => alert(data.message))
        .then(navigate('/'))
      }
    })
  }

  return (
    <>
        {user.username ? user.username : null}
        {user.username ? <button onClick={handleClick}>Sign Out</button> : null}
        <Navbar />
        <SkContainer sks={sks} setSks={setSks} setSk={setSk}/>
        <Cart />
        { sk ? <DetailBg sk={sk} setSk={setSk}/> : null}
    </>
  )
}

export default Home
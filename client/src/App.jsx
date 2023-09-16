import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  const [sks, setSks] = useState([])
  const [sk, setSk] = useState(null)
  const navigate = useNavigate()



  return (
    <>
      <Routes>
        <Route path='/' element={<Home sk={sk} setSk={setSk} sks={sks} setSks={setSks} navigate={navigate}/>}/>
        <Route path='login' element={<Login navigate={navigate}/>}/>
        <Route path='signup' element={<Signup navigate={navigate}/>}/>
      </Routes>
    </>
  )
}

export default App

// add quantity option at add to cart
// only allow review posting if item was purchased
// use routing for detail div
// create a makers table rather than having maker be an attr of each shoe
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  const [sks, setSks] = useState([])
  const [sk, setSk] = useState(null)
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://127.0.0.1:5555/check_session')
    .then(r => {
      if (r.ok) {
        r.json()
        .then(data => setUser(data))
      }
      else {
        r.json()
        .then(data => console.log(data.message))
      }
    })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Home sk={sk} setSk={setSk} sks={sks} setSks={setSks} navigate={navigate} user={user}/>}/>
        <Route path='login' element={<Login navigate={navigate} user={user} setUser={setUser}/>}/>
        <Route path='signup' element={<Signup navigate={navigate} user={user} setUser={setUser}/>}/>
      </Routes>
    </>
  )
}

export default App

// add quantity option at add to cart
// only allow review posting if item was purchased
// use routing for detail div
// create a makers table rather than having maker be an attr of each shoe
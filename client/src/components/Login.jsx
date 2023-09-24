import { useState } from 'react'
import Signup from './Signup'

function Login({ navigate }) {

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: ""
  })

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>E-Mail:</label>
        <input name='email' id='email' type='email' value={form.email} onChange={handleChange}></input><br/>
        <label htmlFor='password'>Password:</label>
        <input name='password' id='password' type='password' value={form.password} onChange={handleChange}></input>
        <input type='submit' value={"Submit"}/>
      </form>
    </>
  )
}

export default Login
import { useState } from 'react'
import Signup from './Signup'

function Login({ navigate }) {

  // NEXT TIME: add fetches to signup and login on frontend using routes in app.py, add navigation from login to signup and vice versa, validate uniqueness of usernames + emails on frontend (using route to check db for user + email matching input?)

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  function handleSubmit(e) {
    e.preventDefault()

    fetch('http://127.0.0.1:5555/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accepts': 'application/json'
          },
          body: JSON.stringify(form)
      })
      .then(r => r.json)
      .then(navigate('/'))
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
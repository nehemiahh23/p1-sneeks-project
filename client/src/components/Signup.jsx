import { useState } from 'react'
import Login from './Login'

function Signup({ navigate, user, setUser }) {

  // add notes to page:
  // email is not required, but if you choose to use it, you will be notified of updates to the site (or have some type of opt-in)
  // passwords: explain process of encryption, encourage users to not use any of their real passwords regardless

  const [match, setMatch] = useState(false)
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    confirm: ""
  })

  function handleSubmit(e) {
    e.preventDefault()

    if (form.password !== form.confirm) {
      setMatch(true)
    }
    else {
      console.log("send confirm email")
      fetch('http://127.0.0.1:5555/create_user', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accepts': 'application/json'
          },
          body: JSON.stringify(form)
      })
      .then(r => {
        if (r.ok) {
          r.json()
          .then(data => setUser(data))
          .then(navigate('/'))
        }
        else {
          r.json()
          .then(data => alert(data.message))
        }
      })
    }

    
  }
  
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
    if (e.target.name === "password" || e.target.name === "confirm") {
      setMatch(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>E-Mail:</label>
        <input name='email' id='email' type='email' value={form.email} onChange={handleChange} required></input><br/>
        <label htmlFor='username'>Username:</label>
        <input name='username' id='username' value={form.username} onChange={handleChange} minLength={5} required></input><br/>
        <label htmlFor='password'>Password:</label>
        <input name='password' id='password' type='password' value={form.password} onChange={handleChange} pattern='^(?=.{8,})(?=.*[0-9])(?=.*[@#$%^&+=]).*$' title='Must contain at least 8 characters with 1 number and special character' required></input>
        { match ? <span> Passwords must match</span> : null}<br/>
        <label htmlFor='confirm'>Confirm Password:</label>
        <input name='confirm' id='confirm' type='password' value={form.confirm} onChange={handleChange} pattern='^(?=.{8,})(?=.*[0-9])(?=.*[@#$%^&+=]).*$' title='Must contain at least 8 characters with 1 number and special character' required></input><br/>
        <input type='submit' value={"Submit"}/>
      </form>
    </>
  )
}

export default Signup
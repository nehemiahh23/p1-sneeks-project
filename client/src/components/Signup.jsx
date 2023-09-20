import { useState } from 'react'
import Login from './Login'

function Signup({ navigate }) {

  const [match, setMatch] = useState(false)
  const [form, setForm] = useState({
    email: "",
    user: "",
    pass: "",
    confirm: ""
  })

  function handleSubmit(e) {
    e.preventDefault()

    if (form.pass !== form.confirm) {
      setMatch(true)
    }
    else {
      console.log("send confirm email")
    }

    
  }
  
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
    if (e.target.name === "pass" || e.target.name === "confirm") {
      setMatch(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>E-Mail:</label>
        <input name='email' id='email' type='email' value={form.email} onChange={handleChange} required></input><br/>
        <label htmlFor='user'>Username:</label>
        <input name='user' id='user' value={form.user} onChange={handleChange} minLength={5} required></input><br/>
        <label htmlFor='pass'>Password:</label>
        <input name='pass' id='pass' type='password' value={form.pass} onChange={handleChange} pattern='^(?=.{8,})(?=.*[0-9])(?=.*[@#$%^&+=]).*$' title='Must contain at least 8 characters with 1 number and special character' required></input>
        { match ? <span> Passwords must match</span> : null}<br/>
        <label htmlFor='confirm'>Confirm Password:</label>
        <input name='confirm' id='confirm' type='password' value={form.confirm} onChange={handleChange} pattern='^(?=.{8,})(?=.*[0-9])(?=.*[@#$%^&+=]).*$' title='Must contain at least 8 characters with 1 number and special character' required></input><br/>
        <input type='submit' value={"Submit"}/>
      </form>
    </>
  )
}

export default Signup
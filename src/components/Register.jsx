import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div>
        <h1>Register</h1>
        <p><input type="text" placeholder="Enter name"></input></p>
        <p><input type="password" placeholder='enter password'></input></p>
        <p><input type="date" placeholder='date of birth'></input></p>
        <button>Sign Up</button>
        <p>
            <Link to="../login">Go to Login Page</Link>
        </p>
        </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div>
        <h1>Login Form</h1>
        <p><input type="text" placeholder='Enter name'></input></p>
    <p><input type="password" placeholder='Enter Password'></input></p>
    <button>Login</button>
    <p>
        <Link to="../register">New User Register here....</Link>
    </p>
    </div>

  )
}

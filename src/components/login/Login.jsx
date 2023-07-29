import React from 'react'
import '../static/css/layout.css'
import axios from 'axios'

export const Login = (user) => {

    function Logeate () {
      const user = {
        name: 'Korita'
      }
    }

    function Test () {
      axios.get('http://localhost:3000/auth/microsoft/callback')
      


    }

  return (
    <div className='test'>
        <a href='http://localhost:3000/auth/microsoft'>logeate</a>
        <a href='/auth/complete'>test</a>
        <button onClick={Logeate}>Logeate</button>
    </div>
  )
}

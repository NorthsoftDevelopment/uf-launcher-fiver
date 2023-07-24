import React from 'react'
import '../static/css/layout.css'
import axios from 'axios';

export const Login = () => {

    const apiUrl = 'http://localhost:3000/test';

    const data = { "test": "test" };

    const fetchDataFromApi = async () => {

      axios.put(apiUrl, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }

  return (
    <div className='test'>
        <a href='http://localhost:3000/auth/microsoft'>logeate</a>
        <button onClick={fetchDataFromApi}>test</button>
    </div>
  )
}

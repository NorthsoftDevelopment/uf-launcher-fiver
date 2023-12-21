import React from 'react'
import './cardbig.css'
import { Link } from 'react-router-dom'

export const CardBig = ({ img, title, desc, id, buttonName, icon }) => {
  return (
    <div className='card-big'>
      <img src={img} className='card-big-background'></img>
      <div className='card-big-content'>
        <div className='card-big-text'>
          <img src={icon} className='card-big-icon'></img>
          <div>
            <h1>{title}</h1>
            <p>{desc}</p>
          </div>

        </div>
        <Link className='button-play-cards no-decoration' to={`/instance/${id}`}>
          <img src='https://cdn.discordapp.com/attachments/910002249651077150/1177882648782307409/play-icon.png?ex=65741fb3&is=6561aab3&hm=05e388c96abf803f02505db64af31d02cbb7c53a46008e633d2c0344403bc110&'></img>
          <h1>{buttonName}</h1>
        </Link>
      </div>

    </div>
  )
}

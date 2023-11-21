import React from 'react'
import './cardbig.css'

export const CardBig = ({img, title, desc}) => {
  return (
    <div className='card-big'>
        <img src={img}></img>
        <div className='card-big-text'>
        <h1>{title}</h1>
        <p>{desc}</p>
        </div>
    </div>
  )
}

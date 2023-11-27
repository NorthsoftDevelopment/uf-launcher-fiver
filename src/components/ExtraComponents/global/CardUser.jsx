import React from 'react'
import './carduser.css'

export const CardUser = ({img, name}) => {
    return (
        <div className='card-user'>
            <img src={img}></img>
            <div className='card-user-text'>
            <h1>{name}</h1>
            <p>Usuario</p>
            </div>
            
        </div>
    )
}

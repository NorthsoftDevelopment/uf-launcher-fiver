import React from 'react'
import './Card.css'

export const Card = ({title, image}) => {
    return (
        <div className='card'>
            <img className='img-card' src={image}></img>
            <p className='text-card'>{title}</p>
        </div>
    )
}

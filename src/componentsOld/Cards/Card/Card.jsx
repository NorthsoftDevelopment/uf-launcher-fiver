import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

export const Card = ({ title, image, link }) => {

    return (

        <Link to={link} className='card'>

            <img className='img-card' src={image}></img>
            <p className='text-card'>{title}</p>
        </Link>
    )
}

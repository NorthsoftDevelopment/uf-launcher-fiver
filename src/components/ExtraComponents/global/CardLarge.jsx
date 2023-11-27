import React from 'react'
import './cardbig.css'

export const CardLarge = ({ img, title, desc, autor }) => {
    return (
        <div className='card-large'>
            <img src={img}></img>
            <div className='card-large-text'>
                <h1>{title}</h1>
                <h3>{autor}</h3>
                <p>{desc}</p>
            </div>
        </div>
    )
}

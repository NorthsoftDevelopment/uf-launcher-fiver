import React from 'react'
import { Link } from 'react-router-dom'
import './Instance.css'

export const Instance = ({ title, link, version }) => {
    return (
        <div className='instance no-decoration'>
            <div className='datos-instance'>
                <h1>{title}</h1>
                <p>{version}</p>
            </div>
            <div className='final-instance'>
                <Link className='no-decoration button-instance' to={link}>Ver ahora</Link>
                <Link className='no-decoration button-instance' to={link}>Editor</Link>
            </div>
        </div>
    )
}

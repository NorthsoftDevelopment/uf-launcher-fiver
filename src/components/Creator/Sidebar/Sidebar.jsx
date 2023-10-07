import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='contents-sidebar'>
            <h3>Inicio</h3>
                <Link className='sidebar-a'>
                    <h3>Review</h3>
                </Link>
                <h3>Instancias</h3>
                <Link className='sidebar-a'>
                    <h3>Instancias</h3>
                </Link>
            </div>

            <Link className='content-final-sidebar no-decoration'>
                <h3>Salir del modo creador</h3>
            </Link>
        </div>
    )
}

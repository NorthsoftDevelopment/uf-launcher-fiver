import React from 'react'
import { Link } from 'react-router-dom'
import { Logout } from '../../hooks/Auth/Logout'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

export const Navbar = () => {
    const [user, setUser] = useState()
    useEffect(() => {
        const userJSON = Cookies.get('user')
        if (userJSON) {
            const userProfile = JSON.parse(userJSON)
            console.log('testt', userProfile)
            setUser(userProfile)
        }
    }, [])

    return (
        <div>
            <Link to='/'>Inicio</Link>
            <Link to='/instances'>Instancias</Link>
            <Link to='/settings'>Configuracion</Link>
            {user ? (
                <div>
                    <h3>{user.name}</h3>
                    <img src={`https://api.mineatar.io/face/${user.id}`}></img>
                    <button onClick={Logout}>Cerrar sesion</button>
                </div>
            ) : (
                <div>
                    <h3>Inicia Sesion</h3>
                    <img src={`https://api.mineatar.io/face/4e4f1367-fab1-4239-8665-d7f4d8aea219`}></img>
                </div>
            )
          }
        </div>
    )
}

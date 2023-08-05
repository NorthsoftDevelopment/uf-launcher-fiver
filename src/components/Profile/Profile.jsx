import React from 'react'
import './profile.css'
import background from '../../assets/backgrounds/background-home.png'
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from '../loader/Loader';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {
        isAuthenticated && (
          <div className='zone-mid'>
            <img className='background-effect' src={user.picture} />
            <div className='user-profile'>
              <img className="img-profile" src={user.picture} alt={user.name} />
              <div className='text-profile'>
                <h2>{user.nickname}</h2>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>Jugador</p>
              </div>
            </div>
          </div>
        )
      }
      <div className='user-text'>
        <div>
          <p className='title-profile'>Mis instalacion</p>
          <button className='button-general'>Crear Instalacion</button>
        </div>
        <div className='cards'>
          <a href='src/launchers/1/index.html' className='no-color'>
            <div className='card'>
              <img className='img-card' src={background}></img>
              <p className='text-card'>Minecraft Vanilla</p>
            </div>
          </a>
          <a href='src/launchers/1/index.html' className='no-color'>
            <div className='card'>
              <img className='img-card' src={background}></img>
              <p className='text-card'>Minecraft Vanilla</p>
            </div>
          </a>
          <a href='src/launchers/1/index.html' className='no-color'>
            <div className='card'>
              <img className='img-card' src={background}></img>
              <p className='text-card'>Minecraft Vanilla</p>
            </div>
          </a>
          <a href='src/launchers/1/index.html' className='no-color'>
            <div className='card'>
              <img className='img-card' src={background}></img>
              <p className='text-card'>Minecraft Vanilla</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

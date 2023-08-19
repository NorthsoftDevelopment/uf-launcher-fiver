import './profile.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from '../loader/Loader';
import { ConnectMinecraft } from '../../private/ConnectMinecraft';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [profileMC, setProfileMC] = useState([]);
  const { logout } = useAuth0();
  const ProfileMCJSON = Cookies.get('tokenMC')

  useEffect(() => {

    if (ProfileMCJSON === undefined){

    } else {

      setProfileMC(JSON.parse(ProfileMCJSON))

      console.log(profileMC)
      
  
    }

}, []);

  const changeSkin = (url) => {

    const { shell } = require('electron');

    shell.openExternal(url);
  };



  if (isLoading) {
    return <Loader />;
  }

  return (
    <ConnectMinecraft>
      <div>
        {
          isAuthenticated && (
            <div className='zone-mid'>
              <img className='background-effect' src='https://i.redd.it/tx5hl42bmc751.jpg' />
              <div className='user-profile'>
                <img className="img-profile" src={user.picture} alt={user.name} />
                <div className='text-profile'>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                  <button
                    className="button-little"
                    onClick={() =>
                      logout({ logoutParams: { returnTo: window.location.origin } })
                    }
                  >
                    Cerrar Sesion
                  </button>
                </div>
              </div>
            </div>
          )
        }
        {profileMC ? (
          <div className='user-text'>
            <div>
              <p className='title-profile'>Mi cuenta de Minecraft</p>
              <div className='flex'>
                <img src={`https://crafatar.com/renders/body/${profileMC.id}`} alt="Minecraft Avatar" />
                <div className='column-gap'>
                  <h1>Nombre visible: {profileMC.name}</h1>
                  <button className='button-general' onClick={() => changeSkin('https://www.minecraft.net/en-us/msaprofile/mygames/editskin')}>Cambiar skin</button>
                  <h5>Borra tu sesion para ver los cambios.</h5>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='user-text'>
            <p>No existe cuenta de Minecraft vinculada.</p>
          </div>
        )}
      </div>
    </ConnectMinecraft>
  )
}

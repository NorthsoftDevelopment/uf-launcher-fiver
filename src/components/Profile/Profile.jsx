import './profile.css'
import { useAuth0 } from "@auth0/auth0-react";
import { Loader } from '../loader/Loader';
import { ConnectMinecraft } from '../../private/ConnectMinecraft';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card } from '../Cards/Card/Card';

export const Profile = () => {
  //Use auth imports
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();

  //Use state to necccesary things
  const [profileMC, setProfileMC] = useState([]);
  const [instances, setInstances] = useState([]);


  //Take profil
  const ProfileMCJSON = Cookies.get('tokenMC')


  //Auth loader
  if (isLoading) {
    return <Loader />;
  }


//Renderizado de funciones
  useEffect(() => {

    //Take user mc profile
    if (ProfileMCJSON === undefined) {

    } else {
      setProfileMC(JSON.parse(ProfileMCJSON))
      console.log(profileMC)
    }

    //Take instances
    instancesGet()

  }, []);


  //Change skin function
  const changeSkin = (url) => {
    const { shell } = require('electron');
    shell.openExternal(url);
  };

  //Take instances 
  const instancesGet = async () => {

    try {


      if (isAuthenticated) {
        const email = user.email
        const api = 'https://inhonia-launcher-api.vercel.app/instance/profile'

        const data = {
          user: email
        }

        const response = await axios.post(api, data);

        const instances = response.data

        console.log(instances[0].datos[0].title)

        setInstances(instances)

      }

    } catch (error) {

    }

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
        <div className=''>
        <div className='user-text content'>

<p className='title-profile'>Mis Instancias</p>

<div className='cards'>

  {instances.map((instance, index) => (
    <div key={index}>
      <Card
        title={instance.datos[0].title}
        link={`/launch/${instance.datos[0].id}`}
        image={instance.datos[0].img}
      />
    </div>
  ))}
</div>
</div>
          {profileMC ? (
            <div className='user-text content'>
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
            <div className=''>
              <p>No existe cuenta de Minecraft vinculada.</p>
            </div>
          )}
        </div>

      </div>
    </ConnectMinecraft>
  )
}

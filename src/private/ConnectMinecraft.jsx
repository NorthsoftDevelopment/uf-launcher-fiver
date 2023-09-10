import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './Private.css';
import Swal from 'sweetalert2';
import authorizationimg from '../assets/icon/login/auhtorization-img.png'
import { useAuth0 } from '@auth0/auth0-react';

//Component to identify if the user has a good minecraft account

export const ConnectMinecraft = ({ children }) => {

  //take tokenmc from cookies and set loading screen
  const connectMinecraft = Cookies.get('tokenMC');
  const { user, isAuthenticated } = useAuth0();
  const [isLoading, setIsLoading] = useState(false);


//When button action login take login and bugs 

const saltarLogin = () => {

  const Skip = {
    data: 'null'
  }

  const SkipJSON = JSON.stringify(Skip)

  Cookies.set("tokenMC", SkipJSON, { expires: 30, sameSite: "strict" });

  window.location.href = '/'

}
  const login = async () => {
    setIsLoading(true);

    Swal.fire({
      text: 'Intentando conexion',
      showConfirmButton: false,
      allowOutsideClick: false,
      timerProgressBar: false,
      background: '#141414',
      customClass: {
        container: 'title-loader',
        popup: 'title-loader',
        header: 'title-loader',
        title: 'title-loader',
      },
      didOpen: async () => {
        Swal.showLoading();

        try {
          const { Auth, errResponse } = require("msmc");
          const authManager = new Auth("select_account");

          const xboxManager = await authManager.launch("raw");

          try {
            const token = await xboxManager.getMinecraft();

            if (token) {
              console.log('todo bien');
              setIsLoading(false);
              Swal.close();
              //window.location.href = '/'
              const mcprofile = JSON.stringify(token.profile)
      
              Cookies.set("tokenMC", mcprofile, { expires: 30, sameSite: "strict" });

            } else {
              showError('Ocurrió un error');
            }
          } catch (error) {
            showError('Error al obtener el token de Minecraft', error);
          }
        } catch (error) {
          showError('Error al iniciar la conexión', error);
        }
      }
    });
  };


//In case to errors
  const showError = (message, error) => {
    setIsLoading(false);
    Swal.fire({
      icon: 'error',
      title: 'Error al intentar conexion',
      background: '#141414',
      customClass: {
        container: 'title-loader',
        popup: 'title-loader',
        header: 'title-loader',
        title: 'title-loader',
      },
      text: message,
      footer: error ? error.toString() : '',

      didClose: () => {

        Swal.fire({
          title: 'Porfavor visita este sitio y crea un perfil de Minecraft',
          text: 'https://www.minecraft.net/en-us/msaprofile/mygames/editprofile',
          background: '#141414',
          customClass: {
            container: 'title-loader',
            popup: 'title-loader',
            header: 'title-loader',
            title: 'title-loader',
          },
        })


      }
    });
  };

  if (!connectMinecraft) {
    return (
      <div className='displayAdvertence'>
        <div className='content-advertence'>
          <div>
            <h1>Autorizar Conexion</h1>
            <img src={authorizationimg} alt='Minecraft' ></img>
          </div>
          <div>
            <h2>Hola {user.name}, necesitamos realizar una conexión hacia tu cuenta de Minecraft!</h2>
            <ul>
              <li>- No cambiaremos ninguno de los datos de tu cuenta.</li>
              <li>- Accederemos a tu id de Minecraft</li>
              <li>- Accederemos a tu perfil</li>
            </ul>
          </div>
          <button onClick={login} className='button-general'>Logeate</button>
          <button onClick={saltarLogin} className='button-general-short'>Saltar logeo</button>
        </div>
  
      </div>
    );
  } else {
    return (
      <div>
        {children}
      </div>
    );
  }
};

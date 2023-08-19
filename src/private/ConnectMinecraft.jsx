import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import './Private.css';
import Swal from 'sweetalert2';

export const ConnectMinecraft = ({ children }) => {
  const connectMinecraft = Cookies.get('tokenMC');
  const [isLoading, setIsLoading] = useState(false);

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
              const tokenLaunch = token.mclc
              console.log(tokenLaunch)
              Cookies.set("tokenMC", 'complete', { expires: 7, sameSite: "strict" });

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
    });
  };

  if (!connectMinecraft) {
    return (
      <div className='displayAdvertence'>
        <div className='content-advertence'>
          <div>
            <h1>Autorizar Conexion</h1>
            <img src='https://th.bing.com/th/id/R.bff35d66b908ef7e96ea9a1bc900cb7b?rik=0RQvvNDr71EcQw&pid=ImgRaw&r=0' alt='Minecraft'></img>
          </div>
          <div>
            <h2>Hola Usuario, necesitamos realizar una conexión hacia tu cuenta de Minecraft!</h2>
            <p>- Accederemos a tu información</p>
          </div>
        </div>
        <button onClick={login}>Logeate</button>
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

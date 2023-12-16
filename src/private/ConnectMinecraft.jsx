import React, { useState, useEffect } from 'react';
import useDownloadLauncher from '../hooks/useDownloadLauncher';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import './Private.css';
import Swal from 'sweetalert2';
import authorizationimg from '../assets/icon/login/auhtorization-img.png'
import { useAuth0 } from '@auth0/auth0-react';

//Component to identify if the user has a good minecraft account

export const ConnectMinecraft = ({ children }) => {

  //take tokenmc from cookies and set loading screen
  const connectMinecraft = Cookies.get('basicInstallationComplete');
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

  function downloadInstance() {

    const fs = require('fs');
    const path = require('path');

    const folderPath = 'C:/InhoniaLauncher/launchers';

    fs.mkdirSync(path.dirname(folderPath), { recursive: true });

    try {
        fs.mkdirSync(folderPath);
        console.log(`Carpeta creada con éxito en: ${folderPath}`);
    } catch (err) {

        if (err.code === 'EEXIST') {
            console.log(`La carpeta ya existe en: ${folderPath}`);
        } else {
            console.error('Error al crear la carpeta:', err);
        }
    }

    const Skip = {
      data: 'null'
    }
    
    const SkipJSON = JSON.stringify(Skip)

    toast.loading((t) => {
        const DEFAULT_URL = 'https://assets.inhonia.com/inhonia-launcher/launchers.zip';
        const DEFAULT_PATH = 'C:/InhoniaLauncher/launchers/launchers.zip';
        const root = 'C:/InhoniaLauncher/launchers'
        const { download, progress } = useDownloadLauncher(DEFAULT_URL, DEFAULT_PATH, root);

        useEffect(() => {
            download();
        }, []);
        useEffect(() => {
            if (progress === 100.0) {
                toast.success("Descarga finalizada!", { id: t.id });

                const settingsDefault = {
                  launcherType: 'minecraft',
                  allocatedMemory: '4'
                }

                Cookies.set('launcher_settings', JSON.stringify(settingsDefault), { expires: 365, sameSite: 'strict' });

                Cookies.set('basicInstallationComplete', true, { expires: 365, sameSite: 'strict' });

                window.location.href = '/'
            }
        }, [progress]);
        const formattedProgress = Math.floor(progress);

        return (
            <div>
                <h3 className='title-notification'>Menu de Instalaciones</h3>

                <h4>Descargando archivos necesarios</h4>
                <p>Progreso de descarga: {formattedProgress}%</p>
            </div>
        );
    });
}



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
            <h1>Instalacion Requerida</h1>
            <img src={authorizationimg} alt='Minecraft' ></img>
          </div>
          <div>
            <p>Hola {user.nickname}, necesitamos instalar algunos archivos necesarios para asegurarte una buena experiencia dentro de la aplicacion.</p>
            <ul>
              <li>+ No cambiaremos a tus archivos personales.</li>
              <li>+ Accederemos a una red de instalacion privada.</li>
              <li>+ Instalaremos archivos dentro de tu equipo.</li>
            </ul>
          </div>
          <button onClick={downloadInstance} className='button-general-install'>Instalar Archivos</button>
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

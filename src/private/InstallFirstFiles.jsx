import React, { useState, useEffect } from 'react';
import useDownloadLauncher from '../hooks/useDownloadLauncher';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import './Private.css';
import Swal from 'sweetalert2';

//Component to identify if the user has a good minecraft account

export const InstallFirstFiles = ({ children }) => {

  //take tokenmc from cookies and set loading screen
  const connectMinecraft = Cookies.get('basicInstallationComplete');
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
          toast.success("Archivos Descargados Correctamente", {
            id: t.id,
          });
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
          <h4>Instalando Contenido</h4>
          <p>Progreso: {formattedProgress}%</p>

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

  const handleButtonClick = () => {
    // Configura el contenido de la notificación

    console.log('wpw')

    const notificationContent = (
      <div>
        <h3>Instalando Contenido</h3>
        <p>Progreso: 10%</p>

      </div>
    );

    // Llama a react-hot-toast con la notificación
    toast.loading(notificationContent, {
      duration: 40000000, // Duración en milisegundos (opcional)
    });

    console.log('wpw')
  };


  if (!connectMinecraft) {
    return (
      <div className='displayAdvertence'>

        <div className='content-advertence'>

          <div className='content-advertence-text'>

            <div>
              <h1>INSTALACION DE UF LAUNCHER</h1>
            </div>
            <div>
              <p>Hola, Bienvenido a UF Launcher, el launcher oficial de UF Launcher, antes de continuar necesitamos instalar algunos archivos.</p>
              <ul>
                <li>+ La instalacion tiene un peso de 8MB.</li>
                <li>+ No cambiaremos a tus archivos personales.</li>
                <li>+ Accederemos a una red de instalacion privada.</li>
                <li>+ Instalaremos archivos dentro de tu equipo.</li>
              </ul>
            </div>
            <p>Ruta de instalacion: C:/UFLauncher/data</p>
            <button onClick={downloadInstance} className='button-general-install'>Iniciar Instalacion</button>
          </div>
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

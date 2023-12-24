import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'
import toast from "react-hot-toast";
import axios from "axios";
import { Loader } from "../global/Loader";
import useDownloadLauncher from "../../hooks/useDownloadLauncher";

export const Home = () => {

  const [running, setRunning] = useState(false)
  const [installing, setInstalling] = useState(false);
  const [update, setUpdate] = useState(false);
  const [InfoInstance, setInfoInstance] = useState({})
  const [loading, setLoading] = useState(true);
  const instance = Cookies.get('instance')
  const route = Cookies.get('root')

  useEffect(() => {
    takeInfo()
  }, [])

  useEffect(() => {
    if (InfoInstance.title) {
      checkInstallation();
      setLoading(false);
    }
  }, [InfoInstance.title]);

  function checkInstallation() {
    const fs = require('fs');
    const path = require('path');

    if (InfoInstance && route && InfoInstance.versionInstance) {

      const filePath = path.join(route, InfoInstance.title, `${InfoInstance.versionInstance}.txt`);

      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          console.error(`El archivo ${filePath} no existe.`);
          setUpdate(true)
        } else {
          console.log(`El archivo ${filePath} existe.`);
        }
      });
    } else {
      console.log('no date yet')
    }
  }

  const takeInfo = async () => {
    try {
      const api = 'https://uf-launcher-api-fiver.vercel.app/instance/data';

      const data = {
        location: instance
      };

      const response = await axios.post(api, data);
      const instances = response.data;

      setInfoInstance(instances);
      setLoading(false)

    } catch (error) {

      console.log('error', error);

    }

  };

  function test() {
    const { ipcRenderer } = require('electron')

    ipcRenderer.send("window_select_folder");

    ipcRenderer.on("selected_folder", (event, folderPath) => {

      console.log("Ruta de la carpeta seleccionada:", folderPath);

    });
  }


  function launch() {

    const { ipcRenderer } = require('electron');
    const { app } = require('electron');
    const fs = require('fs');
    const path = require('path');

    setRunning(true)

    ipcRenderer.on('getAppDataResult', (event, result) => {
      if (result.success) {

        const { execFile } = require('node:child_process');

        const settingJSON = Cookies.get('launcher_settings')

        const setting = JSON.parse(settingJSON)

        console.log('test')

        console.log(setting)

        if (setting.launcherType === 'sk') {

          const child = execFile(result.folderPath + '\\sk.exe', ['--workDir', route + '/' + InfoInstance.title], (error, stdout, stderr) => {
            const notificationContent = (
              <div>
                <h4>Juego lanzado correctamente</h4>
              </div>
            );
            toast.success(notificationContent, {
              duration: 5000,
            });
            setRunning(false)
            if (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error al intentar lanzar',
                background: '#141414',
                customClass: {
                  container: 'title-loader',
                  popup: 'title-loader',
                  header: 'title-loader',
                  title: 'title-loader',
                },
                text: 'Tienes un error con la instalacion, porfavor reinstala',
                footer: error ? error.toString() : '',

                didClose: () => {

                  setRunning(false)

                }
              });
            } else {
              //Cookies.set('recentPlayedID', InfoInstance.id, { expires: 365, sameSite: 'strict' });

            }
            console.log(stdout);
          });
        } else {

          const child = execFile(result.folderPath + '\\mc.exe', ['--workDir', route + '/' + InfoInstance.title], (error, stdout, stderr) => {
            setRunning(false)
            const notificationContent = (
              <div>
                <h4>Juego lanzado correctamente</h4>
              </div>
            );
            toast.success(notificationContent, {
              duration: 5000,
            });

            if (error) {
              Swal.fire({
                icon: 'error',
                title: 'Error al intentar lanzar',
                background: '#141414',
                customClass: {
                  container: 'title-loader',
                  popup: 'title-loader',
                  header: 'title-loader',
                  title: 'title-loader',
                },
                text: 'Hubo un error. Intenta nuevamente.',
                footer: error ? error.toString() : '',

                didClose: () => {

                  setRunning(false)

                }
              });
            } else {
              //Cookies.set('recentPlayedID', InfoInstance.id, { expires: 365, sameSite: 'strict' });

            }
            console.log(stdout);
          });

        }

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al intentar lanzar',
          background: '#141414',
          customClass: {
            container: 'title-loader',
            popup: 'title-loader',
            header: 'title-loader',
            title: 'title-loader',
          },
          text: 'Tienes un error con la instalacion, porfavor realiza una reinstalacion.',
          didClose: () => {

            setRunning(false)
          }
        });

      }
    })

    ipcRenderer.send('getAppData');

  }

  function downloadInstance() {

    setInstalling(true)

    const fs = require('fs');
    const path = require('path');

    const folderPath = route;

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

    toast.loading((t) => {
      const DEFAULT_URL = InfoInstance.modpack;
      const DEFAULT_PATH = route + '/' + InfoInstance.zipName;
      const root = route + '/' + InfoInstance.title
      const { download, progress, complete, errorZip } = useDownloadLauncher(DEFAULT_URL, DEFAULT_PATH, root);

      useEffect(() => {
        download();
      }, []);
      useEffect(() => {
        if (progress === 100.0) {

          if (complete) {

            if (errorZip) {


            } else {

              toast.success("Descarga finalizada!", { id: t.id });

              const fs = require('fs');
              const path = require('path');
              const filePath = path.join(route, InfoInstance.title,`${InfoInstance.versionInstance}.txt`);

              const fileContent = '¡Descarga finalizada!';

              fs.writeFileSync(filePath, fileContent);

              console.log('Archivo creado en:', filePath);

              setInstalling(false)

              window.location.reload()
            }


          }

        }
      }, [progress]);
      const formattedProgress = Math.floor(progress);

      return (
        <div>
          <h4>Descargando {InfoInstance.title}</h4>
          <p>Progreso de descarga: {formattedProgress}%</p>
        </div>
      );
    });
  }



  return (
    <div className="welcome">
      {!loading ? (

        <div>
          <div className="bg-img">
            <img src="https://cdn.discordapp.com/attachments/1187901689412472882/1187901787546587236/Background_1920x1080.png?ex=659892c0&is=65861dc0&hm=f21e3c924fdfc1ff482517a1e874f547cae44f166f346f051630c44aecb5d7b4&" alt="" />
          </div>


          <div className="launch-div">

            <div className="launch-content">

              <div className="launcher-div ">
                <img src={InfoInstance.img}></img>
                <Tooltip id="my-tooltip" />
                <div className="launcher-buttons">
                  {running ? (

                    <button className="button-launch" >
                      <h3>Lanzando...</h3>
                      <p>{InfoInstance.title}</p>
                    </button>
                  ) : (

                    installing ? (

                      <button className="button-launch" data-tooltip-id="my-tooltip" data-tooltip-content="Ejecuta la funcion de lanzado para la instancia" >
                        <h3>Instalando...</h3>
                        <p>{InfoInstance.title}</p>
                      </button>


                    ) : (

                      update ? (

                        <button className="button-launch" data-tooltip-id="my-tooltip" data-tooltip-content="Ejecuta la funcion de lanzado para la instancia" onClick={downloadInstance}>
                          <h3>Instalar</h3>
                          <p>{InfoInstance.title}</p>
                        </button>
                      ) : (

                        <button className="button-launch" data-tooltip-id="my-tooltip" data-tooltip-content="Ejecuta la funcion de lanzado para la instancia" onClick={launch}>
                          <h3>Jugar</h3>
                          <p>{InfoInstance.title}</p>
                        </button>
                      )


                    )

                  )
                  }

                  <button className="button-remove" data-tooltip-id="my-tooltip" data-tooltip-content="Elimina los archivos de la instancia selecciona. Esta opcion es irreversible.">X</button>
                </div>
              </div>

              <h3>Ultimas Actualizaciones</h3>
            </div>
          </div>
        </div>


      ) : (

        <Loader />


      )}

    </div>
  );
};

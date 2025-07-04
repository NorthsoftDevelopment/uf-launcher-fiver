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
  const [news, setNews] = useState([])
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

  const removeInstance = () => {

    console.log('Preparing to delete:', route + '/' + InfoInstance.title);


    Swal.fire({
      text: "Esta accion es permanente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',

    }).then((result) => {
      if (result.isConfirmed) {

        const folderPath = route + '/' + InfoInstance.title;

        const fs = require('fs');
        const path = require('path');

        fs.rmdir(folderPath, { recursive: true }, (err) => {
          if (err) {
            console.error('Error al eliminar la carpeta:', err);
            Swal.fire(
              'Error',
              'Hubo un error al eliminar la carpeta.',
              'error'
            );
          } else {
            console.log('Carpeta eliminada correctamente.');
            Swal.fire(
              'Eliminado!',
              'La instanncia ha sido eliminada correctamente.',
              'success'
            );
          }
        });
      }
    });
  };

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

      takeNews()

    } catch (error) {

      console.log('error', error);

    }

  };

  const takeNews = async () => {
    try {
      const api = 'https://uf-launcher-api-fiver.vercel.app/instance/data';

      const data = {
        location: 'news'
      };

      const response = await axios.post(api, data);
      const instances = response.data;

      setNews(instances.noticias)

      const background = instances.fondoPrincipal
      Cookies.set('background', background, { expires: 365, sameSite: 'strict' });

      console.log(instances.noticias)
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

          const javaPath = 'C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.7.6-hotspot\\bin\\javaw.exe';

          const jarPath = result.folderPath + "\\launchers\\sk.jar";
          const workDirArg = '--workDir=' + route + '/' + InfoInstance.title;

          const child = execFile(javaPath, ['-jar', jarPath, workDirArg], (error, stdout, stderr) => {
            const notificationContent = (
              <div>
                <h4>Juego lanzado correctamente</h4>
              </div>
            );
            toast.success(notificationContent, { duration: 5000 });
            setRunning(false);

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
                text: 'Tienes un error con la instalación, por favor reinstala',
                footer: error.toString(),
                didClose: () => setRunning(false)
              });
            }

            console.log(stdout);
          });
        } else {

          const child = execFile(result.folderPath + "\\launchers" + '\\mc.exe', ['--workDir', route + '/' + InfoInstance.title], (error, stdout, stderr) => {
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
      const { download,
        progress,
        complete,
        errorZip,
        extract,
        extractcomplete } = useDownloadLauncher(DEFAULT_URL, DEFAULT_PATH, root);

      useEffect(() => {
        if (!extractcomplete) {
          download();
        }
      }, [extractcomplete])

      useEffect(() => {
        if (progress === 100 && complete && extractcomplete) {

          if (errorZip) {

            toast.error("Descarga con errores", { id: t.id });

            const fs = require('fs');
            const path = require('path');
            const filePath = path.join(route, InfoInstance.title, `${InfoInstance.versionInstance}.txt`);

            const fileContent = '¡Descarga finalizada!';

            fs.writeFileSync(filePath, fileContent);

            console.log('Archivo creado en:', filePath);

            setInstalling(false)

            window.location.reload()

          } else {

            toast.success("Descarga finalizada!", { id: t.id });

            const fs = require('fs');
            const path = require('path');
            const filePath = path.join(route, InfoInstance.title, `${InfoInstance.versionInstance}.txt`);

            const fileContent = '¡Descarga finalizada!';

            fs.writeFileSync(filePath, fileContent);

            console.log('Archivo creado en:', filePath);

            setInstalling(false)

            window.location.reload()
          }


        }


      }, [extractcomplete]);
      const formattedProgress = progress;

      return (
        <div>
          <h4>Descargando {InfoInstance.title}</h4>
          <p>Progreso de descarga: {formattedProgress}%</p>
        </div>
      );
    });
  }


  const background = Cookies.get('background')



  return (
    <div className="welcome_home">
      {!loading ? (

        <div>
      


          <div className="launch-div">

            <div className="launch-content">

              <div className="launcher-div ">
                <img className='launch-div-img' src={InfoInstance.img}></img>
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

                  <button className="button-remove" data-tooltip-id="my-tooltip" data-tooltip-content="Elimina los archivos de la instancia selecciona. Esta opcion es irreversible." onClick={removeInstance}>X</button>
                </div>
              </div>
            </div>
            <div className="version-notes-section">
              <div className="version-title">
                <h4>Notas de versión</h4>
                <p>{InfoInstance.notes}</p>
              </div>
              <div className="version-images">
                {InfoInstance.images && InfoInstance.images.length > 0 ? (
                  <div
                    className={`images-grid columns-${InfoInstance.images.length}`}
                  >
                    {InfoInstance.images.map((imgUrl, index) => (
                      <img key={index} src={imgUrl} alt={`Versión ${index}`} />
                    ))}
                  </div>
                ) : (
                  <p>No hay imágenes disponibles.</p>
                )}
              </div>
            </div>

            <div className="news-div">
              <h3 className="title">Ultimas Actualizaciones</h3>
              <div className="news-container">

                <swiper-container
                  enteredSlides="true"
                  speed="500"
                  loop="true"
                  autoplay="true"
                  slides-per-view="2"
                  space-between="10"
                  autoplay-delay="5000"
                >
                  {news.map((news, index) => (
                    <swiper-slide key={index}>
                      <div className="news-item" >
                        <h3>{news.title}</h3>
                        <p>{news.desc}</p>
                        <img src={news.img}></img>
                      </div>
                    </swiper-slide>
                  ))}
                </swiper-container>
              </div>
            </div>
          </div>
        </div>


      ) : (

        <Loader />


      )}

    </div>
  );
};

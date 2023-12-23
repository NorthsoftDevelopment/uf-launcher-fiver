import Cookies from "js-cookie";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Tooltip as ReactTooltip, Tooltip } from 'react-tooltip'
import toast from "react-hot-toast";

export const Home = () => {

  const [running, setRunning] = useState(false)

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

          const child = execFile(result.folderPath + '\\sk.exe', ['--workDir', 'C:/UFLauncher/instance/test'], (error, stdout, stderr) => {
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

          const child = execFile(result.folderPath + '\\mc.exe', ['--workDir', 'C:/UFLauncher/instance/test'], (error, stdout, stderr) => {
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



  return (
    <div className="welcome">
      <div className="bg-img">
        <img src="https://cdn.discordapp.com/attachments/1187901689412472882/1187901787546587236/Background_1920x1080.png?ex=659892c0&is=65861dc0&hm=f21e3c924fdfc1ff482517a1e874f547cae44f166f346f051630c44aecb5d7b4&" alt="" />
      </div>


      <div className="launch-div">

        <div className="launch-content">

          <div className="launcher-div ">
            <img src='https://cdn.wallpapersafari.com/71/32/HODYIx.jpg'></img>
            <Tooltip id="my-tooltip" />
            <div className="launcher-buttons">
              {running ? (

                <button className="button-launch" >
                  <h3>Lanzando...</h3>
                </button>
              ) : (
                <button className="button-launch" data-tooltip-id="my-tooltip" data-tooltip-content="Ejecuta la funcion de lanzado para la instancia" onClick={launch}>
                  <h3>Vaniilla 1.20.4</h3>
                </button>
              )
              }

              <button className="button-remove" data-tooltip-id="my-tooltip" data-tooltip-content="Elimina los archivos de la instancia selecciona. Esta opcion es irreversible.">X</button>
            </div>
          </div>

          <h3>Ultimas Actualizaciones</h3>
        </div>
      </div>
    </div>
  );
};

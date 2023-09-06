import { Tooltip } from "../../ExtraComponents/Tooltips/Tooltip";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { reloadScreen } from "../../ExtraComponents/ReloadScreen";
import "./options.css";
import "../../Launcher/Designed/config.css";
import axios from "axios";
import Swal from "sweetalert2";


export const OptionsLaunchPrivate = ({ whitelist, id }) => {

  const email = Cookies.get("email");

  useEffect(() => {



    document.body.classList.add('no-scroll');

  }, []);


  const handleUserAdd = async () => {
    const usermail = document.getElementById("adduser").value;
    const email = [usermail];

    const data = {
      email: email,
      ubicacion: id,
    };

    Swal.fire({
      title: '',
      html: 'Espere un momento...',
      allowOutsideClick: false,
      timer: 3000,
      timerProgressBar: false,
      background: 'transparent',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonColor: "rgb(0, 55, 255)",
      cancelButtonText: 'Cancelar',
      customClass: {
        container: 'title-loader',
        popup: 'title-loader',
        header: 'title-loader',
        title: 'title-loader',
      },


      willOpen: async () => {
        Swal.showLoading();
        try {
          const api = "https://inhonia-launcher-api.vercel.app/instance/adduser";
          const response = await axios.post(api, data);


          console.log(response)

          console.log("Successfully Get");
        } catch (error) {

          console.error(error);

          Swal.fire({
            icon: 'error',
            title: 'Error al intentar agregar usuario',
            background: '#1A1B1E',
            customClass: {
              container: 'title-loader',
              popup: 'title-loader',
              header: 'title-loader',
              title: 'title-loader',
            },
            footer: error.response.data.error

          })

        }

      },
      willClose: () => {

        console.log('Guardado completado');
        window.location.reload();

      }
    });


  };



  const changesLaunch = async () => {

    const data = {

      minecraftVer: document.getElementById('minecraftVer').value,
      maxRam: document.getElementById('maxRam').value,
      minRam: document.getElementById('minRam').value,
      modsLink: document.getElementById('modsLink').value,
      id: id

    }

    try {
      const api = "https://inhonia-launcher-api.vercel.app/instance/options/add";
      const response = await axios.post(api, data);


      console.log(response)

      console.log("Successfully Get");
    } catch (error) {

      console.error(error);

    }

  }



  return (
    <div className="private-launch" id="admin">
      <div className="content-private-config">
        <div>
          <div className="text-private-launch">
            <div>
              <h2 className="">Opciones de lanzamiento</h2>
            </div>
            <div>
              <button onClick={reloadScreen} className="transparent"><h2>X</h2></button>
            </div>
            

          </div>

          <div className="">
            <h3 className="title-config">Configuracion de lanzamiento</h3>
            <div className="configs">

              <div className="config">
                <Tooltip
                  title='Version de Minecraft'
                  tooltip='Test' />

                <input className="input-general-short" id="minecraftVer"></input>
              </div>

              <div className="config">
                <Tooltip
                  title='Maxima Ram'
                  tooltip='Test' />
                <input className="input-general-short" id='maxRam' ></input>
              </div>

              <div className="config">
                <Tooltip
                  title='Minima Ram'
                  tooltip='Test' />
                <input className="input-general-short" id='minRam' ></input>
              </div>

              <div className="config">
                <Tooltip
                  title='Link de descarga de Archivos'
                  tooltip='Test' />
                <input className="input-general-short" id='modsLink'></input>
              </div>
            </div>

            <h3 className="title-config">Usuarios permitidos</h3>
            <div className="configs">

              <div className="config">
                <p
                  className="tooltipped config-text"
                >
                  Agregar usaurio
                </p>
                <input type="text" placeholder="Email" id="adduser" className="input-general-config"></input>

                <div>
                  {whitelist.includes(email) ? (
                    <div className="no-list">
                      {whitelist.map((item, index) => (
                        <ul className="lista" key={index + 1}>
                          <li className="lista-item">{item}</li>
                        </ul>
                      ))}
                    </div>
                  ) : (
                    <p>Error al obtener la informacion</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-private-launch">

        <button onClick={handleUserAdd} className="button-general">Guardar cambios</button>


        </div>

      </div>
    </div>
  );
};
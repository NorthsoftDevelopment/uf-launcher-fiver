import { Tooltip } from "../../ExtraComponents/Tooltips/Tooltip";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import "./options.css";
import "../../Launcher/Designed/config.css";
import axios from "axios";


export const OptionsLaunchPrivate = ({ whitelist, id }) => {

  const email = Cookies.get("email");
  useEffect(() => {

  }, []);



  const handleUserAdd = () => {
    const usermail = document.getElementById("adduser").value;
    const email = [usermail];

    console.log('send something')


    const datasend = {
      email: email,
      ubicacion: 'oEFiPXiavEfQlfHQ0mgC',
    };

    const api = "https://inhonia-launcher-api.vercel.app/instance/adduser";

    axios
      .post(api, datasend)
      .then((response) => {
        console.log(response.data);
        console.log("Send Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };



  const changesLaunch = async() => {

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
      <div className="zone2">
        <div className="text-config">
          <h3 className="titulo-config">Configuracion de lanzamiento</h3>
          <div className="configs">

            <div className="config">
              <Tooltip
                title='Version de Minecraft'
                tooltip='Test' />

              <input className="input-general-short" id="minecraftVer" value='1.18.2'></input>
            </div>

            <div className="config">
              <Tooltip
                title='Maxima Ram'
                tooltip='Test' />
                <input className="input-general-short" id='maxRam' value='{dataLaunch.maxRam}'></input>
            </div>

            <div className="config">
              <Tooltip
                title='Minima Ram'
                tooltip='Test' />
                <input className="input-general-short" id='minRam' value='{dataLaunch.minRam}'></input>
            </div>

            <div className="config">
              <Tooltip
                title='Link de descarga de Archivos'
                tooltip='Test' />
                <input className="input-general" id='modsLink' value='{dataLaunch.modsLink}'></input>
            </div>
          </div>

          <button className="button-general" onClick={changesLaunch}>Subir cambios</button>



        </div>
      </div>

      <div className="tabla">
        <h2 className="titulo-config">Administrador</h2>
        <div className="configs">
          <div className="config">
            <p
              className="tooltipped config-text"
            >
              Agregar usaurio
            </p>
            <input type="text" placeholder="Email" id="adduser"></input>
            <button onClick={handleUserAdd}>Agregar Usuario</button>

            <div>
              <h3>Usuarios Agregados</h3>
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
  );
};
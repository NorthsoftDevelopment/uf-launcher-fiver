/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import "./options.css";
import "../../Launcher/Designed/config.css";
import axios from "axios";
import toast from "react-hot-toast";


export const OptionsLaunchPrivate = ({ extraFunctions, admin }) => {

  const [version, setVersion] = useState("");
  const [ram, setRam] = useState("");
  const [route, setRoute] = useState("");
  const [username, setUsername] = useState("");
  const [whitelist, setWhitelist] = useState([]);
  const email = Cookies.get("email");

  useEffect(() => {
    const versionGuardada = Cookies.get("versionSeleccionada");
    const ramGuardada = Cookies.get("memoriaRam");
    const rutaGuardada = Cookies.get("rutaPersonalizada");
    const usernameGuardada = Cookies.get("username");

    if (versionGuardada) {
      setVersion(versionGuardada);
    }

    if (ramGuardada) {
      setRam(ramGuardada);
    }

    if (rutaGuardada) {
      setRoute(rutaGuardada);
    }

    if (usernameGuardada) {
      setUsername(usernameGuardada);
    }


  }, []);

  const handleSaveConfig = () => {
    Cookies.set("versionSeleccionada", version, {
      expires: 7,
      sameSite: "strict",
    });
    Cookies.set("memoriaRam", ram, { expires: 7, sameSite: "strict" });
    Cookies.set("rutaPersonalizada", route, { expires: 7, sameSite: "strict" });
    Cookies.set("username", username, { expires: 7, sameSite: "strict" });
    toast.success("instacia guradada con exito");
    console.log("Save New Setting.... Complete");
  };

  const removeInstance = () => {
    toast.success("Instacia Borrada con Exito");
    var valorRoot = Cookies.get("rutaPersonalizada");

    const folderPath = valorRoot;

    const fs = require("fs");
    // eslint-disable-next-line no-unused-vars
    const path = require("path");

    fs.rmdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        console.error("Error al eliminar la carpeta:", err);
      } else {
        console.log("Carpeta eliminada correctamente.");
      }
    });
  };

  const handleUserAdd = () => {
    const usermail = document.getElementById("adduser").value;
    const email = [usermail];

    setWhitelist((prevWhitelist) => [...prevWhitelist, usermail]);
    const datasend = {
      email: email,
      ubicacion: { documento },
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

  

  return (
    <div className="private-launch" id="admin">
      <div className="zone2">
        <div className="text-config">
          <h3 className="titulo-config">Configuracion de lanzamiento</h3>
          <div className="configs">
            <div className="config">
              <p
                className="tooltipped config-text"
              >
                Version de Minecraft
              </p>
              <select
                id="seleccionVersion"
                className="select-general"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
              >
                <option value="1.20">1.20</option>
                <option value="1.19.4">1.19.4</option>
                <option value="1.19.2">1.19.2</option>
                <option value="1.19">1.19</option>
                <option value="1.18.2">1.18.2</option>
                <option value="1.18">1.18</option>
                <option value="1.16.5">1.16.5</option>
                <option value="1.16">1.16</option>
                <option value="1.15">1.15</option>
                <option value="1.12.2">1.12.2</option>
                <option value="1.12">1.12</option>
                <option value="1.8">1.8</option>
              </select>
            </div>

            <div>{extraFunctions}</div>

            <div className="config">
              <p
                className="tooltipped config-text"
              >
                Memoria Ram
              </p>
              <select
                id="seleccionRam"
                className="select-general"
                value={ram}
                onChange={(e) => setRam(e.target.value)}
              >
                <option value="8G">8GB</option>
                <option value="6G">6GB</option>
                <option value="4G">4GB</option>
                <option value="2G">2GB</option>
              </select>
            </div>

            <div className="config">
              <p
                className="tooltipped config-text"
              >
                Ruta de lanzamiento
              </p>
              <input
                className="input-general"
                type="text"
                id="seleccionRoute"
                value={route}
                onChange={(e) => setRoute(e.target.value)}
              />
            </div>

            <div className="config">
              <p
                className="tooltipped config-text"
              >
                Usuario (Solo modo de terceros)
              </p>
              <input
                type="text"
                id="user"
                className="input-general"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <button className="savebutton" onClick={handleSaveConfig}>
            Guardar configuraciones
          </button>
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
            <button onClick={null}>Agregar Usuario</button>

            <div>
              <h3>Usuarios Agregados</h3>
              {whitelist.includes(email) ? (
                <div>
                  {whitelist.map((item, index) => (
                    <ul className="lista" key={index + 1}>
                      <li className="lista-item">{item}</li>
                    </ul>
                  ))}
                </div>
              ) : (
                <p>lpm</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="status-content" id="status-content">
        <h3 className="titulo-config">Consola de Debug</h3>
        <label id="status"></label>
      </div>

      <div className="zone-dangerous">
        <h3 className="titulo-config">Zona roja</h3>
        <p className="p-general">
          En caso de errores al momento de realizar tu lanzamiento con la
          instancia, puedes probar reiniciar la carpeta de tu Minecraft.
        </p>
        <ul>
          <li
            className="tooltipped"

            data-tooltip="El ejecutar esta funcion eliminara todos los archivos presentes en la carpeta de esta instalacion, la cual se encuentra en la ruta que seleccionaste o por defecto."
          >
            Perderas los archivos dentro de la instalacion
          </li>
        </ul>
        <button className="cancelbutton" onClick={removeInstance}>
          Borrar Instancia
        </button>
      </div>
    </div>
  );
};
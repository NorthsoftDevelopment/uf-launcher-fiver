import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';

export const OptionsLaunch = () => {
    const [version, setVersion] = useState('');
    const [ram, setRam] = useState('');
    const [route, setRoute] = useState('');
    const [username, setUsername] = useState('');

    useEffect(() => {
        const versionGuardada = Cookies.get('versionSeleccionada');
        const ramGuardada = Cookies.get('memoriaRam');
        const rutaGuardada = Cookies.get('rutaPersonalizada');
        const usernameGuardada = Cookies.get('username');

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
        Cookies.set('versionSeleccionada', version);
        Cookies.set('memoriaRam', ram);
        Cookies.set('rutaPersonalizada', route);
        Cookies.set('username', username);

        console.log('Save New Setting.... Complete')
    };

    const removeInstance = () => {

        var valorRoot = Cookies.get('rutaPersonalizada');

        const folderPath = valorRoot;
  
        const fs = require('fs');
        const path = require('path');
  
        fs.rmdir(folderPath, { recursive: true }, (err) => {
          if (err) {

            console.error('Error al eliminar la carpeta:', err);
          } else {
            
            console.log('Carpeta eliminada correctamente.');

            }})
    }

    return (
        <div>
            <div className="zone2">
                <div className="text-config">
                    <h3 className="titulo-config">Configuracion de lanzamiento</h3>
                    <div className="configs">
                        <div className="config">
                            <p className="tooltipped config-text" data-position="top" data-tooltip="Esto modifica la version de Minecraft Vanilla que vas a lanzar">
                                Version de Minecraft
                            </p>
                            <select id="seleccionVersion" className="select-general" value={version} onChange={(e) => setVersion(e.target.value)}>
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

                        <div className="config">
                            <p className="tooltipped config-text" data-position="top" data-tooltip="Esto modifica la RAM maxima de tu PC que se usara para lanzar. Recomendamos que uses no mas de 4GB para la versiones inferiores a la 1.18.2">
                                Memoria Ram
                            </p>
                            <select id="seleccionRam" className="select-general" value={ram} onChange={(e) => setRam(e.target.value)}>
                                <option value="8G">8GB</option>
                                <option value="6G">6GB</option>
                                <option value="4G">4GB</option>
                                <option value="2G">2GB</option>
                            </select>
                        </div>

                        <div className="config">
                            <p className="tooltipped config-text" data-position="top" data-tooltip="Esto modifica la ruta de lanzamiento/instalacion que usara el launcher. La ruta de lanzamiento es el lugar de almacenamiento de archivos necesarios de Minecraft. Recomendamos dejarla por defecto">
                                Ruta de lanzamiento
                            </p>
                            <input className="input-general" type="text" id="seleccionRoute" value={route} onChange={(e) => setRoute(e.target.value)} />
                        </div>

                        <div className="config">
                            <p className="tooltipped config-text" data-position="top" data-tooltip="Este es el usuario que aparecera en tu perfil de Minecraft, cuando uses solo el lanzador de terceros. Este no tiene efecto cuando lo lanzas con tu cuenta de Microsoft">
                                Usuario (Solo modo de terceros)
                            </p>
                            <input type="text" id="user" className="input-general" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                    </div>
                    <button className="savebutton" onClick={handleSaveConfig}>
                        Guardar configuraciones
                    </button>
                </div>
            </div>

            <div id="tabla" className="tabla">
                <h2 className="titulo-config">Administrador</h2>
                <div className="configs">
                    <div className="config">
                        <p className="tooltipped config-text" data-position="top"
                            data-tooltip="Esto modifica la RAM maxima de tu PC que se usara para lanzar. Recomendamos que uses no mas de 4GB para la versiones inferiores a la 1.18.2">
                            Agregar usaurio</p>
                        <input type="text" placeholder="Email" id="adduser"></input>
                        <button onClick={null}>Agregar Usuario</button>
                    </div>
                </div>
            </div>

            <div className="status-content" id="status-content">
                <h3 className="titulo-config">Consola de Debug</h3>
                <label id="status"></label>
            </div>

            <div className="zone-dangerous">
                <h3 className="titulo-config">Zona roja</h3>
                <p className="p-general">En caso de errores al momento de realizar tu lanzamiento con la instancia, puedes
                    probar reiniciar la carpeta de tu Minecraft.</p>
                <ul>
                    <li className="tooltipped" data-position="top"
                        data-tooltip="El ejecutar esta funcion eliminara todos los archivos presentes en la carpeta de esta instalacion, la cual se encuentra en la ruta que seleccionaste o por defecto.">
                        Perderas los archivos dentro de la instalacion</li>
                </ul>
                <button className="cancelbutton" onClick={removeInstance}>Borrar Instancia</button>
            </div></div>
    )
}

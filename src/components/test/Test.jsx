import React from 'react'

export const LauncherDesigned = () => {

    function test() {

        const { Client, Authenticator } = require('minecraft-launcher-core');
        const launcher = new Client();

        const { Auth } = require("msmc");

        const authManager = new Auth("select_account");

        authManager.launch("raw").then(async xboxManager => {

            const token = await xboxManager.getMinecraft();

            let opts = {

                authorization: token.mclc(),
                overrides: {
                    detached: false,
                },
                root: 'C:/InhoniaLauncher/Instance/MinecraftVanilla',
                version: {
                    number: '1.8',
                    type: "release"
                },
                memory: {
                    max: "3G",
                    min: "2G"
                },

            }

            launcher.launch(opts);

            launcher.on('debug', (e) => console.log(e));
            launcher.on('data', (e) => console.log(e));

        })

    }


    return (
        <div><div>
            <div className="zona1_forge">
                <div className="texto">
                    <h3 className="titulo">Fakeland</h3>
                    <h6 className="autor">Korita • Comunidad • Mods</h6>
                    <h4 className="instrucciones">Juega con Xbox Game Pass</h4>
                    <h4 className="instrucciones">Producto creado por la comunidad para Minecraft con Mods</h4>
                    <div className="botones">
                        <button className="jugar" onClick={test}>Jugar (Premiun)</button>
                        <button className="jugar-terceros" onClick={null}>+</button>
                    </div>
                </div>
            </div>
            <div className="descargatext" id="download-screen">
                <div className="loader"></div>
                <div className="barra-de-carga">
                    <div className="barra" id="progress-bar">
                    </div>
                    <div className="porcentaje" id="progress-text">0%</div>
                </div>
                <label className="text-descarga" id="descarga"></label>
                <a className="cancel-launch" href="./index.html">Cancelar</a>
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
                <button className="cancelbutton" onClick={null}>Borrar Instancia</button>
            </div>

        </div><section className="zona3">
                <h3 className="titledesc">Descripcion</h3>
                <div className="text3">
                    <img src="https://www.dropbox.com/s/5lnerrcxuk14gvf/gsnetbackground.png?dl=1" alt="Image 1"></img>
                    <div className="desc5">
                        <p className="descdesc">Minecraft es un juego de mundo abierto, y no tiene un fin claramente definido. Esto
                            permite una gran libertad en cuanto a la elección de su forma de jugar. A pesar de ello, el juego
                            posee un sistema que otorga logros por completar ciertas acciones.28​29​ La cámara es en primera
                            persona, aunque los jugadores tienen la posibilidad de cambiarla a una perspectiva de tercera
                            persona en cualquier momento.30​ El juego se centra en la colocación y destrucción de bloques,
                            siendo que este se compone de objetos tridimensionales cúbicos, colocados sobre un patrón de rejilla
                            fija.
                        </p>
                    </div>
                    <div className="desc5">
                        <p>Distrubido por:</p>
                        <p>Xbox Game Studio</p>
                    </div>
                    <div className="desc5">
                        <p>Desarrollado por:</p>
                        <p>Mojang</p>
                    </div>
                </div>
            </section></div>
    )
}

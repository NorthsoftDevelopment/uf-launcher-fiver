import './launcher.css'
import './config.css'
import Swal from 'sweetalert2';
import { Notification } from '../../ExtraComponents/Notification/Notification';

export const LauncherDesigned = ({ background, title, autor, otherOpts, sponsorDesc, sponsorIMG, sponsorTitle }) => {

    const removeInstance = () => {


        Swal.fire({
            text: "Esta accion es permanente",
            icon: 'warning',
            showCancelButton: true,
            background: '#252525',
            confirmButtonColor: 'rgb(0, 55, 255)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar',
            cancelButtonText: 'Cancelar',
            customClass: {
                title: 'title-loader',
                titleText: 'title-loader',
                text: 'title-loader',
                target: 'title-loader',
                htmlContainer: 'container-loader',
            },
        }).then((result) => {
            if (result.isConfirmed) {

                const folderPath = valorRoot;

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
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        );
                    }
                });
            }
        });
    };





    const launch = () => {

        

        Swal.fire({
            title: '',
            html: 'Espere un momento...',
            allowOutsideClick: false,
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

              const fs = require('fs');
        const path = require('path');

        const folderPath = 'C:/InhoniaLauncher/Instance/1';
        fs.mkdirSync(path.dirname(folderPath), { recursive: true });

        const { Client, Authenticator } = require('minecraft-launcher-core');
        const launcher = new Client();

        const { Auth } = require("msmc");

        const authManager = new Auth("select_account");

        authManager.launch("raw").then(async xboxManager => {

            const token = await xboxManager.getMinecraft();

            let optsAuth = {

                authorization: token.mclc(),
                overrides: {
                    detached: false,
                },

            }

            let opts = { ...optsAuth, ...otherOpts };


            launcher.launch(opts);

            launcher.on('debug', (e) => console.log(e));
            launcher.on('data', (e) => console.log(e));
            launcher.on('progress', (e) => {

                var progress = e;

                var progressBar = document.getElementById('progress-bar');
                var progressText = document.getElementById('progress-text');

                var porcentaje = Math.floor((progress.task / progress.total) * 100);

                progressBar.style.width = porcentaje + '%';
                progressText.innerText = porcentaje + '%';



            })
            launcher.on('data', (e) => {
                document.getElementById("status").textContent = e
                document.getElementById("status-content").style.display = "flex"
                document.getElementById("download-screen").style.display = "none";
            })

            launcher.on('debug', (e) => {
                document.getElementById("download-screen").style.display = "flex";
                document.getElementById("descarga").textContent = e
                Swal.close(); 

            })
            launcher.on('close', (e) => {
                document.getElementById("status").textContent = null
                document.getElementById("status-content").style.display = "none"

            })



        })
      
            },
            willClose: () => {
    
      
            }
          });


    }


    const launch2 = () => {

        Swal.fire({
            title: '',
            html: 'Espere un momento...',
            allowOutsideClick: false,
            timer: 2000,
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

              const fs = require('fs');
        const path = require('path');

        console.log(otherOpts.root)

        const folderPath = otherOpts.root;
        fs.mkdirSync(path.dirname(folderPath), { recursive: true });

        const { Client, Authenticator } = require('minecraft-launcher-core');

        const username = document.getElementById('username').value
        const launcher = new Client();

            let optsAuth = {

                authorization: Authenticator.getAuth(username),
                overrides: {
                    detached: false,
                },

            }

            let opts = { ...optsAuth, ...otherOpts };


            launcher.launch(opts);

            launcher.on('debug', (e) => console.log(e));
            launcher.on('data', (e) => console.log(e));
            launcher.on('progress', (e) => {

                var progress = e;

                var progressBar = document.getElementById('progress-bar');
                var progressText = document.getElementById('progress-text');

                var porcentaje = Math.floor((progress.task / progress.total) * 100);

                progressBar.style.width = porcentaje + '%';
                progressText.innerText = porcentaje + '%';



            })
            launcher.on('data', (e) => {
                document.getElementById("status").textContent = e
                document.getElementById("status-content").style.display = "flex"
                document.getElementById("download-screen").style.display = "none";
            })

            launcher.on('debug', (e) => {
                document.getElementById("download-screen").style.display = "flex";
                document.getElementById("descarga").textContent = e

            })
            launcher.on('close', (e) => {
                document.getElementById("status").textContent = null
                document.getElementById("status-content").style.display = "none"
            })

      
            },
            willClose: () => {
    
      
            }
          });


    }

    return (
        <div>
            <div>
                <div className="zona1_forge">
                    <img src={background} className='background-all'></img>
                    <div className="texto">
                        <h3 className="titulo">{title}</h3>
                        <h6 className="autor">{autor}</h6>
                        <h4 className="instrucciones">Juega con Xbox Game Pass</h4>
                        <h4 className="instrucciones">Producto creado por la comunidad para Minecraft con Mods</h4>
                        <div className="botones">
                            <button className="jugar" onClick={launch}>Jugar (Premium)</button>
                            <button className="jugar-terceros" onClick={launch2}>+</button>
                        </div>

                    </div>
                </div>
                <div className="descargatext" id="download-screen">
                    <img className='img-loader' src={sponsorIMG}></img>
                    <div className='descarga-content'>
                        <div className='sponsor-loader'>
                            <h1>{sponsorTitle}</h1>
                            <p>{sponsorDesc}</p>
                            <a href={window.location.origin} className='cancel-launch'>Cancelar</a>
                        </div>

                        <label className="text-descarga" id="descarga"></label>

                        <div className="barra-de-carga">
                            <div className="barra" id="progress-bar">
                            </div>
                            <div className="porcentaje" id="progress-text">0%</div>
                        </div>
                    </div>
                </div>

            </div>

            <section className="zona3">
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

                <div className='configs'>
                    <div className='config'>
                        <input id='username' className='input-general' placeholder='Usuario (SOLO INSTANCIAS ESPECIFICAS)'></input>
                    </div>
                </div>

            </section>
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
            <div className="status-content" id="status-content">
                <h3 className="titulo-config">Consola de Debug</h3>
                <label>Juego lanzado correctamente</label>
                <label id="status"></label>
            </div>


        </div>
    )
}

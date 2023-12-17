import './launcher.css';
import './config.css';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SeparateShort } from '../../ExtraComponents/Separate/Separate';
import Cookies from 'js-cookie';
import { useParams, useLocation } from 'react-router-dom';
import teen from '../../../assets/copy/teen.png';
import { OptionsClient } from '../Options/OptionsPrivate';
import { OptionsAdmin } from '../Options/OptionsAdmin';
import { Loader } from '../../loader/Loader';
import { Skeleton } from '../../loader/Skeleton';
import useDownloadLauncher from '../../../hooks/useDownloadLauncher';
import toast from 'react-hot-toast';
import { reloadScreen } from '../../ExtraComponents/ReloadScreen';



export const LauncherDesigned = ({ otherOpts }) => {


    const { id } = useParams();
    const documentRef = id;

    //const defines
    const [InfoInstance, setInfoInstance] = useState([]);
    const [LaunchInstance, setLaunchInstance] = useState([]);
    const [config, setConfig] = useState(false);
    const [configAdmin, setConfigAdmin] = useState(false);
    const [Admins, setAdmins] = useState([]);
    const [loading, setLoading] = useState(true);

    const [installing, setInstalling] = useState(false);
    const [update, setUpdate] = useState(false);
    const [versionPath, setversionPath] = useState([]);

    const openConfig = () => {

        setConfig(!config);

    };

    const openConfigAdmin = () => {

        setConfigAdmin(!configAdmin);

    };

    const email = Cookies.get('email');

    //things who working when launcher is loaded
    useEffect(() => {
        takeInfo()
    }, []);

    useEffect(() => {
        if (InfoInstance.title) {
            checkInstallation();
            setLoading(false);
        }
    }, [InfoInstance.title]);


    // take info about instance from backend
    const takeInfo = async () => {


        try {
            const api = 'https://inhonia-launcher-api.vercel.app/instance/data';

            const data = {
                location: documentRef
            };

            const response = await axios.post(api, data);
            const instances = response.data;

            setInfoInstance(instances.datos);

            setLaunchInstance(instances.launch);

            setAdmins(instances.admins);




        } catch (error) {

            console.log('error', error);

        }

    };

    function checkInstallation() {
        const fs = require('fs');
        const path = require('path');

        if (LaunchInstance && LaunchInstance.root && LaunchInstance.versionInstance) {

            const filePath = path.join(LaunchInstance.root, `${LaunchInstance.versionInstance}.txt`);

            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    console.error(`El archivo ${filePath} no existe.`);
                    setUpdate(true)
                } else {
                    console.log(`El archivo ${filePath} existe.`);
                }
            });
        } else {
            console.log('Server Error')
        }
    }

    function launch() {

        const { execFile } = require('node:child_process');

        const settingJSON = Cookies.get('launcher_settings')

        const setting = JSON.parse(settingJSON)

        console.log(setting)

        if (setting.launcherType === 'sk') {

            const child = execFile('C:/InhoniaLauncher/launchers/sk.exe', ['--workDir', LaunchInstance.root], (error, stdout, stderr) => {

                Cookies.set('recentPlayedID', InfoInstance.id, { expires: 365, sameSite: 'strict' });

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

                        }
                    });
                } else {

                }
                console.log(stdout);
            });
        } else {

            const child = execFile('C:/InhoniaLauncher/launchers/mc.exe', ['--workDir', LaunchInstance.root], (error, stdout, stderr) => {
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

                        }
                    });
                } else {
                    Cookies.set('recentPlayedID', InfoInstance.id, { expires: 365, sameSite: 'strict' });
                }
                console.log(stdout);
            });

        }




    }

    function launchSK() {

        const { execFile } = require('node:child_process');

        const child = execFile('C:/InhoniaLauncher/launchers/sk.exe', ['--workDir', LaunchInstance.root], (error, stdout, stderr) => {
            if (error) {
                throw error;
            } else {
                Cookies.set('recentPlayedID', InfoInstance.id, { expires: 365, sameSite: 'strict' });
            }
            console.log(stdout);
        });


    }



    const removeInstance = () => {

        console.log('Preparing to delete:', otherOpts.root);


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

                const folderPath = otherOpts.root;

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





    const launchOLD = () => {



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
                        removePackage: true,
                        overrides: {
                            detached: false,
                        },

                    };

                    let opts = { ...optsAuth, ...LaunchInstance };


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



                    });
                    launcher.on('data', (e) => {
                        document.getElementById("status").textContent = e;
                        document.getElementById("status-content").style.display = "flex";
                    });

                    launcher.on('debug', (e) => {
                        const descargaLabel = document.getElementById('descarga');

                        document.getElementById("download-screen").style.display = "flex";

                        const currentContent = descargaLabel.textContent;

                        // Agrega el nuevo log al contenido existente con una nueva línea
                        descargaLabel.textContent = currentContent + (currentContent ? "\n" : "") + e;

                        Swal.close();

                    });
                    launcher.on('close', (e) => {
                        document.getElementById("status").textContent = null;
                        document.getElementById("status-content").style.display = "none";

                    });



                });

            },
            willClose: () => {


            }
        });


    };


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

                console.log(otherOpts.root);

                const folderPath = otherOpts.root;
                fs.mkdirSync(path.dirname(folderPath), { recursive: true });

                const { Client, Authenticator } = require('minecraft-launcher-core');

                const username = document.getElementById('username').value;
                const launcher = new Client();

                let optsAuth = {

                    authorization: Authenticator.getAuth(username),
                    removePackage: true,
                    overrides: {
                        detached: false,
                    },

                };

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



                });
                launcher.on('data', (e) => {
                    document.getElementById("status").textContent = e;
                    document.getElementById("status-content").style.display = "flex";
                });

                launcher.on('debug', (e) => {
                    const descargaLabel = document.getElementById('descarga');

                    document.getElementById("download-screen").style.display = "flex";

                    const currentContent = descargaLabel.textContent;

                    // Agrega el nuevo log al contenido existente con una nueva línea
                    descargaLabel.textContent = currentContent + (currentContent ? "\n" : "") + e;

                    Swal.close();

                });
                launcher.on('close', (e) => {
                    document.getElementById("status").textContent = null;
                    document.getElementById("status-content").style.display = "none";

                });


            },
            willClose: () => {


            }
        });


    };

    const isAdminInArray = Admins.includes(email);

    function downloadInstance() {

        setInstalling(true)

        const fs = require('fs');
        const path = require('path');

        const folderPath = LaunchInstance.root;

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
            const DEFAULT_URL = LaunchInstance.clientPackage;
            const DEFAULT_PATH = LaunchInstance.root + '/' + LaunchInstance.clientPackageName;
            const root = LaunchInstance.root
            const { download, progress } = useDownloadLauncher(DEFAULT_URL, DEFAULT_PATH, root);

            useEffect(() => {
                download();
            }, []);
            useEffect(() => {
                if (progress === 100.0) {
                    toast.success("Descarga finalizada!", { id: t.id });

                    const fs = require('fs');
                    const path = require('path');
                    const filePath = path.join(LaunchInstance.root, `${LaunchInstance.versionInstance}.txt`);

                    const fileContent = '¡Descarga finalizada!';

                    fs.writeFileSync(filePath, fileContent);

                    console.log('Archivo creado en:', filePath);

                    setInstalling(false)

                    reloadScreen()

                }
            }, [progress]);
            const formattedProgress = Math.floor(progress);

            return (
                <div>
                    <h3 className='title-notification'>Menu de Instalaciones</h3>

                    <h4>Descargando {InfoInstance.title}</h4>
                    <p>Progreso de descarga: {formattedProgress}%</p>
                </div>
            );
        });
    }


    return (
        <div>
            {loading ? (
                <Skeleton />
            ) : (
                <div>

                    <div>
                        {config && <OptionsClient />}
                        {configAdmin && <OptionsAdmin id={documentRef} data={InfoInstance} />}
                        <div className="title-launch-zone">
                            <img src={InfoInstance.img} className='background-all'></img>
                            <div className="texto">
                                <img src={InfoInstance.banner}></img>
                                <div>
                                    <h3 className="titulo">{InfoInstance.title}</h3>
                                    <h6 className="autor">{InfoInstance.autor}</h6>
                                    <div className="botones">
                                        {installing ? (

                                            <button className="jugar" >Instalando</button>
                                        ) : (

                                            update ? (

                                                <button className="jugar" onClick={() => downloadInstance()}>Instalar</button>
                                            ) : (
                                                <div className='botones'>
                                                    <button className="jugar" onClick={() => launch()}>Jugar</button>
                                                    <button className="jugar-terceros" onClick={launchSK}>X</button>
                                                    {isAdminInArray && (
                                                        <button className="jugar-terceros" onClick={openConfigAdmin}>Admin</button>
                                                    )}
                                                </div>
                                            )

                                        )}


                                    </div>
                                    <h6 className="warning-instance">Comprueba que la instancia este verificada antes de instalarla o toma el riesgo.</h6>
                                    <div className='line'></div>
                                    <div className='copy'>
                                        <img src={teen}></img>
                                        <div className='copy-text'>
                                            <h3>TEEN</h3>
                                            <h6>Fantasy Violence</h6>
                                            <div className='line'></div>
                                            <h6>Mojang Studios</h6>

                                        </div>


                                    </div>
                                </div>


                            </div>
                            <div className="degradado"></div>
                        </div>
                        <div className="descargatext" id="download-screen">
                            <img className='img-loader' src={InfoInstance.img}></img>
                            <div className='descarga-content'>
                                <div className='sponsor-loader'>
                                    <h1>{InfoInstance.title}</h1>
                                    <p>{InfoInstance.notes}</p>

                                    <a href={window.location.origin} className='cancel-launch'>Cancelar</a>
                                </div>

                                <SeparateShort />

                                <div className="porcentaje" id="progress-text">0%</div>

                                <div className='console'>
                                    <label className="text-descarga" id="descarga"></label>
                                </div>

                                <SeparateShort />

                                <div className="status-content" id="status-content">
                                    <h3 className='title-config'>Juego lanzado correctamente</h3>
                                    <label id="status"></label>
                                </div>



                                <div className="barra-de-carga">
                                    <div className="barra" id="progress-bar">
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='zone-general-instance'>
                        <h3 className='titulo-config'>Novedades Recientes</h3>
                        <p className='p-general-short'>
                            {InfoInstance.notes}
                        </p>
                    </div>

                    <div className='zone-general-instance'>
                        <h3 className='titulo-config'>Datos de la Instancia</h3>
                        <p className='p-general-short'>
                            <div className='p-general-short-div'>                
                                <p>Version de Instancia: {LaunchInstance.versionInstance}</p>
                                <p>Version de juego: {LaunchInstance.version.number}</p>
                                <p>Tipo de juego: {LaunchInstance.type}</p>
                                <p>Memoria Recomendada: {LaunchInstance.memory.max}</p>
                            </div>
                        </p>
                    </div>

                    {/*<div className="zone-general-instance">
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
            </div> */}


                    <section className="zona3">
                        <h3 className="titledesc">Informacion de la Instancia</h3>
                        <div className="text3">
                            <img src={InfoInstance.banner} alt="Image 1"></img>
                            <div className="desc5">
                                <p className="descdesc">{InfoInstance.desc}
                                </p>
                            </div>
                            <div className="desc5">
                                <p>Minecraft de:</p>
                                <p>Xbox Game Studio</p>
                            </div>
                            <div className="desc5">
                                <p>Minecraft Desarrollado por:</p>
                                <p>Mojang Studios</p>
                            </div>
                            <div className="desc5">
                                <p>Instancia publicada por:</p>
                                <p>{InfoInstance.autor}</p>
                            </div>
                        </div>



                    </section>


                </div>
            )}

        </div>
    );
};

import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Settings.module.css";
import SelectSetting from "./items/SelectSetting";
import DirectorySetting from "./items/FileSetting";
import Cookies from "js-cookie";
import SliderSetting from "./items/SliderSetting";
import toast from "react-hot-toast";
import { Logout } from "../../hooks/Auth/Logout";

const OPTIONS = {
    launcherType: [
        { value: "sk", label: "Sk Launcher" },
        { value: "minecraft", label: "Minecraft Launcher" },
    ],
    allocatedMemory: [2, 4, 6, 9, 12, 24],
};

/**
 * 
 * @param {{launcherType: string, allocatedMemory: number, gameDirectory: string}?} defaults
 * @returns 
 */
function loadSettings(defaults) {
    let local = {};
    try {
        local = JSON.parse(Cookies.get("launcher_settings"));
        if (typeof local !== 'object') {
            throw Error("Cookie launcher_settings is not an object");
        }
    } catch (error) {
        console.error(error);
    }

    const settings = {
        launcherType: local.launcherType ?? defaults.launcherType,
        allocatedMemory: local.allocatedMemory ?? defaults.allocatedMemory,
    };

    return settings;
}

export default function Settings() {
    const [values, setValues] = useState(() => loadSettings({
        launcherType: OPTIONS.launcherType[0].value,
        allocatedMemory: OPTIONS.allocatedMemory[0],
    }));

    const handleValueChange = (name, value) => {
        setValues({
            ...values,
            [name]: value
        });

        const notificationContent = (
            <div>
                <h4>Nuevos cambios guardados</h4>
                <p>Preferencias de lanzamiento</p>
            </div>
        );

        toast.success(notificationContent, {
            duration: 4000,
        });
    };

    const changeRoot = (value) => {

        Cookies.set("root", value, { expires: 365, sameSite: 'strict' });

        const notificationContent = (
            <div>
                <h4>Nuevos cambios guardados</h4>
                <p>Preferencias de lanzamiento</p>
            </div>
        );

        toast.success(notificationContent, {
            duration: 4000,
        });
    }

    useEffect(() => {
        Cookies.set("launcher_settings", JSON.stringify(values), { expires: 365, sameSite: 'strict' });
    }, [values]);

    const openURL = (url) => {
        const { shell } = require('electron');
        shell.openExternal(url);
    };

    const background = Cookies.get('background')

    const installationTry = () => {
        Cookies.remove('basicInstallationComplete');
        window.location.href = '/';
    };

    const root = Cookies.get('root')


    function closeApp() {
        const { ipcRenderer } = require('electron');
        ipcRenderer.send('cerrar-app');
    }


    return (
        <div className="welcome">
            <div className="bg-img">
                <img src={background} alt="" />
            </div>
            <div className="content-70">

                <div className="content-70-part-large">
                    <div className={classes.settingsList}>
                        <SelectSetting
                            name="launcherType"
                            title="Tipo de lanzador"
                            description="Selecciona el tipo del launcher a utilizar."
                            options={OPTIONS.launcherType}
                            value={values.launcherType}
                            onValueChange={handleValueChange}
                        />
                        <DirectorySetting
                            name="gameDirectory"
                            title="Ubicacion de instalacion"
                            description="Selecciona que directorio se usará para instalar las instancias que descargues."
                            value={root}
                            onValueChange={changeRoot}
                        />
                        <div>
                            <h3>Perfil</h3>
                            <div className={classes.redzone} >
                                <p>En caso de presentar errores con la instalacion, presiona este boton para reiniciarla</p>
                                <button onClick={installationTry} className="button-general">Reiniciar Instalacion</button>
                                <button onClick={Logout} className="button-general">Cerrar Sesion</button>
                            </div>
                        </div>
                        <div>
                            <h3>Informacion</h3>
                            <div className={classes.infoapp} >
                                <div>
                                    <h3>Desarrollado por</h3> <h4>Inhonia Studios</h4>
                                </div>
                                <div>
                                    <h3>Distrubiudo por</h3> <h4>Unity Force Studios</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-70-short-part">
                    <div className={classes.settingsList}>
                        <SliderSetting
                            name="allocatedMemory"
                            title="Memoria asignada"
                            description="Memoria RAM que sera reservada para lanzar."
                            options={OPTIONS.allocatedMemory}
                            value={values.allocatedMemory}
                            onValueChange={handleValueChange}
                        />

                    </div>




                </div>
            </div>
        </div>
    );
}
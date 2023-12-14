import { useEffect, useState } from "react";
import classes from "./Settings.module.css";
import SelectSetting from "./items/SelectSetting";
import DirectorySetting from "./items/FileSetting";
import Cookies from "js-cookie";
import SliderSetting from "./items/SliderSetting";
import { SeparateShort } from "../ExtraComponents/Separate/Separate";
import toast from "react-hot-toast";

const OPTIONS = {
  launcherType: [
    { value: "inhonia", label: "Inhonia Launcher" },
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
    gameDirectory: local.gameDirectory ?? defaults.gameDirectory,
  };

  return settings;
}

export default function Settings() {
  const [values, setValues] = useState(() => loadSettings({
    launcherType: OPTIONS.launcherType[0].value,
    allocatedMemory: OPTIONS.allocatedMemory[0],
    gameDirectory: ""
  }));

  const handleValueChange = (name, value) => {
    setValues({
      ...values,
      [name]: value
    });

    const notificationContent = (
      <div>
        <h3 className='title-notification'>Notificacion</h3>
        <h4>Nuevos cambios guardados</h4>
        <p>Preferencias de lanzamiento</p>
      </div>
    );

    toast.success(notificationContent, {
      duration: 4000,
    });
  };

  useEffect(() => {
    Cookies.set("launcher_settings", JSON.stringify(values), { expires: 365, sameSite: 'strict' });
  }, [values]);

  const openURL = (url) => {
    const { shell } = require('electron');
    shell.openExternal(url);
  };

  const installationTry = () => {
    Cookies.remove('basicInstallationComplete');
    window.location.href = '/';
  };

  return (
    <div className="content-70">
      <div className="content-70-part-large">
        <h1 className='title-general-bold-big'>PREFERENCIAS</h1>
        <p>Importante: El modo lanzador de Inhonia Launcher esta desabilitado por lo que las opciones de memoria reservada estan desabilitadas.</p>
        <SeparateShort />
        <div className={ classes.settingsList }>
          <SelectSetting
            name="launcherType"
            title="Tipo de lanzador"
            description="Selecciona el tipo del launcher a utilizar."
            options={ OPTIONS.launcherType }
            value={ values.launcherType }
            onValueChange={ handleValueChange }
          />
          <SliderSetting
            name="allocatedMemory"
            title="Memoria asignada"
            description="Memoria RAM que sera reservada para lanzar."
            options={ OPTIONS.allocatedMemory }
            value={ values.allocatedMemory }
            onValueChange={ handleValueChange }
          />
          <DirectorySetting
            name="gameDirectory"
            title="Ubicacion de instalacion"
            description="Selecciona que directorio se usará para instalar las instancias que descargues."
            value={ values.gameDirectory }
            onValueChange={ handleValueChange }
          />
        </div>
      </div>
      <div className="content-70-short-part">
        <div>
          <h1 className="title-general-bold">RECURSOS</h1>
          <div className={ classes.resources }>

            <button onClick={ () => openURL('https://beta.inhonia.com') }>Politica de privacidad</button>
            <button onClick={ () => openURL('https://www.minecraft.net/en-us/msaprofile/mygames/editskin') }>Uso de terceros</button>
            <button onClick={ () => openURL('https://www.minecraft.net/en-us/msaprofile/mygames/editskin') }>Soporte y dudas</button>

          </div>
        </div>
        <SeparateShort />
        <div>
          <h1 className="title-general-bold">ZONA ROJA</h1>
          <div className={ classes.redzone } >
            <p>En caso de presentar errores con la instalacion, presiona este boton para reiniciarla</p>
            <button onClick={ installationTry } className="button-general">Reiniciar Instalacion</button>
          </div>
        </div>
        <SeparateShort />
        <div>
          <h1 className="title-general-bold">INFO</h1>
          <div className={ classes.infoapp } >
            <div>
              <h3>Version mas reciente</h3> <h4>2.1.0</h4>
            </div>
            <div>
              <h3>Version del servidor</h3> <h4>2.3.1</h4>
            </div>
            <div>
              <h3>Desarrollado por</h3> <h4>Inhonia Studios</h4>
            </div>
            <div>
              <h3>Distrubiudo por</h3> <h4>Inhonia</h4>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
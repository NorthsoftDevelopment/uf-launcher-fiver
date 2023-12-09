import { useEffect, useState } from "react";
import classes from "./Settings.module.css";
import SelectSetting from "./items/SelectSetting";
import Cookies from "js-cookie";
import SliderSetting from "./items/SliderSetting";
import DirectorySetting from "./Items/FileSetting";
import { SeparateShort } from "../ExtraComponents/Separate/Separate";

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

    const settingsDefault = {
      launcherType: defaults.launcherType,
      allocatedMemory:  defaults.allocatedMemory,
      gameDirectory:defaults.gameDirectory,
    };

    
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

  };

  useEffect(() => {
    Cookies.set("launcher_settings", JSON.stringify(values), { expires: 2147483647, sameSite: "strict" });
  }, [values])

  const openURL = (url) => {
    const { shell } = require('electron');
    shell.openExternal(url);
  };

  const installationTry = () => {
    Cookies.remove('basicInstallationComplete')

    window.location.href= '/'
  };

  return (
    <div className="content-70">
      <div className="content-70-part-large">
        <h1 className='title-general-bold-big'>PREFERENCIAS</h1>
        <SeparateShort />
        <div className={classes.settingsList}>
          <SelectSetting
            name="launcherType"
            title="Tipo de launcher"
            description="Selecciona el tipo del launcher a utilizar"
            options={OPTIONS.launcherType}
            value={values.launcherType}
            onValueChange={handleValueChange}
          />
          <SliderSetting
            name="allocatedMemory"
            title="Memoria reservada"
            description="Memoria RAM que sera reservada para la instancia"
            options={OPTIONS.allocatedMemory}
            value={values.allocatedMemory}
            onValueChange={handleValueChange}
          />
          <DirectorySetting
            name="gameDirectory"
            title="Ubicacion del archivo"
            description="Selecciona que directorio se usará para lanzar Minecraft"
            value={values.gameDirectory}
            onValueChange={handleValueChange}
          />
        </div>
      </div>
      <div className="content-70-short-part">
        <div>
          <h1 className="title-general-bold-big">RECURSOS DE USUARIO</h1>
          <div className={classes.resources}>

            <button onClick={() => openURL('https://beta.inhonia.com')}>Politica de privacidad</button>
            <button onClick={() => openURL('https://www.minecraft.net/en-us/msaprofile/mygames/editskin')}>Uso de terceros</button>
            <button onClick={() => openURL('https://www.minecraft.net/en-us/msaprofile/mygames/editskin')}>Soporte y dudas</button>

          </div>
        </div>
        <SeparateShort />
        <div>
          <h1 className="title-general-bold-big">ZONA ROJA</h1>
          <div className={classes.redzone} >
            <p>En caso de presentar errores con la instalacion, presiona este boton para reiniciarla</p>
            <button onClick={installationTry} className="button-general">Reiniciar Instalacion</button>
          </div>
        </div>
        <SeparateShort />
        <div>
          <h1 className="title-general-bold-big">INFO</h1>
          <div className={classes.infoapp} >
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
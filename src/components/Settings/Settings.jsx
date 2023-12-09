import { useEffect, useState } from "react";
import classes from "./Config.module.css";
import SelectSetting from "./items/SelectSetting";
import Cookies from "js-cookie";
import SliderSetting from "./items/SliderSetting";
import DirectorySetting from "./Items/FileSetting";

const OPTIONS = {
  launcherType: [
    { value: "minecraft", label: "Minecraft Launcher" },
    { value: "inhonia", label: "Inhonia Launcher" },
    { value: "sk", label: "Sk Launcher" },
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
    local = {}
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
    Cookies.set("launcher_settings", JSON.stringify(values), {expires: 2147483647, sameSite: "strict"});
  }, [values])

  return (
    <div className="content">
      <h1>Configuración</h1>
      <div className={ classes.settingsList }>
        <SelectSetting
          name="launcherType"
          title="Tipo de launcher"
          description="Selecciona el tipo del launcher a utilizar"
          options={OPTIONS.launcherType}
          value={ values.launcherType }
          onValueChange={ handleValueChange }
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
  );
}
import React from 'react'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import { OptionsLaunch } from '../../Options/Options'
import { runForgePremiun } from '../../Options/Launch'

export const LaunchForge = () => {


    let opts = {

        root: 'C:/InhoniaLauncher/Instance/Test',
        clientPackage: 'https://www.dropbox.com/s/1mrcbex3addqw6h/forge-1.18.2.zip?dl=1',
        version: {
            number: '1.18.2',
            type: "release"
        },
        forge: 'C:/InhoniaLauncher/Instance/Test/forge-1.18.2.jar',
        removePackage: true,
        memory: {
            max: '4G',
            min: "3G"
        },

    }


    return (
        <div>

            <LauncherDesigned

                title='Minecraft Forge'
                background='https://www.dropbox.com/s/u3ocot6vzh8jst2/backgroundforge.png?dl=1'
                autor='Forge • Comunidad • Mods'
                otherOpts={opts}
                sponsorTitle='Minecraft Con Mods'
                sponsorDesc='Powered by: Inhonia Launcher'
                sponsorIMG='https://www.dropbox.com/s/u3ocot6vzh8jst2/backgroundforge.png?dl=1'
                valorRoot='C:/InhoniaLauncher/Instance/Test'
            />

            <OptionsLaunch

                extraFunctions={

                    <div className="config">
                        <p className="tooltipped config-text" data-position="top"
                            data-tooltip="Esto modifica la version de Minecraft Forge que vas a lanzar, recuerda que sea la misma version de Minecraft">Version de Forge</p>
                        <select id="seleccionForge" className="select-general">
                            <option value="1.19.2">1.19.2</option>
                            <option value="1.18.2">1.18.2</option>
                            <option value="1.16.5">1.16.5</option>
                            <option value="1.12.2">1.12.2</option>
                        </select>
                    </div>

                }
            />

        </div>
    )
}

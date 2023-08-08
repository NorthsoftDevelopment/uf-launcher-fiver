import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import { OptionsLaunch } from '../../Options/Options'
import { runVanillaPremiun } from '../../Options/Launch'

export const LaunchVanilla = () => {

  return (

    <div>
        <LauncherDesigned 
        
        title='Minecraft Vanilla'
        background='https://www.dropbox.com/s/bt0wg7gtb5o8chp/backgroundvanilla.png?dl=1'
        autor='Xbox Game Studios • Microsoft • Mojang'
        launch={runVanillaPremiun}

      />

      <OptionsLaunch />

    </div>
  )
}


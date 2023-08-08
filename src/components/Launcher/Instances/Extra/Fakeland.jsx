import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import { OptionsLaunchPrivate } from "../../Options/OptionsPrivate";

export const LaunchFakeland = () => {

  const test = () => {

    console.log('test ready')

  }

  return (
    <div>

      <LauncherDesigned

        title='Fakeland'
        background='https://www.dropbox.com/s/bt0wg7gtb5o8chp/backgroundvanilla.png?dl=1'
        autor='Korita • Amigos • Serie'
        launch={test}

      />

      <OptionsLaunchPrivate

      admin='koraook@gmail.com'
      documento='oEFiPXiavEfQlfHQ0mgC'

      />

    </div>
  )
}

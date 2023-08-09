import { Loader } from '../../../loader/Loader';
import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance';
import { OptionsLaunchPrivate } from "../../Options/OptionsPrivate";

export const LaunchFakeland = () => {

  const test = () => {

    console.log('test ready')

  }


  return (
    <div>

      <PrivateInstance>

        <LauncherDesigned

          title='Fakeland'
          background='https://www.dropbox.com/s/bt0wg7gtb5o8chp/backgroundvanilla.png?dl=1'
          autor='Korita • Amigos • Serie'
          launch={test}

        />

      </PrivateInstance>

    </div>
  )
}

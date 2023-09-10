import React from 'react'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance';
import { ConnectMinecraft } from '../../../../private/ConnectMinecraft';

export const LaunchFakeland = () => {

    let opts = {
        clientPackage: 'https://www.dropbox.com/s/neprjegbvybobm9/test.zip?dl=1',
        root: 'C:/InhoniaLauncher/Instance/1',
        forge: 'C:/InhoniaLauncher/Instance/1/forge-1.18.2-40.1.54-installer.jar',
        version: {
            number: '1.18.2',
            type: "release"
        },
        removePackage: true,
        memory: {
            max: '6G',
            min: "4G"
        }

    }



    return (
        <ConnectMinecraft>
            <div>

                <PrivateInstance
                    documentReference='fakeland'
                    admin='koraook@gmail.com'
                    id="fakeland">


                    <LauncherDesigned

                        title='Fakeland'
                        background='https://cdn.discordapp.com/attachments/1098296460786806866/1140160774107566100/background-test.png'
                        autor='Servidor • Network • Beta'
                        sponsorDesc='Serie de amigos con Korita'
                        sponsorIMG='https://cdn.discordapp.com/attachments/1098296460786806866/1140029691865083914/background-color.png'
                        sponsorTitle='Fakeland'
                        otherOpts={opts}

                    />

                </PrivateInstance>

            </div>
        </ConnectMinecraft>
    )
}

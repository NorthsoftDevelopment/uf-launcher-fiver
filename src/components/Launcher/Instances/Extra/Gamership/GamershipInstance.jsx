import React from 'react'
import { LauncherDesigned } from '../../../Designed/LauncherDesigned'
import { PrivateInstance } from '../../../Options/Extra/PrivateInstance';
import { ConnectMinecraft } from '../../../../../private/ConnectMinecraft';

export const GamershipInstanceNetworkBeta = () => {


    let opts = {

        root: 'C:/InhoniaLauncher/Instance/3',
        clientPackage: 'https://www.dropbox.com/scl/fi/e7xu0hwfxdupldh6myjra/gamership.zip?rlkey=wz676yhx38fld2a48f1b3uioa&dl=1',
        version: {
            number: '1.20',
            type: "release"
        },
        removePackage: true,
        memory: {
            max: '3G',
            min: "2G"
        },
        server: {
            host: '45.166.100.40',
            port: '25026'
        }

    }


    return (
        <div>

            <PrivateInstance
                documentReference='oEFiPXiavEfQlfHQ0mgC'
                admin='koraook@gmail.com'
                id="oEFiPXiavEfQlfHQ0mgC">

                <LauncherDesigned

                    title='Gamership Network'
                    background='https://cdn.discordapp.com/attachments/1075189121783443588/1141860533956526230/gamership-background.png'
                    autor='Servidor • Network • Beta'
                    otherOpts={opts}
                    sponsorTitle='Gamership Network'
                    sponsorDesc='Network oficial de Gamership Network - Construcciones por MrPolar'
                    sponsorIMG='https://codigoesports.com/wp-content/uploads/2022/11/Gamership-2048x1365.jpg'

                />

            </PrivateInstance>

        </div>
    )
}

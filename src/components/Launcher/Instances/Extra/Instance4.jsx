import React from 'react'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance';
import { ConnectMinecraft } from '../../../../private/ConnectMinecraft';

export const Instance4 = () => {

    let opts = {

        //clientPackage: 'https://www.dropbox.com/scl/fi/60vh4xt5c7sreyc50zxu3/4.zip?rlkey=c5tfjv0ipisb5naui9zez88aj&dl=1',
        root: 'C:/InhoniaLauncher/Instance/4',
        forge: 'C:/InhoniaLauncher/Instance/4/forge.jar',
        version: {
            number: '1.18.2',
            type: "release"
        },
        removePackage: true,
        memory: {
            max: '5G',
            min: "4G"
        }

    }



    return (
        <ConnectMinecraft>
            <div>

                <PrivateInstance
                    documentReference='4'
                    admin='koraook@gmail.com'
                    id="4">


                    <LauncherDesigned

                        title='Joary Instance'
                        background='https://wallpaperaccess.com/full/307557.jpg'
                        autor='Joary • Nothing • Nothing'
                        sponsorDesc='Servidor de Joary'
                        sponsorIMG='https://cdn.discordapp.com/attachments/935022273969139722/1087974508859764736/Valleys-and-Villages-of-Transylvania-e1546887737705.png?ex=6538aab8&is=652635b8&hm=8368469da6aba45711407ce8e4b5c85ffb0d129c77604af7eff586ebfe91d73e&'
                        sponsorTitle='Joary Instance'
                        otherOpts={opts}
                        documentRef='4'

                    />

                </PrivateInstance>

            </div>
        </ConnectMinecraft>
    )
}

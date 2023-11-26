import React from 'react'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance';
import { ConnectMinecraft } from '../../../../private/ConnectMinecraft';

export const Instance4 = () => {

    let opts = {

        clientPackage: 'https://www.dropbox.com/scl/fi/60vh4xt5c7sreyc50zxu3/4.zip?rlkey=c5tfjv0ipisb5naui9zez88aj&dl=1',
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
                    admin='amisiitamamasiita@outlook.com'
                    id="4">


                    <LauncherDesigned

                        title='Sorpresita para mi Yahir'
                        background='https://media.discordapp.net/attachments/935022273969139722/1162802932664770651/IMG_7681.png?ex=653d439e&is=652ace9e&hm=d677d352ffe99e3bd11098a40e61487de035bb93fed93645b03b4d8c5ab196da&=&width=1213&height=683'
                        autor='Amisita'
                        sponsorDesc='Amisita'
                        sponsorIMG='https://cdn.discordapp.com/attachments/935022273969139722/1162802934631895060/image.png?ex=653d439f&is=652ace9f&hm=aaf2b274072855b10225052215ab10f8de35fa525a1dbbaa8c4c226437a60501&'
                        sponsorTitle='Feliz Cumpleaños'
                        otherOpts={opts}
                        documentRef='4'

                    />

                </PrivateInstance>

            </div>
        </ConnectMinecraft>
    )
}

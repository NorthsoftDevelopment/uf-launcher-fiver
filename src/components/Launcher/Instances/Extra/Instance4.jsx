import React from 'react'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance';
import { ConnectMinecraft } from '../../../../private/ConnectMinecraft';

export const Instance4 = () => {

    let opts = {

        //clientPackage: 'https://www.dropbox.com/s/neprjegbvybobm9/test.zip?dl=1',
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
                        background='https://cdn.discordapp.com/attachments/1098296460786806866/1140160774107566100/background-test.png'
                        autor='Joary • Nothing • Nothing'
                        sponsorDesc='Servidor de Joary'
                        sponsorIMG='https://cdn.discordapp.com/attachments/1098296460786806866/1140029691865083914/background-color.png'
                        sponsorTitle='Joary Instance'
                        otherOpts={opts}
                        documentRef='4'

                    />

                </PrivateInstance>

            </div>
        </ConnectMinecraft>
    )
}

import React from 'react'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'

export const Instance2 = () => {

    const id = '2'

        let opts = {

            root: 'C:/InhoniaLauncher/Instance/2',
            clientPackage: 'https://assets.inhonia.com/inhonia-launcher/instances/2.zip',
            removePackage: true,
            version: {
                number: '1.18.2',
                type: "release"
            },
            forge: 'C:/InhoniaLauncher/Instance/2/forge-1.18.2-40.2.10-installer.jar',
            memory: {
                max: '7G',
                min: "4G"
            },

        }



    return (
        <div>

            <PrivateInstance
                documentReference={id}
                admin='pamelarivera0997@gmail.com'
                id={id}>


                <LauncherDesigned

                    title='Lalaland'
                    background='https://cdn.discordapp.com/attachments/1107684864506998824/1144483633604857937/mc_launcher_photo_1_.png'
                    autor='Eladina • Comunidad • Servidor'
                    sponsorDesc='Lalaland Servidor'
                    sponsorIMG='https://cdn.discordapp.com/attachments/1035201776955183134/1150566470863028284/image.png'
                    sponsorTitle='Lalaland Server'
                    valorRoot='C:/InhoniaLauncher/Instance/2'
                    otherOpts={opts}

                />

            </PrivateInstance>

        </div>


    )
}

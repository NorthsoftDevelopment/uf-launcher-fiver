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

                    title='Eladina'
                    background='https://cdn.discordapp.com/attachments/1107684864506998824/1144483633139286056/mc_launcher_2_.png'
                    autor='Eladina • Comunidad • Servidor'
                    sponsorDesc='Serie de amigos con Eladina'
                    sponsorIMG='https://cdn.discordapp.com/attachments/1107684864506998824/1144483632757624862/mc_launcher_photo_6.png'
                    sponsorTitle='Eladina Community Server'
                    otherOpts={opts}

                />

            </PrivateInstance>

        </div>


    )
}

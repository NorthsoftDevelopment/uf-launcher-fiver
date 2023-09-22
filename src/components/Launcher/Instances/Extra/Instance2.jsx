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

                    title='Lalaland (Gran Evento!)'
                    background='https://cdn.discordapp.com/attachments/1150101451033559260/1153794895417454592/el_laberinto_banner.png'
                    autor='Eladina • Comunidad • Servidor'
                    sponsorDesc='El Laberinto'
                    sponsorIMG='https://cdn.discordapp.com/attachments/1035201776955183134/1150566470863028284/image.png'
                    sponsorTitle='Lalaland Server'
                    valorRoot='C:/InhoniaLauncher/Instance/2'
                    otherOpts={opts}

                />

            </PrivateInstance>

        </div>


    )
}

import React from 'react'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'

export const InstanceID2 = () => {

    const launch = () => {

    }
    return (
        <div>
            <div>

                <PrivateInstance

                    documentReference='2'
                    admin='koraook@gmail.com'
                    id="2">

                    <LauncherDesigned

                        title='Lalaland Servidor'
                        background='https://cdn.discordapp.com/attachments/1075189121783443588/1141860533956526230/gamership-background.png'
                        autor='Eladina • Creadora • Seguidores'
                        sponsorDesc='Sevidor oficial de la DINASTIA'
                        sponsorIMG='https://cdn.discordapp.com/attachments/1075189121783443588/1141860533956526230/gamership-background.png'
                        sponsorTitle='Eladina'
                        launch={launch}

                    />

                </PrivateInstance>

            </div>
        </div>
    )
}

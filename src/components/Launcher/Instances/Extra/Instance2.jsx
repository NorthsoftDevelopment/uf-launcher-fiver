import React from 'react'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'

export const Instance2 = () => {

    const launch = () => {


        const fs = require('fs');
        const path = require('path');

        const username = document.getElementById('username')

        const folderPath = 'C:/InhoniaLauncher/Instance/MinecraftVanilla';
        fs.mkdirSync(path.dirname(folderPath), { recursive: true });

        const { Client, Authenticator } = require('minecraft-launcher-core');
        const launcher = new Client();

            let opts = {

                authorization: Authenticator(username),
                overrides: {
                    detached: false,
                },
                clientPackage: 'https://www.dropbox.com/scl/fi/e7xu0hwfxdupldh6myjra/gamership.zip?rlkey=wz676yhx38fld2a48f1b3uioa&dl=1',
                root: 'C:/InhoniaLauncher/Instance/2',
                version: {
                    number: '1.18.2',
                    type: "release"
                },
                forge: '',
                removePackage: true,
                memory: {
                    max: '5G',
                    min: "4G"
                },

            }

            launcher.launch(opts);

            launcher.on('debug', (e) => console.log(e));
            launcher.on('data', (e) => console.log(e));
            launcher.on('progress', (e) => {

                var progress = e;

                var progressBar = document.getElementById('progress-bar');
                var progressText = document.getElementById('progress-text');

                var porcentaje = Math.floor((progress.task / progress.total) * 100);

                progressBar.style.width = porcentaje + '%';
                progressText.innerText = porcentaje + '%';



            })
            launcher.on('data', (e) => {
                document.getElementById("status").textContent = e
                document.getElementById("status-content").style.display = "flex"
                document.getElementById("download-screen").style.display = "none";
            })

            launcher.on('debug', (e) => {
                document.getElementById("download-screen").style.display = "flex";
                document.getElementById("descarga").textContent = e

            })
            launcher.on('close', (e) => {
                document.getElementById("status").textContent = ""
                document.getElementById("status-content").style.display = "none"
            })

    }

    return (
        <div>

            <PrivateInstance
                documentReference='2'
                admin='koraook@gmail.com'
                id="2">


                <LauncherDesigned

                    title='Eladina'
                    background='https://cdn.discordapp.com/attachments/1107684864506998824/1144483633139286056/mc_launcher_2_.png'
                    autor='Eladina • Comunidad • Servidor'
                    sponsorDesc='Serie de amigos con Eladina'
                    sponsorIMG='https://cdn.discordapp.com/attachments/1107684864506998824/1144483632757624862/mc_launcher_photo_6.png'
                    sponsorTitle='Eladina Community Server'
                    launch={launch}

                />

            </PrivateInstance>

        </div>


    )
}

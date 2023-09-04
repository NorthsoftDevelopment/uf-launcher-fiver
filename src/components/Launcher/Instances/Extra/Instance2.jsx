import React from 'react'
import { PrivateInstance } from '../../Options/Extra/PrivateInstance'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'

export const Instance2 = () => {

    const id = '2'

    const launch = () => {

        const fs = require('fs');
        const path = require('path');

        const username = document.getElementById('username').value

        console.log(username)

        const folderPath = 'C:/InhoniaLauncher/Instance/';

        fs.mkdirSync(path.dirname(folderPath), { recursive: true });

        const { Client, Authenticator } = require('minecraft-launcher-core');
        const launcher = new Client();

        let opts = {

            authorization: Authenticator.getAuth(username),
            overrides: {
                detached: false,
            },
            clientPackage: 'https://assets.inhonia.com/inhonia-launcher/instances/2.zip',
            removePackage: true,
            root: folderPath + id,
            version: {
                number: '1.18.2',
                type: "release"
            },
            forge: folderPath + id + '/forge-1.18.2-40.2.10-installer.jar',
            memory: {
                max: '7G',
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
                documentReference={id}
                admin='koraook@gmail.com'
                id={id}>


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

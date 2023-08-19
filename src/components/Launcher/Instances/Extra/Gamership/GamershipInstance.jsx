import React from 'react'
import { LauncherDesigned } from '../../../Designed/LauncherDesigned'
import { PrivateInstance } from '../../../Options/Extra/PrivateInstance';
import { ConnectMinecraft } from '../../../../../private/ConnectMinecraft';

export const GamershipInstanceNetworkBeta = () => {


    const launch = () => {


        const fs = require('fs');
        const path = require('path');

        const folderPath = 'C:/InhoniaLauncher/Instance/MinecraftVanilla';
        fs.mkdirSync(path.dirname(folderPath), { recursive: true });

        const { Client, Authenticator } = require('minecraft-launcher-core');
        const launcher = new Client();

        const { Auth } = require("msmc");

        const authManager = new Auth("select_account");

        authManager.launch("raw").then(async xboxManager => {

            const token = await xboxManager.getMinecraft();

            let opts = {

                authorization: token.mclc(),
                overrides: {
                    detached: false,
                },
                clientPackage: 'https://www.dropbox.com/scl/fi/e7xu0hwfxdupldh6myjra/gamership.zip?rlkey=wz676yhx38fld2a48f1b3uioa&dl=1',
                root: 'C:/InhoniaLauncher/Instance/GamershipNetwork',
                version: {
                    number: '1.19.4',
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

                if (porcentaje === 100) {
                    var barraDeCarga = document.querySelector('.barra-de-carga');
                    barraDeCarga.style.display = 'none';
                }

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
                document.getElementById("status").textContent = null
                document.getElementById("status-content").style.display = "none"
            })
    


        })



    }

    return (
        <ConnectMinecraft>
            <div>

                <PrivateInstance 
                documentReference='oEFiPXiavEfQlfHQ0mgC'
                admin='justnotsebas@outlook.com'>

                    <LauncherDesigned

                        title='Gamership Network'
                        background='https://cdn.discordapp.com/attachments/1075189121783443588/1141860533956526230/gamership-background.png'
                        autor='Servidor • Network • Beta'
                        launch={launch} 

                    />

                </PrivateInstance>

            </div>
        </ConnectMinecraft>
    )
}

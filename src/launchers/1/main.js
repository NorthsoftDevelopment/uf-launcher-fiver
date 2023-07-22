function premiun() {

    const fs = require('fs');
    const path = require('path');

    const folderPath = 'C:/InhoniaStudios/MinecraftVanilla';
    fs.mkdirSync(path.dirname(folderPath), { recursive: true });

    var valorVersion = document.getElementById('seleccionVersion').value;
    var valorRam = document.getElementById('seleccionRam').value;
    var valorRoot = document.getElementById('seleccionRoute').value;

    const { Client, Authenticator } = require('minecraft-launcher-core');
    const launcher = new Client();
    //Obtenemos el valor del input con id "username"
    const { Auth } = require("msmc");
    //Create a new Auth manager
    const authManager = new Auth("select_account");
    //Launch using the 'raw' gui framework (can be 'electron' or 'nwjs')
    authManager.launch("raw").then(async xboxManager => {
        //Generate the Minecraft login token
        const token = await xboxManager.getMinecraft();
        // Pulled from the Minecraft Launcher core docs.
        let opts = {
            // For production launchers, I recommend not passing
            // the getAuth function through the authorization field and instead
            // handling authentication outside before you initialize
            // MCLC so you can handle auth based errors and validation!
            //authorization: Authenticator.getAuth("username", "password"),
            authorization: token.mclc(),
            overrides: {
                detached: false,
            },
            root: valorRoot,
            version: {
                number: valorVersion,
                type: "release"
            },
            memory: {
                max: valorRam,
                min: "2G"
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


    })
}

function nopremiun() {

    const fs = require('fs');
    const path = require('path');

    const folderPath = 'C:/InhoniaStudios/MinecraftVanilla';
    fs.mkdirSync(path.dirname(folderPath), { recursive: true });

    var valorVersion = document.getElementById('seleccionVersion').value;
    var valorRam = document.getElementById('seleccionRam').value;
    var valorRoot = document.getElementById('seleccionRoute').value;
    var username = document.getElementById('user').value;

    const { Client, Authenticator } = require('minecraft-launcher-core');
    const launcher = new Client();

        let opts = {
            authorization: Authenticator.getAuth(username),
            overrides: {
                detached: false,
            },
            root: valorRoot,
            version: {
                number: valorVersion,
                type: "release"
            },
            memory: {
                max: valorRam,
                min: "2G"
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

}



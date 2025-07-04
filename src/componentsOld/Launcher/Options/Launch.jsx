export const runVanillaPremiun = () => {

    const fs = require('fs');
    const path = require('path');

    const folderPath = 'C:/InhoniaLauncher/Instance/MinecraftVanilla';
    fs.mkdirSync(path.dirname(folderPath), { recursive: true });

    var valorVersion = document.getElementById('seleccionVersion').value;
    var valorRam = document.getElementById('seleccionRam').value;
    var valorRoot = document.getElementById('seleccionRoute').value;

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



    })

}

export const runForgePremiun = () => {

    var valorVersion = document.getElementById('seleccionVersion').value;
    var valorRam = document.getElementById('seleccionRam').value;
    var valorRoot = document.getElementById('seleccionRoute').value;
    var valorforge = document.getElementById('seleccionForge').value;

    var forgeversion = ''
    var forgeFile = ""
    var pathJava = ""

    switch (valorforge) {
        case '1.19.2':
            forgeversion = "https://www.dropbox.com/s/9ztxy844vch1v1a/forge-1.19.2.zip?dl=1";
            forgeFile = "\\forge-1.19.2.jar";

            break;
        case '1.18.2':
            forgeversion = "https://www.dropbox.com/s/1mrcbex3addqw6h/forge-1.18.2.zip?dl=1";
            forgeFile = "\\forge-1.18.2.jar";

            break;
        case '1.16.5':
            forgeversion = "https://www.dropbox.com/s/a76mfml9u7gq9tx/forge-1.16.5.zip?dl=1";
            forgeFile = "\\forge-1.16.5.jar";

            break;
        case '1.12.2':
            forgeversion = "https://www.dropbox.com/s/awazsla4g5he2hd/forge-1.12.2.zip?dl=1";
            forgeFile = "\\forge-1.12.2.jar";
            break;

        default:
            forgeversion = "https://www.dropbox.com/s/9ztxy844vch1v1a/forge-1.19.2.zip?dl=1";
            forgeFile = "\\forge-1.19.2.jar";
            break;
    }

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
            root: valorRoot,
            clientPackage: forgeversion,
            version: {
                number: valorVersion,
                type: "release"
            },
            forge: valorRoot + forgeFile,
            removePackage: true,
            memory: {
                max: valorRam,
                min: "3G"
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
            document.getElementById("status").textContent = null
            document.getElementById("status-content").style.display = "none"
        })



    })

}


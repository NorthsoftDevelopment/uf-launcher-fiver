
//Variables de usuario de lanzamiento
var valorVersion = document.getElementById('seleccionVersion').value;
var valorRam = document.getElementById('seleccionRam').value;
var valorRoot = document.getElementById('seleccionRoute').value;
var username = document.getElementById('user').value;
var valorforge = document.getElementById('seleccionForge').value;

var forgeversion = ''
var forgeFile = ""
var pathJava = ""

switch (valorforge) {
    case '1.19.2':
        forgeversion = "https://www.dropbox.com/s/9ztxy844vch1v1a/forge-1.19.2.zip?dl=1";
        forgeFile = "\\forge-1.19.2.jar";
        pathJava = "C:/InhoniaLauncher/Java/bin/javaw.exe";
        break;
    case '1.18.2':
        forgeversion = "https://www.dropbox.com/s/1mrcbex3addqw6h/forge-1.18.2.zip?dl=1";
        forgeFile = "\\forge-1.18.2.jar";
        pathJava = "C:/InhoniaLauncher/Java/bin/javaw.exe";
        break;
    case '1.16.5':
        forgeversion = "https://www.dropbox.com/s/a76mfml9u7gq9tx/forge-1.16.5.zip?dl=1";
        forgeFile = "\\forge-1.16.5.jar";
        pathJava = "C:/InhoniaLauncher/Java/bin/javaw.exe";
        break;
    case '1.12.2':
        forgeversion = "https://www.dropbox.com/s/awazsla4g5he2hd/forge-1.12.2.zip?dl=1";
        forgeFile = "\\forge-1.12.2.jar";
        pathJava = "C:/Program Files/Java/jre-1.8/bin/javaw.exe";
        break;

    default:
        forgeversion = "https://www.dropbox.com/s/9ztxy844vch1v1a/forge-1.19.2.zip?dl=1";
        forgeFile = "\\forge-1.19.2.jar";
        break;
}


//Funciones de lanzamientos

function premiun() {

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
            javaPath: pathJava,
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

function nopremiun() {

    const fs = require('fs');
    const path = require('path');

    const folderPath = 'C:/InhoniaLauncher/Instance/MinecraftVanilla';
    fs.mkdirSync(path.dirname(folderPath), { recursive: true });

    const { Client, Authenticator } = require('minecraft-launcher-core');
    const launcher = new Client();

    let opts = {
        authorization: Authenticator.getAuth(username),
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
        javaPath: pathJava,
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

}



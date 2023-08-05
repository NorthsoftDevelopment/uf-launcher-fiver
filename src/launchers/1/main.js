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

const Cookies = require('js-cookie')

const email = Cookies.get('email')

console.log(email)

if (email === '"koraook@gmail.com"','"korita@inhonia.online"'){

    document.getElementById('tabla').style.display = "flex"

    console.log('Usuario en whitelist')

} else {

    window.location.href = '/'

}

if (email === '"koraook@gmail.com"'){
    
    console.log('Usuario en whitelist')

} else {

    window.location.href = '/'

}





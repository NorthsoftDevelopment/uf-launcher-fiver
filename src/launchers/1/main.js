function nopremiun() {
    const fs = require('fs');
const path = require('path');

const folderPath = 'C:/InhoniaStudios/GamershipNetwork';

fs.mkdirSync(path.dirname(folderPath), { recursive: true });
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

            root: "C:\\InhoniaStudios\\GamershipNetwork",
            version: {
                number: "1.19.4",
                type: "release"
            },
            memory: {
                max: "4G",
                min: "2G"
            }
        }

        launcher.launch(opts);

        launcher.on('debug', (e) => console.log(e));
        launcher.on('data', (e) => console.log(e));
        launcher.on('package-extract', (e) => console.log(e))
        launcher.on('progress', (e) => console.log(e))
        launcher.on('data', (e) => {
            document.getElementById("status").textContent = e
            document.getElementById("download-screen").style.display = "none";
        })

        launcher.on('debug', (e) => {
            document.getElementById("download-screen").style.display = "block";
            document.getElementById("descarga").textContent = e
          })
    })
}


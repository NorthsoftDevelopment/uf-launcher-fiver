function nopremiun() {
    const fs = require('fs');
const path = require('path');

const folderPath = 'C:/InhoniaStudios/GamershipNetwork';

fs.mkdirSync(path.dirname(folderPath), { recursive: true });
const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();
    //Obtenemos el valor del input con id "username"

        // Pulled from the Minecraft Launcher core docs.
        let opts = {
            // For production launchers, I recommend not passing
            // the getAuth function through the authorization field and instead
            // handling authentication outside before you initialize
            // MCLC so you can handle auth based errors and validation!
            //authorization: Authenticator.getAuth("username", "password"),
            clientPackage: "https://www.dropbox.com/s/neprjegbvybobm9/test.zip?dl=1",
            authorization: Authenticator.getAuth('LeeverAmaKora'),
            overrides: {
                detached: false,
            },

            root: "C:\\InhoniaStudios\\Fakeland",
            version: {
                number: "1.18.2",
                type: "release"
            },
            forge: "C:\\InhoniaStudios\\Fakeland\\forge-1.18.2-40.1.54-installer.jar",
            memory: {
                max: "8G",
                min: "6G"
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

        launcher.off('data', (e) => {
            document.getElementById("status").textContent = null
       })

        launcher.off('debug', (e) => {
            document.getElementById("download-screen").style.display = "none";
            document.getElementById("descarga").textContent = null
        })
}


function noupdate() {
    const fs = require('fs');
const path = require('path');

const folderPath = 'C:/InhoniaStudios/GamershipNetwork';

fs.mkdirSync(path.dirname(folderPath), { recursive: true });
const { Client, Authenticator } = require('minecraft-launcher-core');
const launcher = new Client();
    //Obtenemos el valor del input con id "username"
        //Generate the Minecraft login token
        // Pulled from the Minecraft Launcher core docs.
        let opts = {
            // For production launchers, I recommend not passing
            // the getAuth function through the authorization field and instead
            // handling authentication outside before you initialize
            // MCLC so you can handle auth based errors and validation!
            //authorization: Authenticator.getAuth("username", "password"),
            authorization: Authenticator.getAuth('LeeverAmaKoro'),
            overrides: {
                detached: false,
            },

            root: "C:\\InhoniaStudios\\Fakeland",
            version: {
                number: "1.18.2",
                type: "release"
            },
            forge: "C:\\InhoniaStudios\\Fakeland\\forge-1.18.2-40.1.54-installer.jar",
            memory: {
                max: "8G",
                min: "6G"
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

        launcher.off('data', (e) => {
            document.getElementById("status").textContent = null
       })

        launcher.off('debug', (e) => {
            document.getElementById("download-screen").style.display = "none";
            document.getElementById("descarga").textContent = null
        })
}


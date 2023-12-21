< !DOCTYPE html >
  <html>

    <head>
      <meta charset="UTF-8">
        <title>Descarga Personalizada</title>
        <style>
          #progress-bar {
            width: 100%;
          background-color: #ddd;
          height: 20px;
          margin-top: 20px;
        }

          #progress {
            width: 0;
          height: 100%;
          background-color: #4caf50;
        }
        </style>
    </head>

    <body>
      <h1>Descarga Personalizada con Electron</h1>
      <button id="play" onclick="launch()">Jugar</button>
      <button onclick="descargarYGuardarArchivo()">Descargar</button>
      <div id="progress-bar">
        <div id="progress"></div>
      </div>
    </body>
    <script src="./js/test.js"></script>
    <script>

      const { remote } = require('electron');
      const fs = require('fs');
      const https = require('https');


      function launch() {

        const { execFile } = require('node:child_process');
        const child = execFile('mc.exe', ['--workDir', 'C:/InhoniaLauncher/Instance/2'], (error, stdout, stderr) => {
            if (error) {
                throw error;
            }
      console.log(stdout);
        });

    </script>;
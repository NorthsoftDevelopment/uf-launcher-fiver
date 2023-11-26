import { useState } from "react";
const { remote } = require('electron');
const fs = require('fs');
const https = require('https');

export default function useDownloadLauncher(url, path) {
  const [progress, setProgress] = useState(0);

  async function download() {
    // URL del archivo que quieres descargar

    // Ruta donde quieres guardar el archivo

    // var progressBar = document.getElementById('progress-bar');
    // var progress = document.getElementById('progress');

    // Realizar una solicitud HTTP para obtener el contenido del archivo
    https.get(url, (response) => {
      console.log("Respuesta de la descarga", response);
      let data = '';
      let totalLength = parseInt(response.headers['content-length'], 10) || 0;
      let receivedLength = 0;

      // Acumular los datos recibidos
      response.on('data', (chunk) => {
        data += chunk;
        receivedLength += chunk.length;

        // Actualizar la barra de progreso
        const progressValue = (receivedLength / totalLength) * 100;
        setProgress(progressValue);
      });

      // Al completarse la descarga, escribir el archivo en la ruta especificada
      response.on('end', () => {
        fs.writeFileSync(path, data, 'utf-8');
        console.log('Archivo guardado con Ã©xito en:', path);
      });
    }).on('error', (error) => {
      console.error('Error al descargar y guardar el archivo:', error);
    });
  }

  return { download, progress };
}
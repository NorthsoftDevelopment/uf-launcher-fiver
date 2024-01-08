import { useState } from "react";
import Swal from "sweetalert2";
const { remote } = require('electron');
const fs = require('fs');
const https = require('https');
var AdmZip = require('adm-zip');

export default function useDownloadLauncher(url, path, root) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [errorZip, setErrorZip] = useState(false);

  async function download() {
    // URL del archivo que quieres descargar

    // Ruta donde quieres guardar el archivo

    // Realizar una solicitud HTTP para obtener el contenido del archivo
    https.get(url, (response) => {
      console.log("Respuesta de la descarga", response);
      console.log(path)
      let data = '';
      let totalLength = parseInt(response.headers['content-length'], 10) || 0;
      let receivedLength = 0;

      // Acumular los datos recibidos
      const fileStream = fs.createWriteStream(path, { encoding: 'binary' });

      response.on('data', (chunk) => {
        fileStream.write(chunk, 'binary');
        receivedLength += chunk.length;

        const progressValue = (receivedLength / totalLength) * 100;
        setProgress(progressValue);
      });

      // Al completarse la descarga, escribir el archivo en la ruta especificada
      response.on('end', () => {
        fileStream.end();
        console.log('Archivo guardado con éxito en:', path);

        try {
          var zip = new AdmZip(path);
          zip.extractAllTo(root);
          var zip = new AdmZip(path);
          zip.extractAllTo(root);
          console.log('Archivo descomprimido con éxito');
          setComplete(true);
        } catch (ex) {
          var zip = new AdmZip(path);
          zip.extractAllTo(root);
          var zip = new AdmZip(path);
          zip.extractAllTo(root);
          console.log('Archivo descomprimido con éxito', "ex");
          setComplete(true);
        }
      });
    }).on('error', (error) => {
      console.error('Error al descargar y guardar el archivo:', error);
    });
  }

  return { download, progress, complete, errorZip };
}

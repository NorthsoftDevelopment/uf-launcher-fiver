import { useState } from "react";
import Swal from "sweetalert2";
const { remote } = require("electron");
const fs = require("fs");
const https = require("https");
var AdmZip = require("adm-zip");

export default function useDownloadLauncher(url, path, root) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [errorZip, setErrorZip] = useState(false);
  const [extractcomplete,setExctract] = useState(false);
 function download() {
    // URL del archivo que quieres descargar

    // Ruta donde quieres guardar el archivo

    // Realizar una solicitud HTTP para obtener el contenido del archivo
    https.get(url, (response) => {
        console.log("Respuesta de la descarga", response);
        console.log(path);
        let totalLength = parseInt(response.headers["content-length"], 10) || 0;
        let receivedLength = 0;

        // Acumular los datos recibidos
        const fileStream = fs.createWriteStream(path);

        response
          .on("data", (chunk) => {
            fileStream.write(chunk);
            receivedLength += chunk.length;

            const progressValue = Math.floor(
              (receivedLength / totalLength) * 100
            );
          
            setProgress(progressValue);
          })
          .on("end", () => {
            console.log("Archivo guardado con éxito en:", path);
            fileStream.end();
            setTimeout(() => {
              extract()
            }, 2300);
            setComplete(true);
           
          });
      })
      .on("error", (error) => {
        console.error("Error al descargar y guardar el archivo:", error);
      });
  }

  function extract(){
    if(!extractcomplete){
      new AdmZip(path).extractAllTo(root, true);
      setExctract(true)
      setComplete(true)
      setProgress(100)
      console.log("Archivo descomprimido con éxito");
    }
    
  }

  return { download, progress, complete, errorZip, extract, extractcomplete};
}

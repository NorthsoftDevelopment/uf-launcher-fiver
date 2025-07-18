import { useState } from "react";
const fs = window.require("fs");
const AdmZip = window.require("adm-zip");

export default function useDownloadLauncher(url, path, extractTo) {
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);
  const [errorZip, setErrorZip] = useState(false);
  const [extractcomplete, setExtractComplete] = useState(false);

  async function download() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

      const contentLength = response.headers.get("content-length");
      const totalBytes = parseInt(contentLength, 10) || 0;
      const reader = response.body.getReader();

      let receivedBytes = 0;
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        receivedBytes += value.length;

        if (totalBytes) {
          const percent = Math.floor((receivedBytes / totalBytes) * 100);
          setProgress(percent);
        }
      }

      const blob = new Uint8Array(receivedBytes);
      let offset = 0;
      for (const chunk of chunks) {
        blob.set(chunk, offset);
        offset += chunk.length;
      }

      const buffer = Buffer.from(blob);
      fs.writeFileSync(path, buffer);

      console.log("Archivo guardado en:", path);
      setComplete(true);

      const zip = new AdmZip(path);
      zip.extractAllTo(extractTo, true);

      console.log("Archivo descomprimido en:", extractTo);
      setExtractComplete(true);
    } catch (error) {
      console.error("Error en descarga:", error);
      setErrorZip(true);
    }
  }

  return {
    download,
    progress,
    complete,
    errorZip,
    extract: null,
    extractcomplete,
  };
}

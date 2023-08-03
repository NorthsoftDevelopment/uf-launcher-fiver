// Obtener el botón y la barra de progreso
const installButton = document.querySelector('.install-button');
const progressBar = document.getElementById('progressBar');

// URL del archivo que deseas descargar
const fileUrl = 'http://node.inhonia.online/java17.zip'; // Reemplaza esto con la URL correcta

// Función para descargar el archivo
function downloadFile() {
    // Iniciar la descarga del archivo mediante un enlace temporal
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'java17.zip'; // Reemplaza esto con el nombre del archivo que deseas descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Función para mostrar el progreso de la descarga (simulación de progreso)
function simulateDownloadProgress() {
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 200);
}

// Agregar el evento de clic al botón
installButton.addEventListener('click', () => {
    // Iniciar la descarga
    downloadFile();
    // Mostrar la barra de progreso
    progressBar.style.width = '0';
    simulateDownloadProgress();
});

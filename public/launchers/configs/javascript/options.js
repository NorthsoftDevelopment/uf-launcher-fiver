function cargarConfiguraciones() {
    const Cookies = require('js-cookie');

    const versionGuardada = Cookies.get('versionSeleccionada');
    const ramGuardada = Cookies.get('memoriaRam');
    const rutaGuardada = Cookies.get('rutaPersonalizada');
    const usernameGuardada = Cookies.get('username')

   
    const seleccionVersion = document.getElementById('seleccionVersion');
    const seleccionRam = document.getElementById('seleccionRam');
    const seleccionRoute = document.getElementById('seleccionRoute');
    const seleccionUsername = document.getElementById('user')

    
    if (versionGuardada) {
        seleccionVersion.value = versionGuardada;
    }

    if (ramGuardada) {
        seleccionRam.value = ramGuardada;
    }

    if (rutaGuardada) {
        seleccionRoute.value = rutaGuardada;
    }

    if (usernameGuardada) {
        seleccionUsername.value = usernameGuardada;
    }
}


cargarConfiguraciones();


function guardarConfiguraciones() {
    const Cookies = require('js-cookie');

    var versionSeleccionada = document.getElementById('seleccionVersion').value;
    var ramSeleccionada = document.getElementById('seleccionRam').value;
    var rutaSeleccionada = document.getElementById('seleccionRoute').value;
    var usernameSeleccionada = document.getElementById('user').value;

    
    Cookies.set('versionSeleccionada', versionSeleccionada, { expires: 7, sameSite: 'strict' });
    Cookies.set('memoriaRam', ramSeleccionada, { expires: 7, sameSite: 'strict' });
    Cookies.set('rutaPersonalizada', rutaSeleccionada, { expires: 7, sameSite: 'strict' });
    Cookies.set('username', usernameSeleccionada, { expires: 7, sameSite: 'strict' });

    Swal.fire({
        title: '',
        html: 'Espere un momento...',
        allowOutsideClick: false,
        timer: 3000,
        timerProgressBar: false,
        background: 'transparent',
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonColor: "rgb(0, 55, 255)",
        cancelButtonText: 'Cancelar',
        customClass: {
            titleText: 'title-loader', 
            timerProgressBar: 'progress-bar',
            text: 'title-loader', 
            target: 'title-loader', 
            htmlContainer: 'container-loader', 
        },
        willOpen: () => {
            Swal.showLoading();
        },
        willClose: () => {
           
            console.log('Guardado completado');
        }
    });

}

function eliminarCarpeta() {

    var valorRoot = document.getElementById('seleccionRoute').value;


    Swal.fire({
      text: "Esta accion es permanente",
      icon: 'warning',
      showCancelButton: true,
      background: '#252525',
      confirmButtonColor: 'rgb(0, 55, 255)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        title: 'title-loader', 
        titleText: 'title-loader', 
        text: 'title-loader', 
        target: 'title-loader', 
        htmlContainer: 'container-loader', 
    },
    }).then((result) => {
      if (result.isConfirmed) {

        const folderPath = valorRoot;
  
        const fs = require('fs');
        const path = require('path');
  
        fs.rmdir(folderPath, { recursive: true }, (err) => {
          if (err) {
            console.error('Error al eliminar la carpeta:', err);
            Swal.fire(
              'Error',
              'Hubo un error al eliminar la carpeta.',
              'error'
            );
          } else {
            console.log('Carpeta eliminada correctamente.');
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            );
          }
        });
      }
    });
  }


import { Tooltip } from "../../ExtraComponents/Tooltips/Tooltip";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { reloadScreen } from "../../ExtraComponents/ReloadScreen";
import "./options.css";
import "../../Launcher/Designed/config.css";
import axios from "axios";
import Swal from "sweetalert2";


export const OptionsClient = ({ admin}) => {

  const email = Cookies.get("email");

  useEffect(() => {

    document.body.classList.add('no-scroll');

  }, []);


  





return (
  <div className="private-launch" id="admin">
    <div className="content-private-config">
      <div>
      <h2>Opciones de Cliente</h2>
      <div className="line"></div>
      </div>
      
      </div>
     
  </div>
);
};


const handleUserAdd = async () => {
  const usermail = document.getElementById("adduser").value;

  const email = [usermail];
  console.log('send something')


  const data = {
    email: email,
    ubicacion: id,
  };

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
      container: 'title-loader',
      popup: 'title-loader',
      header: 'title-loader',
      title: 'title-loader',
    },


    willOpen: async () => {
      Swal.showLoading();
      try {
        const api = "https://inhonia-launcher-api.vercel.app/instance/adduser";
        const response = await axios.post(api, data);


        console.log(response)

        console.log("Successfully Get");
      } catch (error) {

        console.error(error);

        Swal.fire({
          icon: 'error',
          title: 'Error al intentar agregar usuario',
          background: '#1A1B1E',
          customClass: {
            container: 'title-loader',
            popup: 'title-loader',
            header: 'title-loader',
            title: 'title-loader',
          },
          footer: error.response.data.error

        })

      }

    },
    willClose: () => {

      console.log('Guardado completado');
      window.location.reload();

    }
  });


};

const uploadChanges = async() => {
  changesLaunch()
  handleUserAdd()
}
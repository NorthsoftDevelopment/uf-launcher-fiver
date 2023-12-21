import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";

export const UserAddInstannce = async (document) => {
    const usermail = Cookies.get('email')

    const email = [usermail];

    const data = {
        email: email,
        ubicacion: document,
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
            window.location.href = '/library';

        }
    });


};
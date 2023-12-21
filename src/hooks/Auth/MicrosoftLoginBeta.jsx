import { useState } from "react";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

export default function MicrosoftLogin() {
    Swal.fire({
        text: 'Intentando conexion',
        showConfirmButton: false,
        allowOutsideClick: false,
        timerProgressBar: false,
        background: '#141414',
        customClass: {
            container: 'title-loader',
            popup: 'title-loader',
            header: 'title-loader',
            title: 'title-loader',
        },
        didOpen: async () => {
            Swal.showLoading();

            try {
                const { Auth, errResponse } = require("msmc");
                const authManager = new Auth("select_account");

                const xboxManager = await authManager.launch("raw");

                try {
                    const token = await xboxManager.getMinecraft();

                    if (token) {
                        console.log('Complete it', token.profile);


                        const mcprofile = JSON.stringify(token.profile)
                        Cookies.set("user", mcprofile, { expires: 30, sameSite: "strict" });

                        const tokenJSON = JSON.stringify(token.mclc)
                        Cookies.set("MinecraftToken", tokenJSON, { expires: 30, sameSite: "strict" });




                        //window.location.href = '/'
                        Swal.close();

                    } else {
                        showError('Ocurrió un error');
                    }
                } catch (error) {
                    showError('Error al obtener el token de Minecraft', error);
                }
            } catch (error) {
                showError('Error al iniciar la conexión', error);
            }
        }
    });

    const showError = (message, error) => {
        Swal.fire({
            icon: 'error',
            title: 'Error al intentar conexion',
            background: '#141414',
            customClass: {
                container: 'title-loader',
                popup: 'title-loader',
                header: 'title-loader',
                title: 'title-loader',
            },
            text: message,
            footer: error ? error.toString() : '',

            didClose: () => {

                Swal.fire({
                    title: 'Porfavor visita este sitio y crea un perfil de Minecraft',
                    text: 'https://www.minecraft.net/en-us/msaprofile/mygames/editprofile',
                    background: '#141414',
                    customClass: {
                        container: 'title-loader',
                        popup: 'title-loader',
                        header: 'title-loader',
                        title: 'title-loader',
                    },
                })


            }
        });
    };

};
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { SeparateShort } from '../../ExtraComponents/Separate/Separate';
import { reloadScreen } from '../../ExtraComponents/ReloadScreen';

export const OptionsAdmin = ({ id, data }) => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {

        document.body.classList.add('no-scroll');

        takeUsers()



    }, []);







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
                    const api = "http://localhost:3000/instance/adduser";
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
                window.location.reload();

            }
        });


    };

    const handleRemoveUser = async (user) => {
        const usermail = user

        const email = [usermail];
        console.log('send something')




        Swal.fire({
            title: '',
            html: 'Eliminando Usuario...',
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
                    const api = "http://localhost:3000/instance/removeuser";
                    const response = await axios.delete(api, {
                        data: {
                            email: email,
                            ubicacion: id,
                        }
                    })


                

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

    const takeUsers = async () => {

        const data = { id }

        try {
            const response = await axios.post('http://localhost:3000/instance/whitelist', data);

            if (response.status === 200) {
                console.log('Datos enviados con éxito');

                const data = response.data

                setUsers(data.whitelistedUsers || []);
                setLoading(false);

             

            } else {
                console.error('Error al enviar datos');
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    };

    const filteredUsers = users.filter((user) =>
        user.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    };


    return (
        <div className="private-launch" id="admin">
            <div className="content-private-config">
                <div>
                    <div className='titles'>
                        <h2>Opciones de Administrador</h2>
                        <button className='x-button' onClick={reloadScreen}>X</button>
                    </div>

                    <div className="line"></div>

                    <div className='admin-user-acess'>
                        <h3 className='admin-user-acess-title'>Modificar Informacion</h3>
                        

                    </div>

                    <SeparateShort />


                    <div className='admin-user-acess'>
                        <h3 className='admin-user-acess-title'>Agregar Usuarios</h3>

                        <input id='adduser' className='input-general' placeholder='Escribe el mail del usuario'></input>

                        <button onClick={handleUserAdd} className='admin-user-acess-button'>Agregar</button>
                    </div>


                    <SeparateShort />
                    <div className='admin-user-acess'>
                        <div className='admin-user-acess-title'>
                            <h3>Usuarios Con Acceso</h3>
                            <input
                                type="text"
                                placeholder="Buscar usuario"
                                className='input-general'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {loading ? (
                            <p>Cargando...</p>
                        ) : (
                            <ul>
                                {filteredUsers.map((user) => (
                                    <div key={user} className='titles'>
                                        <li>{user}</li>
                                        <button onClick={() => handleRemoveUser(user)} className='x-button'>X</button>
                                    </div>

                                ))}
                            </ul>
                        )}

                    </div>


                </div>

            </div>

        </div>
    )
}

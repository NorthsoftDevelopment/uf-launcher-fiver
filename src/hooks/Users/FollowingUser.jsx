import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';

export const FollowingHook = async (follow) => {
    
    

    const email1 = Cookies.get('email')
    const email2 = follow


    try {
        const api = 'http://localhost:3000/users/follow';

        const response = await axios.post(api, {
            auth_email: email1,
            follow_email: email2
        });

        console.log(response)

        if (response) {
            const notificationContent = (
                <div>
                    <h3 className="title-notification">Notificacion</h3>
                    <p>Ahora sigues a {email2}</p>
                </div>
            );

            // Llama a react-hot-toast con la notificación
            toast.success(notificationContent, {
                duration: 6000, // Duración en milisegundos (opcional)
            });
        }

    } catch (error) {

        const notificationContent = (
            <div>
                <h3 className="title-notification">Notificacion</h3>

                <p>No puedes seguir a {email2} porque ya lo seguias</p>
            </div>
        );

        // Llama a react-hot-toast con la notificación
        toast(notificationContent, {
            duration: 6000, // Duración en milisegundos (opcional)
        });

        console.log('error', error);

    }

};

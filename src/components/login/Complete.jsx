import { useEffect, useState } from 'react'
import { Loader } from '../loader/Loader'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuth0 } from '@auth0/auth0-react'
import toast from 'react-hot-toast'
import useDownloadLauncher from '../../hooks/useDownloadLauncher'

export const CompleteLogin = () => {

    //Imports af auth and declaration API
    const api = 'http://localhost:3000/auth/user'
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();
    if (isLoading) {
        return <Loader reason='Recuperando perfil' />;
    }

    //Send data function
    useEffect(() => {

        sendata()

    }, [])

    //Send user data to backend and db
    const sendata = async () => {

        try {

            if (isAuthenticated) {
                const email = user.email



                const data = {
                    user: email,
                    name: user.name,
                    img: user.picture

                }

                const response = await axios.post(api, data);



                if (!response) {

                } else {

                    window.location.href = '/'
                }

            }

        } catch (error) {

            logout({ logoutParams: { returnTo: window.location.origin } })

            window.location.href = '/login'

        }

    }

    

    return (

        <Loader reason='Iniciando Sesion...' />

    )
}

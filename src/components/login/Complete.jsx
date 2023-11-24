import { useEffect } from 'react'
import { Loader } from '../loader/Loader'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuth0 } from '@auth0/auth0-react'

export const CompleteLogin = () => {

    //Imports af auth and declaration API
    const api = 'https://inhonia-launcher-api.vercel.app/auth/user'
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
    const sendata = async() => {

        try {

            if (isAuthenticated) {
                const email = user.email

                console.log(email)

                const data = {
                    user: email

                }

                const response = await axios.post(api, data);

                console.log(response)

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

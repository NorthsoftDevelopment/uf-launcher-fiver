import { useEffect, useState } from 'react'
import { Loader } from '../global/Loader'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Logout } from '../../hooks/Auth/Logout'

export const CompleteLogin = () => {
    //Imports af auth and declaration API
    const api = 'http://localhost:3000/auth/user'
    const [isLoading, setIsLoading] = useState(true)

    //Send data function
    useEffect(() => {
        sendata()
    }, [])

    //Send user data to backend and db
    const sendata = async () => {

        try {

            const profileJSON = Cookies.get('user')

            const profile = JSON.parse(profileJSON)

            const data = {
                user: profile.name,
                id: profile.id,
            }

            const response = await axios.post(api, data);

            console.log(response)



            if (!response) {

            } else {

                setIsLoading(false)

                window.location.href = '/'
            }



        } catch (error) {

            //logout({ logoutParams: { returnTo: window.location.origin } })

            window.location.href = '/login'
            Logout()
            console.log(error)

        }

    }

    return (

        <Loader reason='Iniciando sesion' />
    )




}

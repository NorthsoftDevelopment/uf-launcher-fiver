import React from 'react'
import { Loader } from '../loader/Loader'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuth0 } from '@auth0/auth0-react'

export const CompleteLogin = async () => {

    const api = 'https://inhonia-launcher-api.vercel.app/auth/user'
    const { user, isAuthenticated } = useAuth0();

    try {

        if (isAuthenticated) {
            const email = user.email

            console.log(email)

            const response = await axios.post(api, email);

        }

    } catch (error) {

    }


    return (

        <Loader />

    )
}

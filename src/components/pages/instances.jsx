import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

export const InstancesPage = () => {
    useEffect(() => {

        takeInstances()

    }, [])

    const background = Cookies.get('background')

    const takeInstances = async () => {
        try {
            const api = 'https://uf-launcher-api-fiver.vercel.app/instances';

            const profileJSON = Cookies.get('user')
            const profile = JSON.parse(profileJSON)

            const data = {

                id: profile.id
            }

            const response = await axios.post(api, data);;
            const instances = response.data;

            console.log(instances)

            setLoading(false)

        } catch (error) {

            console.log('error', error);

        }

    };

    return (
        <div className="welcome">
            <div className="bg-img">
                <img src={background} alt="" />
            </div>

        </div>
    )
}

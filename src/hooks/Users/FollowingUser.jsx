import React from 'react'
import axios from 'axios';

export const FollowingHook = async () => {


    try {
        const api = 'http://localhost:3000/users/follow';

        const response = await axios.post(api, {

            body: {
                auth_email: 'koraook@gmail.com',
                follow_email: 'redspower10@gmail.com'

            }
        });

        console.log(response)

    } catch (error) {

        console.log('error', error);

    }

};

import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { OptionsLaunchPrivate } from '../OptionsPrivate';

export const PrivateInstance = ({ children }) => {
    const [whitelist, setWhitelist] = useState([]);
    const email = Cookies.get('email');
    const isAdmin = email === 'koraook@gmail.com';

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const api = "https://inhonia-launcher-api.vercel.app/instance/whitelist";
            const docUbi = "oEFiPXiavEfQlfHQ0mgC";
            const docRef = [docUbi];
            const response = await axios.post(api, docRef);
            const whitelistData = response.data;

            setWhitelist(whitelistData);

            console.log(whitelistData)

            if (isAdmin) {
                console.log("Usuario Administrador");

            } else {
                console.log("Not admin user");
            }

            console.log("Successfully Get");
        } catch (error) {
            console.error(error);
        }
    };


    if (whitelist.includes(email)) {
        return <div>
            <div>{children}</div>
            <OptionsLaunchPrivate />
        </div>;

    } else {

        return <Navigate to='/' />;
    }
};

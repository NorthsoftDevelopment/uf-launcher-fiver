import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { OptionsLaunchPrivate } from '../OptionsPrivate';
import { Loader } from '../../../loader/Loader';

export const PrivateInstance = ({ children }) => {
    const [whitelist, setWhitelist] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // New state for loading
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
            setIsLoading(false);

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

    if (isAdmin) {

        return <div>
            <div>{children}</div>
            <OptionsLaunchPrivate />
        </div>;

    }


    if (isLoading) {

        return <Loader />;

    } else if (whitelist.includes(email)) {
        return (
            <div>
                <div>{children}</div>
            </div>
        );

    } else {
        return <Navigate to='/' />;
    }
};

import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { OptionsLaunchPrivate } from '../OptionsPrivate';
import { Loader } from '../../../loader/Loader';

export const PrivateInstance = ({ children, documentReference, admin, id }) => {
    const [whitelist, setWhitelist] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // New state for loading
    const [config, setConfig] = useState(false);

    const email = Cookies.get('email');
    const isAdmin = email === admin;


    useEffect(() => {
        fetchData();
    }, [documentReference]);

    //const docUbi = 'oEFiPXiavEfQlfHQ0mgC'

    const openConfig = () => {

        setConfig(!config);

    }

    const fetchData = async () => {
        try {
            const api = "https://inhonia-launcher-api.vercel.app/instance/whitelist";
            const docRef = [documentReference];
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

            window.location.origin
        }
    };


    if (isLoading) {

        return <Loader />;

    } else if (whitelist.includes(email)) {


        if (isAdmin) {

            return <div>

                <div>{children}</div>

                <button className='button-general-opt' onClick={openConfig}>Configuraciones</button>

                {config && <OptionsLaunchPrivate whitelist={whitelist} id={id} />}

            </div>;

        } else {

            return (

                <div>
                    <div>{children}</div>
                </div>
            );

        }

    } else {
        return <Navigate to='/' />;
    }
};

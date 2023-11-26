import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { Separate, SeparateShort } from '../ExtraComponents/Separate/Separate';


const Sidebar = ({ isOpen, onClose }) => {

    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();

    //Use state to necccesary things
    const [profileMC, setProfileMC] = useState([]);
    const [instances, setInstances] = useState([]);


    //Take profil
    const ProfileMCJSON = Cookies.get('tokenMC')


    //Auth loader
    if (isLoading) {
        return <h1>Cargando datos...</h1>;
    }


    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            {
                isAuthenticated && (
                    <div>
                        <div className='sidebar-zone1'>
                            <div className='sidebar-picture'>
                                <img src={user.picture}></img>
                            </div>
                            <div className='titles-sidebar'>
                                <button className="close-button" onClick={onClose}>
                                    X
                                </button>

                            </div>
                        </div>
                        <img src='https://cdn.discordapp.com/attachments/910002249651077150/1178107004745682944/Merry-Christmas6_6838525_lrg.jpg?ex=6574f0a6&is=65627ba6&hm=c437a99f08f83a7840cfe7f2e99ccf57adea3942de5f67a35558be962b4524ca&'></img>
                        <SeparateShort />


                        <div>
                            <div className='sidebar-profile'>



                                <h1>{user.name}</h1>
                                <p>{user.email}</p>
                                <button
                                    className="button-little"
                                    onClick={() =>
                                        logout({ logoutParams: { returnTo: window.location.origin } })
                                    }
                                >
                                    Cerrar Sesion
                                </button>
                            </div>

                        </div>

                    </div>
                )}

        </div>
    );
};

export default Sidebar;

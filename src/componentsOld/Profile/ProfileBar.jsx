import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { Separate, SeparateShort } from '../ExtraComponents/Separate/Separate';


const Sidebar = ({ isOpen, onClose, content }) => {

    const { user, isAuthenticated, isLoading } = useAuth0();



    //Auth loader
    if (isLoading) {
        return <h1>Cargando datos...</h1>;
    }


    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className='titles-sidebar'>
                <button className="close-button" onClick={onClose}>
                    X
                </button>

            </div>
            <div>{content}</div>
        </div>
    );
};

export default Sidebar;

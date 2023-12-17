import React from 'react'

export const RpcState = ( text ) => {

    console.log('RPC state:', text)

    const { ipcRenderer } = require('electron');

    const objeto = {
        message: text,
        valor: 42
    };

    ipcRenderer.send('discord', objeto);

}

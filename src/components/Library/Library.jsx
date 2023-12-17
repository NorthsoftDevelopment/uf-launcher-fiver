import React, { useEffect } from 'react'
import { RecentPlay } from '../global/Cards/RecentPlay'
import { SeparateShort } from '../ExtraComponents/Separate/Separate'
import { AllInstances } from '../global/Cards/AllInstances'
import { ConnectMinecraft } from '../../private/ConnectMinecraft'
import { RpcState } from '../../hooks/Electron/RpcState'

export const Library = () => {

    useEffect(() => {
   
    RpcState('Explorando Mi Biblioteca')
     
    }, [])
    


    return (
        <ConnectMinecraft>
            <div className='content'>
                <h1 className='title-general-bold-big'>MI BIBLIOTECA</h1>
                <SeparateShort />
                
                <div>
                <h3 className='title-general-bold'>JUGASTE RECIENTEMENTE</h3>
                    <RecentPlay />
                </div>
                <SeparateShort />
                <div>
                    <h3 className='title-general-bold'>INSTANCIAS GUARDADAS</h3>

                    <AllInstances />

                </div>

            </div>
        </ConnectMinecraft>
    )
}

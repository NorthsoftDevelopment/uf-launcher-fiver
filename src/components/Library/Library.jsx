import React from 'react'
import { RecentPlay } from '../global/Cards/RecentPlay'
import { SeparateShort } from '../ExtraComponents/Separate/Separate'
import { AllInstances } from '../global/Cards/AllInstances'
import { ConnectMinecraft } from '../../private/ConnectMinecraft'

export const Library = () => {


    return (
        <ConnectMinecraft>
            <div className='content'>
                <h1 className='title-general-bold-big'>BIBLIOETECA</h1>
                <SeparateShort />
                <div>
                    <RecentPlay />
                </div>
                <SeparateShort />
                <div>
                    <h3 className='title-general-bold'>TODAS MIS INSTANCIAS</h3>

                    <AllInstances />

                </div>

            </div>
        </ConnectMinecraft>
    )
}

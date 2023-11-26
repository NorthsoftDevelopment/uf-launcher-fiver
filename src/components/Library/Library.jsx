import React from 'react'
import { RecentPlay } from '../global/Cards/RecentPlay'
import { SeparateShort } from '../ExtraComponents/Separate/Separate'
import { AllInstances } from '../global/Cards/AllInstances'

export const Library = () => {
   

    return (
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
    )
}

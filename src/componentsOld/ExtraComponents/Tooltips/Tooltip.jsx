import React from 'react';
import './tooltip.css';

export const Tooltip = ({title, tooltip}) => {
    return (
        <div className='tooltip-container'>
            <div className='tooltip'>
            <p>{title}</p>
                <div className='tooltip-text'>{tooltip}</div>
            </div>

        </div>
    );
};

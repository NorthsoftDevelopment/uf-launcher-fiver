import React from 'react'
import { Separate, SeparateShort } from '../ExtraComponents/Separate/Separate'

export const Skeleton = () => {
  return (
    <div className='content skeleton-container'>
        <div className='cards-big'>
            <div className='skeleton-card loading'></div>
            <div className='skeleton-card loading'></div>
            <div className='skeleton-card loading'></div>
        </div>
        <Separate />
        <div className='cards-big'>
        <div className='skeleton-card loading'></div>
        <div className='skeleton-card loading'></div>
        </div>
    </div>
  )
}

export const SkeletoMitad = () => {
    return (
      <div className='content'>
          <div className='cards-big'>
              <div className='skeleton-card-mitad loading'></div>
  
          </div>
          
      </div>
    )
  }

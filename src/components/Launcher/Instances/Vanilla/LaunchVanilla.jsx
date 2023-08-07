import React from 'react'
import { LauncherDesigned } from '../../Designed/LauncherDesigned'
import background from '../../../../assets/backgrounds/background-home.png'

export const LaunchVanilla = () => {

    const test = () => {

        console.log('test ready')

    }

  return (
    <div>
        <LauncherDesigned 
        
        title='Minecraft Vanilla'
        background={background}
        autor='Korita'
        launch={test}
        
        />
    </div>
  )
}
